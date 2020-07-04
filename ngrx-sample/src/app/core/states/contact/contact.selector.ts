import { createFeatureSelector, createSelector } from '@ngrx/store';

import { contactAdapter, ContactState } from './contact.adapter';

export const selectContactState = createFeatureSelector<ContactState>(
  'contact'
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = contactAdapter.getSelectors(selectContactState);
