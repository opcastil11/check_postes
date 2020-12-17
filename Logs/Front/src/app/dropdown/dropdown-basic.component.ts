import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.component.html'
})
export class NgbdDropdownBasic {
	cameras: any;
 	constructor() {}

  async ngOnInit() {
  	this.cameras = [1,2];
  }
}