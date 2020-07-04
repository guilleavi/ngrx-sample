import { createEntityAdapter } from '@ngrx/entity';
import { EntityState } from '@ngrx/entity';

import { Contact } from '../../models/contact.model';

export const contactAdapter = createEntityAdapter<Contact>();

export interface ContactState extends EntityState<Contact> {}
