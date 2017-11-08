import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-status',
  templateUrl: './display-status.component.html',
  styleUrls: ['./display-status.component.css']
})
export class DisplayStatusComponent implements OnInit {
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
