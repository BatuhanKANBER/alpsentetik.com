import { Component, OnInit } from '@angular/core';
import { SifirUrunlerService } from '../services/sifirurunler.services';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from '../services/product';
@Component({
  selector: 'app-sifirurunler',
  templateUrl: './sifirurunler.component.html',
  styleUrls: ['./sifirurunler.component.scss']
})
export class SifirurunlerComponent implements OnInit {

  products: Product[] = [];
  
  sortOptions: SelectItem[]=[];

  sortOrder: number=0;

  sortField: string="";

  constructor(private productService: SifirUrunlerService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.scrolUp();
    this.productService.getProducts().then(data => this.products = data);

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  scrolUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
