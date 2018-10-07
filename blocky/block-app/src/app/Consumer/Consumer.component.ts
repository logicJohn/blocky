/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConsumerService } from './Consumer.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-consumer',
  templateUrl: './Consumer.component.html',
  styleUrls: ['./Consumer.component.css'],
  providers: [ConsumerService]
})
export class ConsumerComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
  private errorMessage;

  consumerId = new FormControl('', Validators.required);
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  balance = new FormControl('', Validators.required);
  favFood = new FormControl('', Validators.required);
  favStore = new FormControl('', Validators.required);
  favShoe = new FormControl('', Validators.required);
  favWebsite = new FormControl('', Validators.required);


  constructor(public serviceConsumer: ConsumerService, fb: FormBuilder) {
    this.myForm = fb.group({
      consumerId: this.consumerId,
      firstName: this.firstName,
      lastName: this.lastName,
      balance: this.balance,
      favFood: this.favFood,
      favStore: this.favStore,
      favShoe: this.favShoe,
      favWebsite: this.favWebsite
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceConsumer.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'org.acme.pii.Consumer',
      'consumerId': this.consumerId.value,
      'firstName': this.firstName.value,
      'lastName': this.lastName.value,
      'balance': this.balance.value,
      'favFood': this.favFood.value,
      'favStore': this.favStore.value,
      'favShoe': this.favShoe.value,
      'favWebsite': this.favWebsite.value
    };

    this.myForm.setValue({
      'consumerId': null,
      'firstName': null,
      'lastName': null,
      'balance': null,
      'favFood': null,
      'favStore': null,
      'favShoe': null,
      'favWebsite': null
    });

    return this.serviceConsumer.addParticipant(this.participant)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'consumerId': null,
        'firstName': null,
        'lastName': null,
        'balance': null,
        'favFood': null,
        'favStore': null,
        'favShoe': null,
        'favWebsite': null
      });
      this.loadAll(); 
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'org.acme.pii.Consumer',
      'firstName': this.firstName.value,
      'lastName': this.lastName.value,
      'balance': this.balance.value,
      'favFood': this.favFood.value,
      'favStore': this.favStore.value,
      'favShoe': this.favShoe.value,
      'favWebsite': this.favWebsite.value
    };

    return this.serviceConsumer.updateParticipant(form.get('consumerId').value, this.participant)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteParticipant(): Promise<any> {

    return this.serviceConsumer.deleteParticipant(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceConsumer.getparticipant(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'consumerId': null,
        'firstName': null,
        'lastName': null,
        'balance': null,
        'favFood': null,
        'favStore': null,
        'favShoe': null,
        'favWebsite': null
      };

      if (result.consumerId) {
        formObject.consumerId = result.consumerId;
      } else {
        formObject.consumerId = null;
      }

      if (result.firstName) {
        formObject.firstName = result.firstName;
      } else {
        formObject.firstName = null;
      }

      if (result.lastName) {
        formObject.lastName = result.lastName;
      } else {
        formObject.lastName = null;
      }

      if (result.balance) {
        formObject.balance = result.balance;
      } else {
        formObject.balance = null;
      }

      if (result.favFood) {
        formObject.favFood = result.favFood;
      } else {
        formObject.favFood = null;
      }

      if (result.favStore) {
        formObject.favStore = result.favStore;
      } else {
        formObject.favStore = null;
      }

      if (result.favShoe) {
        formObject.favShoe = result.favShoe;
      } else {
        formObject.favShoe = null;
      }

      if (result.favWebsite) {
        formObject.favWebsite = result.favWebsite;
      } else {
        formObject.favWebsite = null;
      }

      this.myForm.setValue(formObject);
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });

  }

  resetForm(): void {
    this.myForm.setValue({
      'consumerId': null,
      'firstName': null,
      'lastName': null,
      'balance': null,
      'favFood': null,
      'favStore': null,
      'favShoe': null,
      'favWebsite': null
    });
  }
}
