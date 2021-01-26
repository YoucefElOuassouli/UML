import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { voyages } from 'src/datamodel/voyages.model';

@Component({
  selector: 'app-trainvoyage',
  templateUrl: './trainvoyage.component.html',
  styleUrls: ['./trainvoyage.component.css']
})
export class TrainvoyageComponent implements OnInit {


  voyages_list2 :voyages[]=[];

  constructor(private service: SharedService) { }
  VTList:any =[];
  ngOnInit(): void {
    this.refreshData();

  }

  LeavingTimeFilter!:Date;
  FromFilter!:string;
  ToFilter!:string;
  ListWihoutFilter:any=[];
  DateFilter!:Date;

  refreshData(){
    this.service.getList().subscribe(data =>{
        this.voyages_list2 = data;
        this.VTList= data;
        this.ListWihoutFilter = data;
    });
  }

  FIlterFunc(){
    var LeavingTimeFilter = this.LeavingTimeFilter;

    this.VTList = this.ListWihoutFilter.filter((res: { LeavingTime: { toString: () => string; }; }) => {
      return res.LeavingTime.toString().toLowerCase().match(this.LeavingTimeFilter.toString().toLowerCase());
    });
  }

  FilterFuncFrom(){
    var FromFilter = this.FromFilter;

    this.VTList = this.ListWihoutFilter.filter((res: { From: { toString: () => string; }; }) => {
    return res.From.toString().toLowerCase().match(this.FromFilter.toString().toLowerCase());
    });
  }

  FilterFuncTo(){
    var ToFilter = this.ToFilter;

    this.VTList = this.ListWihoutFilter.filter((res: { To: { toString: () => string; }; }) => {
    return res.To.toString().toLowerCase().match(this.ToFilter.toString().toLowerCase());
    });
  }

  FilterFuncDate(){
    var DateFilter = this.DateFilter;

    this.VTList = this.ListWihoutFilter.filter((res: { Date: { toString: () => string; }; }) => {
    return res.Date.toString().toLowerCase().match(this.DateFilter.toString().toLowerCase());
    });


  }


}
