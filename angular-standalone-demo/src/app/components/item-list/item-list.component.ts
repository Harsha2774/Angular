import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items = [
    { name: 'Laptop', price: 800, available: true },
    { name: 'Phone', price: 500, available: false },
    { name: 'Tablet', price: 300, available: true }
  ];
}
