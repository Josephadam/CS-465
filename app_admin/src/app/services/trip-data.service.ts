import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  // We use baseUrl now because we hit more than /trips
  baseUrl = 'http://localhost:3000/api';

  // Inject HttpClient AND browser storage
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  // ----------------------------
  // Trips endpoints
  // ----------------------------

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl + '/trips');
  }

  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.baseUrl + '/trips', formData);
  }

  getTrip(tripCode: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl + '/trips/' + tripCode);
  }

  updateTrip(formData: Trip): Observable<Trip[]> {
    return this.http.put<Trip[]>(
      this.baseUrl + '/trips/' + formData.code,
      formData
    );
  }

  // ----------------------------
  // Auth endpoints
  // ----------------------------

  // Call to our /login endpoint, returns JWT
  login(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Call to our /register endpoint, creates user and returns JWT
  register(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  // helper method to process both login and register methods
  handleAuthAPICall(
    endpoint: string,
    user: User,
    passwd: string
  ): Observable<AuthResponse> {

    const formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };

    return this.http.post<AuthResponse>(
      this.baseUrl + '/' + endpoint,
      formData
    );
  }
}
