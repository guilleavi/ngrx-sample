import { Action } from '@ngrx/store';

import { Contact } from '../../models/contact.model';

export enum ContactActionTypes {
  ADD = '[Contact] Add',
  ADD_SUCCESS = '[Contact] Add success',
  ADD_FAILED = '[Contact] Add failed',
  LOAD_CONTACTS = '[Contact] Load contact',
  LOAD_CONTACTS_SUCCESS = '[Contact] Load contact success',
  LOAD_CONTACTS_FAILED = '[Contact] Load contact failed',
  UPDATE = '[Contact] Update',
  UPDATE_SUCCESS = '[Contact] Update success',
  UPDATE_FAILED = '[Contact] Update failed',
  DELETE = '[Contact] Delete',
  DELETE_SUCCESS = '[Contact] Delete success',
  DELETE_FAILED = '[Contact] Delete failed'
}

export class Add implements Action {
  readonly type = ContactActionTypes.ADD;

  constructor(public contact: Contact) { }
}

export class AddSuccess implements Action {
  readonly type = ContactActionTypes.ADD_SUCCESS;

  constructor(public contact: Contact) { }
}

export class AddFailed implements Action {
  readonly type = ContactActionTypes.ADD_FAILED;

  constructor(public errorMessage: string) { }
}

export class Load implements Action {
  readonly type = ContactActionTypes.LOAD_CONTACTS;

  constructor() { }
}

export class LoadSuccess implements Action {
  readonly type = ContactActionTypes.LOAD_CONTACTS_SUCCESS;

  constructor(public contacts: Contact[]) { }
}

export class LoadFailed implements Action {
  readonly type = ContactActionTypes.LOAD_CONTACTS_FAILED;

  constructor(public errorMessage: string) { }
}

export class Update implements Action {
  readonly type = ContactActionTypes.UPDATE;

  constructor(public contact: Contact) { }
}

export class UpdateSuccess implements Action {
  readonly type = ContactActionTypes.UPDATE_SUCCESS;

  constructor(public contact: Contact) { }
}

export class UpdateFailed implements Action {
  readonly type = ContactActionTypes.UPDATE_FAILED;

  constructor(public errorMessage: string) { }
}

export class Delete implements Action {
  readonly type = ContactActionTypes.DELETE;

  constructor(public contactId: number) { }
}

export class DeleteSuccess implements Action {
  readonly type = ContactActionTypes.DELETE_SUCCESS;

  constructor(public contactId: number) { }
}

export class DeleteFailed implements Action {
  readonly type = ContactActionTypes.DELETE_FAILED;

  constructor(public errorMessage: string) { }
}

export type ContactActions =
  Add | AddSuccess | AddFailed
  | Load | LoadSuccess | LoadFailed
  | Update | UpdateSuccess | UpdateFailed
  | Delete | DeleteSuccess | DeleteFailed;
