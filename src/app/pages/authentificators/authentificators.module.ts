import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthentificatorsPageRoutingModule } from './authentificators-routing.module';

import { AuthentificatorsPage } from './authentificators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthentificatorsPageRoutingModule
  ],
  declarations: [AuthentificatorsPage]
})
export class AuthentificatorsPageModule {}
