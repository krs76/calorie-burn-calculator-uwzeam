import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Chart} from 'chart.js';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css']
})
export class AboutPage {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  mets : number;
  weight : number;
  duration : number;
  cal : number;
  cal1 : number;
  cal2 : number;
  cal3 : number;
  cal4 : number;
  cal5 : number;
  cal6 : number;
  weightLoss : number
  activity : string;
  cbcMessage : string;
  showMessage : boolean;
   
  constructor(public navCtrl: NavController) { }
  
  calculateCBC() {
    this.cal = ((this.mets * 3.5 * this.weight) / 200) * this.duration;
    this.cal = parseFloat(this.cal.toFixed(2));
    this.cal1 = parseFloat((((1.3 * 3.5 * this.weight)/200)*this.duration).toFixed(2)) 
    this.cal2 = parseFloat((((1.8 * 3.5 * this.weight)/200)*this.duration).toFixed(2)) 
    this.cal3 = parseFloat((((3.5 * 3.5 * this.weight)/200)*this.duration).toFixed(2)) 
    this.cal4 = parseFloat((((3.5 * 3.5 * this.weight)/200)*this.duration).toFixed(2)) 
    this.cal5 = parseFloat((((8.0 * 3.5 * this.weight)/200)*this.duration).toFixed(2)) 
    this.cal6 = parseFloat((((8.0 * 3.5 * this.weight)/200)*this.duration).toFixed(2)) 
    this.weightLoss = parseFloat((this.cal/7700).toFixed(2));
    this.barChart.data.datasets[0].data = [this.cal1,this.cal2,this.cal3,this.cal4,this.cal5,this.cal6, ];
    this.barChart.update();
    this.showMessage = true;
  }
ngOnInit() {
this.showMessage = false;
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Sitting","Standing", "Housework", "Weight Training", "Bicycling 12-14 mph", "Single Tennis"],
        datasets: [{
         label: "Calories Burned",
          data: [0, 0, 0, 0, 0, 0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
            
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
    });
}
}