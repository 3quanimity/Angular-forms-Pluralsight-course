import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.valid)
  }

  onBlur(field: NgModel) {
    console.log("in onBlur: ", field.valid)
  }

}
