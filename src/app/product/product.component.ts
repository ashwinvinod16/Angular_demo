import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../proservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   categorylist;
  constructor(private proser:ProserviceService) { 
    this.proser.listcategory().subscribe((data)=>{
      this.categorylist=data;
  })
  }

  ngOnInit(): void {
  }


}
