import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../proservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {
  
  prodname
  prod;
  constructor(private productService:ProserviceService,private active:ActivatedRoute) { 
    this.prodname=this.active.snapshot.params.id;
    this.productService.singleview(this.prodname).subscribe((data)=>{
      this.prod=data;
    })

  }
 ngOnInit(): void {}
}
