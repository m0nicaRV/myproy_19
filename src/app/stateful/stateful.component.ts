import { Component, Input, OnInit, ViewChild , } from '@angular/core';
import { ShopModel } from '../models/shop.model';
import { CommonModule } from '@angular/common';
import { Product } from '../interface/product';
import { StatelessComponent } from "../stateless/stateless.component";
import { ConfirmComponent } from "../confirm/confirm.component";

@Component({
  selector: 'app-stateful',
  standalone: true,
  imports: [CommonModule, StatelessComponent, ConfirmComponent],
  templateUrl: './stateful.component.html',
  styleUrl: './stateful.component.css'
})
export class StatefulComponent implements OnInit {
  @ViewChild(ConfirmComponent,{static: false}) confirmComponent!: ConfirmComponent;
  
  shopModel:Product[] = new ShopModel().shopItems;
  precio:number =0;
  
  boughtItems: Product[] = [];
  constructor() {

   }

  ngOnInit(): void {  
  }

  clickItem(boughtItem: Product){  
    if(this.boughtItems.includes(boughtItem)  ){
      this.boughtItems = this.boughtItems.filter(item => item !== boughtItem);    
    }else{
      this.boughtItems = [...this.boughtItems, boughtItem];  
    }
  }

  precioTotal(){  
    if (this.boughtItems) {
      return this.boughtItems.reduce((prev:number, item:Product) => prev + item.price, 0);
    }return 0;
  }


  setBoughtItems(_event: Product){
    this.clickItem(_event);
    this.confirmComponent.isDisabled = false;
  }
  }
