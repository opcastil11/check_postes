import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { LogsViewComponent } from './logs-view/logs-view.component';
import { NgbdDropdownBasic } from './dropdown/dropdown-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, LogsViewComponent, NgbdDropdownBasic],
  imports: [BrowserModule, NgbModule, NgxPaginationModule,Ng2SearchPipeModule,FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
