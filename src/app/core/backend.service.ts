import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, mergeMap, retryWhen, take } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}
  private readonly NOMICS_KEY: string = '78f51ac49b5a2f483772daebcf27519e8b59988d';
  private readonly TOO_MANY_REQUESTS: number = 429;
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
    return this.httpClient.get<T>(apiSource + apiName, { params: params as unknown as HttpParams }).pipe(
      retryWhen((observable) => {
        return observable.pipe(
          mergeMap((error: HttpErrorResponse) => {
            if (error.status === this.TOO_MANY_REQUESTS) {
              return of(error).pipe(delay(1000));
            }
            console.error(error);
            // alert(`error with api: ${apiSource + apiName}`);
            throw new Error(`api ${apiSource + apiName} error: ${JSON.stringify(error.error)}`);
          }),
          take(2)
        );
      })
    );
  }

  binanceWebSokcet<T>(socketName: string): Observable<T> {
    return webSocket<T>(API_SOURCE.BINANCE_SOCKET + socketName).pipe(
      catchError((error) => {
        console.error(error);
        alert(`websocket error: ${API_SOURCE.BINANCE_SOCKET + socketName}`);
        throw new Error(`websocket error: ${API_SOURCE.BINANCE_SOCKET + socketName}`);
      })
    );
  }
}

export enum API_SOURCE {
  BINANCE = 'https://oldriverno1-proxy.herokuapp.com/https://api.binance.com/api/v3/',
  NOMICS = 'https://api.nomics.com/v1/',
  BINANCE_SOCKET = 'wss://stream.binance.com:9443',
}
