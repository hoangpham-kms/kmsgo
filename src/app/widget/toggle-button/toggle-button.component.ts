import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  @Output()
  changed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.changed.emit(true);
  }

  onChange($event) {
    console.log(`value=${$event.target.checked}`);
    this.changed.emit($event.target.checked);
  }

}
