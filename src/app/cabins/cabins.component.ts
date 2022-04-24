import { Component, OnInit } from '@angular/core';
import { CabinsService } from './cabins.service';

@Component({
  selector: 'app-cabins',
  templateUrl: './cabins.component.html',
  styleUrls: ['./cabins.component.css']
})
export class CabinsComponent implements OnInit {

  CabinsdataList:any;
  cabintabMainList:any;
  cabintabMainListB3:any;
  cabintabMainListB4:any;
  cabintabMainListB7:any;
  cabintabMainListB12:any;
  

  constructor(private CabinsService:CabinsService) { }

  ngOnInit(): void {
    this.CabinsService.getCanins().subscribe(res=>{
      this.CabinsdataList=res.data[0];
    })

    this.CabinsService.postCaninsMain().subscribe(res=>{
      this.cabintabMainList=res.data;
    })
    this.CabinsService.postCaninsMainBed3().subscribe(res=>{
      this.cabintabMainListB3=res.data;
    })
    this.CabinsService.postCaninsMainBed4().subscribe(res=>{
      this.cabintabMainListB4=res.data;
    })
    this.CabinsService.postCaninsMainBed7().subscribe(res=>{
      this.cabintabMainListB7=res.data;
    })
    this.CabinsService.postCaninsMainBed12().subscribe(res=>{
      this.cabintabMainListB12=res.data;
    })
  }

}
