import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
// import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

// Components
import { DashboardComponent } from './dashboard.component';

// Routing
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [ ]
})
export class DashboardModule { }
