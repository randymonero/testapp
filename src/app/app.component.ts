import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  options : any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };


  toDay = new Date();
  monthDaysIsDisplayed = false;
  // selectedMonthIndex = 1;
  selectedMonthDays : Date[] = [];

  currentMonthDays : Date[] = [];

  constructor(
    private router : Router
  ) {
    // this.toDay = new Date();

    for (let i = 1; i<= 30; i++){
      const dateToAdd = new Date();
      dateToAdd.setDate(i);

      this.currentMonthDays.push(dateToAdd);
    }
  }


  ngOnInit(): void {
    this.toDay = new Date();
  }

  // selectMonth(monthIndex : number){    
  //   this.selectedMonthIndex = monthIndex;
  // }

  // showDaysOfTheMonth(){
  //   if (!this.monthDaysIsDisplayed) {
  //     this.selectedMonthDays = [];
  //     const numberDayOfMonth = new Date(this.toDay.getFullYear(), this.selectedMonthIndex, 0).getDate();
      
  //     for (let aDayIndex = 1; aDayIndex < numberDayOfMonth; aDayIndex++) {
  //       this.selectedMonthDays.push(
  //         new Date(this.toDay.getFullYear(), this.selectedMonthIndex, aDayIndex)
  //       );
  //     }
  //   }


  //   this.monthDaysIsDisplayed = !this.monthDaysIsDisplayed;
  // }

  displayMonthName(monthIndex : number){
    const date = new Date(0, monthIndex,0,0);

    const dateAsStr = (date.toLocaleDateString('fr-FR', this.options)).split(' ')[2];

    return dateAsStr[0].toUpperCase() + dateAsStr.substr(1).toLowerCase();
  }

  displayDayOfMonth(dateToDisplay : number){
    return dateToDisplay > 9 ? ''+dateToDisplay : '0'+dateToDisplay
  }

  displayDayOfMonthName(day : Date){
    let dayStr = day.toLocaleDateString('fr-FR', this.options);
    // console.log('dayStr:'+dayStr);

    const dayParts = dayStr.split(' ');

    dayStr = dayParts[0];
    dayStr= dayStr.substring(0,3);
    
    return dayStr[0].toLocaleUpperCase()+dayStr.substring(1);

    /*'dimanche 9 juin 2024'

    'dimanche'
    '9'
    'juin'
    '2024'*/
  }


  async openHomePage(){
    await this.router.navigate(['home']);
  }

  async openTaskPage(){
    await this.router.navigate(['tasks']);
  }

  async openCalculatorPage(){
    await this.router.navigate(['calculator']);
  }

  async openAuthPage(){
    await this.router.navigate(['authentificators'])
  }
}