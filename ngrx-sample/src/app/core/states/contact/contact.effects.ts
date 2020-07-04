import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import * as ContactActions from './contact.actions';
import { Injectable } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Injectable()
export class ContactEffects {
  constructor(
    private actions$: Actions,
    private contactService: ContactService
  ) { }

  CONTACT_ACTIONS_SUCCESS = [
    ContactActions.ContactActionTypes.ADD_SUCCESS,
    ContactActions.ContactActionTypes.UPDATE_SUCCESS,
    ContactActions.ContactActionTypes.DELETE_SUCCESS,
    ContactActions.ContactActionTypes.LOAD_CONTACTS_SUCCESS
  ];

  CONTACT_ACTIONS_FAILED = [
    ContactActions.ContactActionTypes.ADD_FAILED,
    ContactActions.ContactActionTypes.UPDATE_FAILED,
    ContactActions.ContactActionTypes.DELETE_FAILED,
    ContactActions.ContactActionTypes.LOAD_CONTACTS_FAILED
  ];

  @Effect()
  loadAllContacts$: Observable<any> = this.actions$.pipe(
    ofType(ContactActions.ContactActionTypes.LOAD_CONTACTS),
    switchMap(() =>
      this.contactService.getContacts().pipe(
        map(contacts => new ContactActions.LoadSuccess(contacts)),
        catchError(error => of(new ContactActions.LoadFailed(error)))
      )
    )
  );

  @Effect()
  addContact$: Observable<any> = this.actions$.pipe(
    ofType(ContactActions.ContactActionTypes.ADD),
    switchMap((action: any) =>
      this.contactService.addContact(action.contact).pipe(
        map((contact: Contact) => {
          console.log('add effect');
          return new ContactActions.AddSuccess(contact);
        }),
        catchError(error => of(new ContactActions.AddFailed(error)))
      )
    )
  );

  @Effect()
  updateContact$: Observable<any> = this.actions$.pipe(
    ofType(ContactActions.ContactActionTypes.UPDATE),
    switchMap((action: any) =>
      this.contactService.updateContact(action.contact).pipe(
        map((contact: Contact) => new ContactActions.UpdateSuccess(contact)),
        catchError(error => of(new ContactActions.UpdateFailed(error)))
      )
    )
  );

  @Effect()
  deleteContact$: Observable<any> = this.actions$.pipe(
    ofType(ContactActions.ContactActionTypes.DELETE),
    switchMap(({ id }) =>
      this.contactService.deleteContact(id).pipe(
        map(() => new ContactActions.DeleteSuccess(id)),
        catchError(error => of(new ContactActions.DeleteFailed(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  successNotification$ = this.actions$.pipe(
    ofType(...this.CONTACT_ACTIONS_SUCCESS),
    tap(() =>
      console.log('Operation success')
    )
  );

  @Effect({ dispatch: false })
  failedNotification$ = this.actions$.pipe(
    ofType(...this.CONTACT_ACTIONS_FAILED),
    tap(() =>
      console.log('Operation failed')
    )
  );

}


