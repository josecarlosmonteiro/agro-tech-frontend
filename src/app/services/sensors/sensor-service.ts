import { inject, Injectable, signal } from '@angular/core';
import { SensorModel } from '../../models/sensor.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { listUtil } from '../../utils/lists';
import { baseUrl } from '../../constants/url';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  private http = inject(HttpClient);
  private url = `${baseUrl}/sensors`;

  #sensorsSignal = signal<SensorModel[]>([]);
  public sensors = this.#sensorsSignal.asReadonly();

  findAll(): Observable<SensorModel[]> {
    return this.http
      .get<SensorModel[]>(this.url)
      .pipe(tap(result => this.#sensorsSignal.set(result)));
  }

  onCreateSensor(newSensor: SensorModel) {
    this.#sensorsSignal.update(previous => listUtil.add(previous, newSensor));
  }

  create(newSensor: Partial<SensorModel>): Observable<SensorModel> {
    return this.http.post<SensorModel>(this.url, newSensor).pipe(
      tap(result => {
        this.onCreateSensor(result);
      }),
    );
  }

  onUpdateSensor(newSensor: SensorModel) {
    this.#sensorsSignal.update(previous => listUtil.update(previous, newSensor, 'id'));
  }

  update(newData: Partial<SensorModel>): Observable<SensorModel> {
    return this.http.patch<SensorModel>(`${this.url}/${newData.id}`, newData).pipe(
      tap(result => {
        this.onUpdateSensor(result);
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
