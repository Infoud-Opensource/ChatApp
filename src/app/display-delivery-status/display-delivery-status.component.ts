import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-delivery-status',
  templateUrl: './display-delivery-status.component.html',
  styleUrls: ['./display-delivery-status.component.css']
})
export class DisplayDeliveryStatusComponent implements OnInit {
  @Input('status') status: string;
  icon: string
  constructor() { }

  ngOnInit() { this.doChange(this.status) }

  private doChange(status) {
    if (status === 3) {
      this.icon = "done_all"
    } if (status === 2) {
      this.icon = "done"
    } if (status === 1) {
      this.icon = "schedule"
    }
  }

}
