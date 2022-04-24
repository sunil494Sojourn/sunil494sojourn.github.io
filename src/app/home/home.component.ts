import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homedataList : any;
  constructor(private HomeService:HomeService) { }

  ngOnInit(): void {
    this.HomeService.getHome().subscribe(res=>{
      this.homedataList=res[0];
    })
  }

}
