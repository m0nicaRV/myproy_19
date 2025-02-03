import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interface/product';
import { StatefulComponent } from '../stateful/stateful.component';

@Component({
  selector: 'app-confirm',
  imports: [CommonModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent implements OnInit {
  @Input() precio!:number;
  @Input() product: Product[]=[];
  isDisabled: boolean = true;
  showModel: boolean = false;



  constructor( ) { }

  ngOnInit(): void {
  }

}
