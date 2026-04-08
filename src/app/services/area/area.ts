import { Injectable } from '@angular/core';
import { AreaModel } from '../../models/area.model';
import { AREAS_MOCK } from './AREAS_MOCK';

@Injectable({
  providedIn: 'root',
})

export class Area {
  private areas: AreaModel[] = AREAS_MOCK;

  constructor() {
    this.areas = this.getAll();
  }

  getAll() {
    return AREAS_MOCK;
  }
}
