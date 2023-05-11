import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-internal-contact-list-edit-dialog',
  templateUrl: './internal-contact-list-edit-dialog.component.html',
  styleUrls: ['./internal-contact-list-edit-dialog.component.scss']
})
export class InternalContactListEditDialogComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
