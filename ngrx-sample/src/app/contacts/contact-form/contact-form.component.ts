import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit, OnChanges {

  @Input() contact: Contact = {} as Contact;
  @Output() add: EventEmitter<Contact> = new EventEmitter<Contact>();
  @Output() update: EventEmitter<Contact> = new EventEmitter<Contact>();

  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm(this.contact);
  }

  ngOnChanges() {
    this.initForm(this.contact);
  }

  private initForm(contact: Partial<Contact> = {}): void {
    this.contactForm = this.formBuilder.group({
      firstName: [contact.firstName, Validators.required],
      lastName: [contact.lastName, Validators.required],
    });
  }

  public addContact(): void {
    const contact: Contact = { ...this.contactForm.value };
    this.add.emit(contact);
    this.initForm();
  }

  public updateContact() {
    const contact = {
      ...this.contact,
      ...this.contactForm.value
    };
    this.update.emit(contact);
    this.initForm();
  }

}
