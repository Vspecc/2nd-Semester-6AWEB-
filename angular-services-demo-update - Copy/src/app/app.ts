import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee/employee'; // Pointing to your employee folder
import { MyserviceService } from './myservice';        // Pointing to myservice.ts
import { NewCmpComponent } from './new-cmp/new-cmp';   // Pointing to new-cmp.ts
import { ProductsService } from './product/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NewCmpComponent],
  templateUrl: './app.html',
  // styleUrl: './app.component.css'  <-- DELETE or COMMENT OUT this line
})
export class AppComponent {
    title = 'ng-services-demo';
  public employees: any;
  public products: any;
  public todaydate: any;
  public componentproperty: any;

  constructor(
    private _employeeService: EmployeeService,
    private _productsService: ProductsService,
    private _myservice: MyserviceService
  ) {
    this.employees = _employeeService.getEmployees();
    this.products = _productsService.getProducts();
    this.todaydate = _myservice.showTodayDate();
    this.componentproperty = _myservice.serviceproperty;
  }
}
