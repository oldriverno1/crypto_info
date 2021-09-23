import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}
  private readonly NOMICS_KEY: string = '78f51ac49b5a2f483772daebcf27519e8b59988d';

  post<T>(apiSource: API_SOURCE, apiName: string, params: Record<string, unknown>): Observable<T> {
    return this.httpClient.post<T>(apiSource + apiName, params).pipe(
      catchError((err) => {
        alert(`發生網路問題[${apiSource + apiName}] Error Code: ${err.status}`);
        throw new Error(`發生網路問題 Error Code: ${err.status}`);
      })
    );
  }


  get<T>(apiSource: API_SOURCE, apiName: string, params?: Record<string, unknown>): Observable<T> {
    params = {
      ...params,
      ...(apiSource === API_SOURCE.NOMICS && { key: this.NOMICS_KEY }),
    };
    return this.httpClient
      .get<T>(apiSource + apiName, { params: params as unknown as HttpParams })
      .pipe(
        catchError((err) => {
          alert(`發生網路問題[${apiSource + apiName}]`);
          throw new Error(`發生網路問題 Error Code: ${err.status}`);
        })
      );
  }
}

export enum API_SOURCE {
  BINANCE = 'https://oldriverno1-proxy.herokuapp.com/https://api.binance.com/api/v3/',
  NOMICS = 'https://api.nomics.com/v1/',
}
