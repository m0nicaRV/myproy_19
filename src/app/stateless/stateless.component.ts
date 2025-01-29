import { Component, OnInit, Input, output, EventEmitter, Output} from '@angular/core';
import { Product } from '../interface/product';
import { StatefulComponent } from '../stateful/stateful.component';

@Component({
  selector: 'app-stateless',
  imports: [],
  templateUrl: './stateless.component.html',
  styleUrl: './stateless.component.css'
})
export class StatelessComponent {
  public compra:string="Comprar";
  private disable:boolean=false;
  @Input() product: Product={};
  @Output() boughtItemEmiter = new EventEmitter<Product>();

  constructor() { 
  }

  bought(item:Product){
    if(this.compra == "Comprado"){
      this.disable=false;
      this.compra="Comprar";

    }else{
        this.disable=true;
        this.compra="Comprado";
    }
    this.boughtItemEmiter.emit(item);
   
  }

  isdisabled(){
    //return this.disable;
  }


}
