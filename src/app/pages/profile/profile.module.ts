import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import  { NzAvatarModule } from 'ng-zorro-antd/avatar';
import {MatCardModule} from '@angular/material/card';
import { NzListModule } from 'ng-zorro-antd/list';
@NgModule({
  imports: [
    ProfileRoutingModule,
    FormsModule,
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    MatCardModule,
    NzListModule
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
})
export class ProfileModule {}
