import { inject, Injectable, signal } from '@angular/core';
import { SensorModel } from '../../models/sensor.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { listUtil } from '../../utils/lists';
import { baseUrl } from '../../constants/url';
import { HttpResponseModel } from '../../models/http/http-response.model';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  private http = inject(HttpClient);
  private url = `${baseUrl}/sensors`;

  #sensorsSignal = signal<SensorModel[]>([]);
  public sensors = this.#sensorsSignal.asReadonly();

  findAll(): Observable<HttpResponseModel<SensorModel[]>> {
    return this.http
      .get<HttpResponseModel<SensorModel[]>>(this.url)
      .pipe(tap(result => this.#sensorsSignal.set(result.content)));
  }

  onCreateSensor(newSensor: SensorModel) {
    this.#sensorsSignal.update(previous => listUtil.add(previous, newSensor));
  }

  create(newSensor: Partial<SensorModel>): Observable<HttpResponseModel<SensorModel>> {
    return this.http.post<HttpResponseModel<SensorModel>>(this.url, newSensor).pipe(
      tap(result => {
        this.onCreateSensor(result.content);
      }),
    );
  }

  onUpdateSensor(newSensor: SensorModel) {
    this.#sensorsSignal.update(previous => listUtil.update(previous, newSensor, 'id'));
  }

  update(newData: Partial<SensorModel>): Observable<HttpResponseModel<SensorModel>> {
    return this.http.patch<HttpResponseModel<SensorModel>>(`${this.url}/${newData.id}`, newData).pipe(
      tap(result => {
        this.onUpdateSensor(result.content);
      }),
    );
  }

  onDeleteSensor(sensorId: string) {
    this.#sensorsSignal.update(previous => listUtil.remove(previous, 'id', sensorId));
  }

  delete(sensorId: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${sensorId}`).pipe(
      tap(() => {
        this.onDeleteSensor(sensorId);
      }),
    );
  }
}
