import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: string = "red";
  @Input() text: string = "bla";
  @Output() btnClick = new EventEmitter();
  

  onClick() {
    console.log("click ButtonComponent");
    this.btnClick.emit();
  }

}
