import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ica-message-delivery-status',
  template: `<mat-icon class="tick-icon">{{ icon }}</mat-icon>`,
  styles: ['.tick-icon { color: #aaa; font-size: 18px !important; }']
})
export class MessageDeliveryStatusComponent implements OnInit {
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
