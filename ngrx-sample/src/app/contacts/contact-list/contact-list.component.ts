import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[] = [];
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() view: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public deleteContact(contact: Contact) {
    this.delete.emit(contact);
  }

  public viewContact(contact: Contact) {
    this.view.emit(contact);
  }

  trackByFn(_: any, item: Contact) {
    return item.id;
  }

}
