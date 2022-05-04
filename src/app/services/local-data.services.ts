import { Injectable } from '@angular/core';
import { observable, Observable, subscribeOn, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LocalDataServices {
    constructor(){}


  //get the article details to local storage
  getCovid19ArticleDetails(){ 
    
        return new Observable((subscribe) => {
            setTimeout(() => {
            //  console.log(this.covid19);
            //   const newArticleList = [...this.covid19];
            //   this.covid19 = newArticleList;
      
              subscribe.next(this.covid19);
              subscribe.complete();
            }, 1000);
          });
    
  }

  //setter for covid19 article

  private set covid19(article:any) {
    localStorage.setItem("covid19", JSON.stringify(article));
  }

 



// getter for covid19 article

private get covid19() {
    const data = localStorage.getItem('covid19');
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }


 //getting covid19 article from localStorage

//  getCovid19ArticleList() {
//     return new Observable((subscribe) => {
//       setTimeout(() => {  
//         subscribe.next(this.covid19);
//         subscribe.complete();
//       }, 2000);
//     });
//   }


}