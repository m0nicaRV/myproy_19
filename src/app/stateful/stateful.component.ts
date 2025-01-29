import { Component, OnInit } from '@angular/core';
import { ShopModel } from '../models/shop.model';
import { CommonModule } from '@angular/common';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateful',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stateful.component.html',
  styleUrl: './stateful.component.css'
})
export class StatefulComponent implements OnInit {
  shopModel:Product[] = new ShopModel().shopItems;
  
  boughtItems: object[] = [];
  constructor() {

   }

  ngOnInit(): void {  
    
   
  }

}
