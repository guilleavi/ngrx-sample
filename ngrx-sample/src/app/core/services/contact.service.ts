import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ContactsMock } from '../mocks/contact.mock';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of(ContactsMock);
  }

  addContact(contact: Contact): Observable<Contact> {
    return of(contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return of(contact);
  }

  deleteContact(contactId: number): Observable<number> {
    return of(contactId);
  }
}
