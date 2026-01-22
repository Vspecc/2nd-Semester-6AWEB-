import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyserviceService } from '../myservice';

@Component({
  selector: 'app-new-cmp',
  standalone: true,
  imports: [CommonModule],
  // UPDATED: Point to new-cmp.html
  templateUrl: './new-cmp.html',
})
export class NewCmpComponent {
  todaydate;
  newcomponent = "Entered in new component!";
  componentproperty;

  constructor(private myservice: MyserviceService) {
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = "Component Created";
    this.componentproperty = this.myservice.serviceproperty;
  }
}
