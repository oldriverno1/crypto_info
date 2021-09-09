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

  /**
   *
   * @param webServiceApiName WebService的API名稱
   * @param params 須送給WebService的內容，格式:Json
   *
   */
  post<T>(apiSource: API_SOURCE, apiName: string, params: Record<string, unknown>): Observable<T> {
    return this.httpClient.post<T>(apiSource + apiName, params).pipe(
      catchError((err) => {
        alert(`發生網路問題[${apiSource + apiName}] Error Code: ${err.status}`);
        throw new Error(`發生網路問題 Error Code: ${err.status}`);
      })
    );
  }

  /**
   *
   * @param webServiceApiName WebService的API名稱
   * @param params 送給WebService的內容(可有可無)，格式:Json
   *
   * 範例:
   * ```
   *   BackendService.get<ReferenceData>('GetReferenceData').subscribe( response => {
   *     console.log(response);
   *   });
   * ```
   */
  get<T>(apiSource: API_SOURCE, apiName: string, params?: Record<string, unknown>): Observable<T> {
    params = {
      ...params,
      ...(apiSource === API_SOURCE.NOMICS && { key: this.NOMICS_KEY }),
    };
    return this.httpClient
      .get<T>(apiSource + apiName, { params: params as unknown as HttpParams })
      .pipe(
        catchError((err) => {
          alert(`發生網路問題[${apiSource + apiName}] Error Code: ${err.status}`);
          throw new Error(`發生網路問題 Error Code: ${err.status}`);
        })
      );
  }
}

export enum API_SOURCE {
  BINANCE = 'https://api.binance.com/',
  NOMICS = 'https://api.nomics.com/v1/',
}
