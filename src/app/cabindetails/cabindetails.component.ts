import { Component, OnInit } from '@angular/core';
import { CabindetailsService } from './cabindetails.service';

@Component({
  selector: 'app-cabindetails',
  templateUrl: './cabindetails.component.html',
  styleUrls: ['./cabindetails.component.css']
})
export class CabindetailsComponent implements OnInit {

  CabindetailsList:any;

  cabinBanner:any;

  constructor(private CabindetailsService:CabindetailsService) { }

  ngOnInit(): void {
      this.CabindetailsService.getCabinDetail().subscribe(res=>{
      this.CabindetailsList=res.data[0];})

      this.CabindetailsService.getBedBanner().subscribe(res=>{
      this.cabinBanner=res.data[0];})
  }

}
