import { inject, Injectable, signal } from '@angular/core';
import { AreaModel } from '../../models/area.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { baseUrl } from '../../constants/url';
import { HttpResponseModel } from '../../models/http/http-response.model';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  private readonly url: string = `${baseUrl}/areas`;
  private readonly http = inject(HttpClient);

  #areasSignal = signal<AreaModel[]>([]);
  public readonly areas = this.#areasSignal.asReadonly();

  constructor() {}

  private onCreateArea(newArea: AreaModel) {
    this.#areasSignal.update(current => [...current, newArea]);
  }

  private onUpdateArea(area: AreaModel) {
    this.#areasSignal.update(current => current.map(el => (el.id === area.id ? area : el)));
  }

  private onDeleteArea(areaId: string) {
    this.#areasSignal.update(current => current.filter(el => el.id !== areaId));
  }

  findAll(): Observable<HttpResponseModel<AreaModel[]>> {
    return this.http.get<HttpResponseModel<AreaModel[]>>(this.url).pipe(
      tap(data => {
        this.#areasSignal.set(data.content);
      }),
    );
  }

  create(data: Partial<AreaModel>): Observable<AreaModel> {
    return this.http.post<AreaModel>(this.url, data).pipe(
      tap(result => {
        this.onCreateArea(result);
      }),
    );
  }

  update(data: AreaModel): Observable<AreaModel> {
    return this.http.patch<AreaModel>(`${this.url}/${data.id}`, data).pipe(
      tap(result => {
        this.onUpdateArea(result);
      }),
    );
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      tap(() => {
        this.onDeleteArea(id);
      }),
    );
  }
}
