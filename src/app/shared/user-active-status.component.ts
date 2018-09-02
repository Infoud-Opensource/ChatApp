import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ica-user-active-status',
  template: `
    <span [class]="statusClass">
      <mat-icon>{{ icon }}</mat-icon>
    </span>
  `,
  styles: ['.status-online { color: rgb(0, 255, 0) } .status-offline { color: rgb(201, 201, 201) }']
})
export class UserActiveStatusComponent implements OnInit {
  @Input('status') status : string;
  icon: string
  statusClass: string

  constructor() { }

  ngOnInit() { this.doChange(this.status) }

  private doChange(status) {
    if (status === "online") {
      this.icon = "radio_button_checked"
      this.statusClass = "status-online"
    } else {
      this.icon = "radio_button_checked"
      this.statusClass = "status-offline"
    }
  }
}
