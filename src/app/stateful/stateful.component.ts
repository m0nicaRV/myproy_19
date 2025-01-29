import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ShopModel } from '../models/shop.model';
import { CommonModule } from '@angular/common';
import { Product } from '../interface/product';
import { StatelessComponent } from "../stateless/stateless.component";

@Component({
  selector: 'app-stateful',
  standalone: true,
  imports: [CommonModule, StatelessComponent],
  templateUrl: './stateful.component.html',
  styleUrl: './stateful.component.css'
})
export class StatefulComponent implements OnInit {
  shopModel:Product[] = new ShopModel().shopItems;
  
  boughtItems: Product[] = [];
  constructor() {

   }

  ngOnInit(): void {  
  }

  clickItem(item: Product){
    this.boughtItems.push(item);
  }

  setBoughtItems(boughtItem: Product){
    if(this.boughtItems.includes(boughtItem)){
      this.boughtItems = this.boughtItems.filter(item => item !== boughtItem);
    }else{
    this.boughtItems = [...this.boughtItems, boughtItem];
    }
  }
  }
