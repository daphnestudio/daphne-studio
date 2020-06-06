import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const API_PATH = ''; //TODO : mettere in file di conf

@Injectable({providedIn: 'root'})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  public  get(url): Observable<any> {
    let subject = new Subject<any>();
    this.httpClient.get(url, {headers:{'Cache-Control': 'no-cache'}}).subscribe(
      data => {subject.next(data)},
      err => this.handleError,)
    return subject;
  }

  public post(url, data, header) {
    let subject = new Subject<any>();
    this.httpClient.post( url, data, header).subscribe(
      data => {subject.next(data)},
      err => this.handleError,)
    return subject;
  }

  public put(url, data) {
    let subject = new Subject<any>();
    this.httpClient.put( url, data).subscribe(
      data => {subject.next(data)},
      err => this.handleError,)
    return subject;
  }

  public handleError(error: any) {
    console.error('An error occurred', error);
    //  return Promise.reject(error.message || error);
  }
}
