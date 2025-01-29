
import {Product } from '../interface/product';

export class ShopModel {
    shopItems: Product[]=[];

    constructor(){
        this.shopItems= [
            {
                title:"Google pixel 9",
                desc: "Movil de alta generacion",
                picture:"../assets/google_pixel.jpeg",
                price: 699
            },
            {
                title:"Xiaomi note 10",
                desc: "Movil de alta generacion",
                picture:"assets/xiaomi.jpeg",
                price: 799
            },
            {
                title:"Iphone 11",
                desc: "Movil de alta generacion",
                picture:"assets/iphone11.jpeg",
                price: 999
            }
        ]

    }

}
