import { inject, Injectable, signal } from '@angular/core';
import { AlertModel } from '../../models/alert.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { listUtil } from '../../utils/lists';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private url = 'http://localhost:8080/alerts';
  private http = inject(HttpClient);

  #alerts = signal<AlertModel[]>([]);
  alertsList = this.#alerts.asReadonly();

  findAll(): Observable<AlertModel[]> {
    return this.http.get<AlertModel[]>(this.url).pipe(
      tap(result => {
        this.#alerts.set(result);
      }),
    );
  }

  update(newData: AlertModel): Observable<AlertModel> {
    return this.http.patch<AlertModel>(`${this.url}/${newData.id}`, newData).pipe(
      tap(result => {
        this.#alerts.update(state => listUtil.update(state, result, 'id'));
      }),
    );
  }
}
