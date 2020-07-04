import { ContactActions, ContactActionTypes } from './contact.actions';
import { contactAdapter, ContactState } from './contact.adapter';

export function contactInitialState(): ContactState {
  return contactAdapter.getInitialState();
}

export function contactReducer(
  state: ContactState = contactInitialState(),
  action: ContactActions
): ContactState {

  switch (action.type) {
    case ContactActionTypes.LOAD_CONTACTS_SUCCESS:
      return contactAdapter.addAll(action.contacts, state);
    case ContactActionTypes.ADD_SUCCESS:
      return contactAdapter.addOne(action.contact, state);
    case ContactActionTypes.UPDATE_SUCCESS:
      const { id } = action.contact;
      return contactAdapter.updateOne(
        {
          id,
          changes: action.contact
        },
        state
      );
    case ContactActionTypes.DELETE_SUCCESS:
      return contactAdapter.removeOne(action.contactId, state);
    default:
      return state;
  }
}

