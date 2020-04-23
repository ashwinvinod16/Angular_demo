import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { ProserviceService } from '../proservice.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  userForm;
  constructor(private productService:ProserviceService) { 
    this.userForm=new FormGroup({
     'productName':new FormControl(),
     'description': new FormControl(),
     'email': new FormControl('',Validators.required),
     'Category': new FormControl()
    });
  }
  sendata(){
   if(this.userForm.valid) 
    this.productService.postProduct(this.userForm.value).subscribe((productdata)=>{
      alert("done");
    })
  }

  ngOnInit(): void {
  }

}
