import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class DatabaseApiService {

  constructor(private http: Http) { }

  saveSchulungseintrag(schulungData: SchulungsDaten): Observable<any> {
    //welcher user ist eingeloggt
    const userId = 1;
    return this.http.post('http://localhost:8050/api/saveSchulung/' + userId, JSON.stringify(schulungData)).map(res => {
      return res.json();
    });
  }

  updateSchulungseintrag(schulungDataUpdate: SchulungsDaten): Observable<any> {
    //welcher user ist eingeloggt
    const userId = 1;
    return this.http.put('http://localhost:8050/api/updateSchulung/' + userId, JSON.stringify(schulungDataUpdate)).map(res => {
      return res.json();
    });
  }

  deleteSchulungseintrag(): Observable<any> {
    //welcher user ist eingeloggt
    const userId = 1;
    return this.http.delete('http://localhost:8050/api/deleteSchulung/' + userId);
  }

  getSchulungseintraege(): Observable<SchulungsDaten[]> {
    //welcher user ist eingeloggt
    // const userId = 1;
    // return this.http.get('http://localhost:8050/api/getSchulungen/' + userId).map(res => {
    //   return res.json();
    // });
    return new Observable<SchulungsDaten[]>(obs => {
      setTimeout(() => {
        obs.next([{ name: 'Hello Flo', ort: 'St. Katharinen', kosten: 25, datum: '2018-04-19' }]);
        obs.complete();
      }, 1000);
    });
  }
}

export interface SchulungsDaten {
  name: string;
  ort: string;
  kosten: number;
  datum: string;
}
