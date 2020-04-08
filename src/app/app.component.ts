import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'newApp';
  constructor(public signalRService:SignalRService,private http:HttpClient){

  }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();   
    
  }
  public sendRequest(){
    this.http.get('https://signalapp.azurewebsites.net/chart')
      .subscribe(res => {
        console.log("sent");
      });
  }
  
}
