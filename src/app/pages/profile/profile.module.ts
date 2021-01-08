import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ProfileComponent } from './profile.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProfileRoutingModule } from './profile-routing.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
@NgModule({
  imports: [
    ProfileRoutingModule,
    NzLayoutModule,
    NzGridModule,
    NzInputModule,
    NzCardModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    NzButtonModule,
    MatProgressBarModule,
    NzBreadCrumbModule,

  ],
  declarations: [
    ProfileComponent,
  ],
  exports: [ProfileComponent],
})
export class ProfileModule { }
