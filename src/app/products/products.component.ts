import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: '',
      title: 'Novation Launchkey 61',
      price: 3300,
      description: 'Controlador MIDI'
    },
    {
      id: '2',
      image: '',
      title: 'Novation Launchkey 49',
      price: 2300,
      description: 'Controlador MIDI'
    },
    {
      id: '3',
      image: '',
      title: 'Novation Launchkey 25',
      price: 1300,
      description: 'Controlador MIDI'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
