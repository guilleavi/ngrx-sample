import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { ContactsRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { contactReducer, ContactEffects } from '../core/states/contact';

@NgModule({
  declarations: [
    ContactFormComponent,
    ContactManagerComponent,
    ContactListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactsRoutingModule,
    StoreModule.forFeature('contacts', contactReducer),
    EffectsModule.forFeature([ContactEffects])
  ]
})
export class ContactsModule { }
