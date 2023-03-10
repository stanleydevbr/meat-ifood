import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  preserveWhitespaces: true,
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready',
        animate('300ms 0s ease-in', keyframes([
          style({opacity:0, transform: 'translateX(-30px)', offset:0}),
          style({opacity:0.8, transform: 'translateX(10px)', offset:0.8}),
          style({opacity:1, transform: 'translateX(0px)', offset:1}),
        ]))),
        transition('ready => void',
        animate('300ms 0s ease-out', keyframes([
          style({opacity:1, transform: 'translateX(0px)', offset:0}),
          style({opacity:0.8, transform: 'translateX(-10px)', offset:0.2}),
          style({opacity:0, transform: 'translateX(30px)', offset:1}),
        ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready'
  constructor(private service: ShoppingCartService) { }
  ngOnInit(): void {
  }

  items(): any[]{
    return this.service.items;
  }

  total(): number {
    return this.service.total()
  }

  clear(): void{
    this.service.clear()
  }

  removeItem(item: any){
    this.service.removerItem(item)
  }

  addItem(item: any){
    this.service.addItem(item)
  }

}
