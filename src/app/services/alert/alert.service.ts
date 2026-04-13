import { inject, Injectable, signal } from '@angular/core';
import { AlertModel } from '../../models/alert.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { listUtil } from '../../utils/lists';
import { baseUrl } from '../../constants/url';
import { HttpResponseModel } from '../../models/http/http-response.model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private url = `${baseUrl}/alerts`;
  private http = inject(HttpClient);

  #alerts = signal<AlertModel[]>([]);
  alertsList = this.#alerts.asReadonly();

  findAll(): Observable<HttpResponseModel<AlertModel[]>> {
    return this.http.get<HttpResponseModel<AlertModel[]>>(this.url).pipe(
      tap(result => {
        this.#alerts.set(result.content);
      }),
    );
  }

  update(newData: AlertModel): Observable<HttpResponseModel<AlertModel>> {
    return this.http
      .patch<HttpResponseModel<AlertModel>>(`${this.url}/${newData.id}`, newData)
      .pipe(
        tap(result => {
          this.#alerts.update(state => listUtil.update(state, result.content, 'id'));
        }),
      );
  }
}
