import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      { productId: 'EQ-1001', productName: 'MacBook Pro 16"', description: 'M3 Max, 64GB Unified Memory', price: 3499.00 },
      { productId: 'EQ-1002', productName: 'Dell UltraSharp 27"', description: '4K USB-C Hub Monitor', price: 549.00 },
      { productId: 'EQ-1003', productName: 'Herman Miller Aeron', description: 'Ergonomic Office Chair', price: 1250.00 },
      { productId: 'EQ-1004', productName: 'Logitech MX Master 3S', description: 'Advanced Wireless Mouse', price: 99.00 },
      { productId: 'EQ-1005', productName: 'Keychron Q1 Pro', description: 'Custom Mechanical Keyboard', price: 199.00 },
      { productId: 'EQ-1006', productName: 'Sony WH-1000XM5', description: 'Noise Cancelling Headphones', price: 348.00 },
      { productId: 'EQ-1007', productName: 'CalDigit TS4 Dock', description: 'Thunderbolt 4 Docking Station', price: 399.00 },
      { productId: 'EQ-1008', productName: 'FujiFilm X100VI', description: 'Creative Team Camera Kit', price: 1599.00 }
    ];
  }
}
