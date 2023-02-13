import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent {

  constructor(
    private product: Product
  ) { }
  
  search(searchText: string): void{
    searchText = searchText.toLowerCase();

    const filteredSearch = this.product.name.filter (() =>{
      return this.product.name.toLowerCase().indexOf(searchText) > -1;
    })
  }
}
