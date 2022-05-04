import { Component, OnInit } from '@angular/core';
import { LocalDataServices } from 'src/app/services/local-data.services';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {

  covid19article:any;
  covid19: any = [];
  id = 1;
  newid: any = 1;
  public isMobileLayout = false ;

  constructor(private _local:LocalDataServices) {
    this.saveData();
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
   }

  ngOnInit(): void {}

 saveData(){
   const article = [
     {
       id: 1,
       image_url: 'https://lh3.googleusercontent.com/eRTV5GMy69P2kjNvdnUQB3nm3fFqQBADLGYHIuDvTzm7eFQeXs7ELtG_XnBwZyxu438D6zD7vkOa2PfKcKTu08S4AQh5FcdHiny09WqmHLKHwdnjbX4=w1424-h1600-n-l80-sg-rj',
       heading: 'Data tracking for disease spread',
       content: 'Google.org granted $1.25 million in funding and provided a team of 10 full-time Google.org Fellows and 7 part-time Google volunteers to help COVID-19 researchers from the University of Oxford, Tsinghua University, Northeastern University and Boston Children’s Hospital, among others create Global.health, a scalable and open-access platform that pulls together millions of anonymized COVID-19 cases from over 100 countries. This platform helps epidemiologists around the world model the trajectory of COVID-19, and track its variants and future infectious diseases.',
     },
     {
       id:2,
       image_url:'https://lh3.googleusercontent.com/IroE36UTqkBpv6ARD42fWIBB0MqKCeHabKi1dzknIxPCh-D2PBJa9z6HchAdcXaHOKAC__Q1rRwphe-pt1gpUBf-0g1xcHjBfhZa=w1424-h1600-n-l80-sg-rj',
       heading: 'Helping National Domestic Workers Alliance support domestic workers through direct cash transfers',
       content: 'Seven Google.org Fellows are helping the National Domestic Workers Alliance expand their benefits tool to distribute an emergency cash fund for essential workers.',
     },
     {
      id:3,
      image_url:'https://lh3.googleusercontent.com/hlCNpLyddjCiEx696jmAtHFNohIyLSQgzDws2MaC9TluXWn0_uLW1n682zydNR03nhcjoOXwl1wxfVH7v7a2Jhgyh3ujDHjlLG2W=w1424-h1600-n-l80-sg-rj',
      heading: 'Assisting Médecins Sans Frontières to adapt and deploy a syndrome tracking system',
      content: 'Google.org Fellows are helping La Fondation Médecins Sans Frontières to adapt and deploy a multi-scale symptom tracking system developed by Medic Mobile for COVID-19.',
    },
    {
      id:4,
      image_url:'https://lh3.googleusercontent.com/PzuQTIdwzNcpTr1z0ofWJDEFFGM_RwOo7MPUAruJR0Yu9lngqmHsp7bu-Rbto8L40jGw1JQCLsvFZj2gbfN2-DwvlAvfHB_g8IPTNg=w1424-h1600-n-l80-sg-rj',
      heading: 'Helping the State of New York evaluate and solve COVID-19 related technical challenges',
      content: '10 Google.org Fellows are supporting Governor Cuomo’s COVID-19 Technology SWAT Team for six months full-time to help New York residents find and access critical COVID-19 related information during and after the pandemic.',
    }
   ];
   localStorage.setItem("covid19", JSON.stringify(article));
   this._local.getCovid19ArticleDetails().subscribe({
    next: (res: any) => {
      // console.log(res); 
     this.covid19article = res;
     this.covid19article.map((item:any) => {
       if (item.id == this.newid){
         this.covid19 = item;
         console.log(this.covid19);
         
       }
     })
    }
  });
 }

 covid19ArticleDetails(){
  this._local.getCovid19ArticleDetails().subscribe({
    next: (res: any) => {
      // console.log(res); 
     this.covid19article = res;
     this.covid19article.map((item:any) => {
       if (item.id == this.newid){
         this.covid19 = item;
         console.log(this.covid19);
         
       }
     })
    }
  });
 }

  incrementId(){

    if(this.id < 5){
     this.newid = this.id++;
     this.covid19ArticleDetails();
    //  console.log(this.newid);
    }
    else if (this.id = 5){
     this.id = 1;
    }
  }

  OnClickScroll(id: any){
    const health = document.getElementById(id);
    window.scrollTo((health as HTMLElement).offsetLeft,(health as HTMLElement).offsetTop);
  };




 

 




}





