import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../proservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  
  category;
  catprodlist
  constructor(private proser:ProserviceService,private activateroute: ActivatedRoute) { 
    this.category=this.activateroute.snapshot.params.id;
    this.proser.categoryProducts(this.category).subscribe((data)=>{
      this.catprodlist=data;
    })
  }

  ngOnInit(): void {
  }
  
}
