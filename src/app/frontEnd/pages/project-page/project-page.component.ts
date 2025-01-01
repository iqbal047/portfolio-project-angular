import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent  implements OnInit{

  constructor(private service: DatabaseServiceService){}

  onlineProjects!: any;

  ngOnInit(): void {
    this.service.getAllProjects().subscribe(
      {
        next: r=>{
         this.onlineProjects = r;
        },
        error: e=>{
          console.log(e);
          
        }
      }
    )
  }



  
  defaultProjects =[
    {
      "projectImage": "https://live.staticflickr.com/65535/52912673780_9928a7bbfd.jpg",
      "projectName":"Naxian Fashion",
      "appType":"Web Application",
      "projectDescription":"This is My First Full Project With Rest Api and Angular. This is an Online Store where u can sell and buy Anything.",
      "projectLiveUrl":"https://naxianfashion-7b928.web.app/",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/Naxian_Fashion_Angular",
      "programingLanguagesUsed":"#Angular, #Java, #Spring, #Spring Boot, #Scss, #Bootstrap, #Html #TypeScript",
    },
    {
      "projectImage": "https://live.staticflickr.com/65535/52911715777_275d413dd6_z.jpg",
      "projectName":"Naxian Fashion Api",
      "appType":"Spring Boot Rest Api",
      "projectDescription":"This is The Rest Api Of Naxian Fashion Project.",
      "projectLiveUrl":"https://juicy-camera-production.up.railway.app/",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/Naxian_Fashion_Rest_Api_SpringBoot.git",
      "programingLanguagesUsed":"#Java, #Spring, #Spring Boot",
    },
    {
      "projectImage": "https://live.staticflickr.com/65535/52911724947_39cb86d15e.jpg",
      "projectName":"Feni Bank",
      "appType":"Desktop Application",
      "projectDescription":"This is A Bank Application, Created With Java Swing",
      "projectLiveUrl":"This project is not hosted on the internet",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/FeniBank_JavaSwing_Application.git",
      "programingLanguagesUsed":"#Java, #Java Swing",
    },

    {
      "projectImage": "https://live.staticflickr.com/65535/52912758703_d97b8c549d_z.jpg",
      "projectName":"Birth Day Wishing Web Site",
      "appType":"Web Site",
      "projectDescription":"This is a Birth day wishin web site, by that web site you can wish your loved one",
      "projectLiveUrl":"https://mitubirthday.netlify.app/",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/birthDayWissingApplication",
      "programingLanguagesUsed":"#JavaScript",
    },

    // {
    //   "projectImage": "",
    //   "projectName":"",
    //   "appType":"",
    //   "projectDescription":"",
    //   "projectLiveUrl":"",
    //   "projectGithubLink":"",
    //   "programingLanguagesUsed":"",
    // },
    
  ]


}
