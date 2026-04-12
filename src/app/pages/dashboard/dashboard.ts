import { Component } from '@angular/core';
import { AreaModel } from '../../models/area.model';
import { DashboardAreaCard } from '../../components/areas/dashboard-area-card/dashboard-area-card';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardAreaCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  areas: AreaModel[] = [];
}
