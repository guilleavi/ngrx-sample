import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';
import * as ContactSelectors from '../../core/states/contact/contact.selector';

import { AppStore } from '../../core/models/app-store.model';
import { Store } from '@ngrx/store';
import * as ContactActions from '../../core/states/contact/contact.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {

  public contact: Contact = {} as Contact;
  public contacts$: Observable<Contact[]> = this.store$.select(
    ContactSelectors.selectAll
  );

  constructor(private store$: Store<AppStore>) {
    this.store$.dispatch(new ContactActions.Load());
  }

  ngOnInit() {
  }

  public onSelect(contact: Contact) {
    this.contact = contact;
  }

  public onAdd(contact: Contact) {
    this.store$.dispatch(new ContactActions.Add(contact));
  }

  public onUpdate(contact: Contact) {
    this.store$.dispatch(new ContactActions.Update(contact));
  }

  public onDelete(contact: Contact) {
    this.store$.dispatch(new ContactActions.Delete(contact.id));
  }
}
