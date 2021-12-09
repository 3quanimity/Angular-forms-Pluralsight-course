import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getSubscriptionTypes() {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }


  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    // return of(userSetting);
    return this.http.post('https://putsreq.com/d1aaChaMaDMHE0jDcFMZ', userSettings)
    
  }
 
}
