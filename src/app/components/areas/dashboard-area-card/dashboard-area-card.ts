import { Component, input } from '@angular/core';
import { AreaModel } from '../../../models/area.model';

@Component({
  selector: 'app-dashboard-area-card',
  imports: [],
  templateUrl: './dashboard-area-card.html',
  styleUrl: './dashboard-area-card.css',
})
export class DashboardAreaCard {
  area = input.required<AreaModel>();
}
