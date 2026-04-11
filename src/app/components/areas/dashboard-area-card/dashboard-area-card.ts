import { Component, input } from '@angular/core';
import { AreaModel } from '../../../models/area.model';
import { MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dashboard-area-card',
  imports: [MatCardModule],
  templateUrl: './dashboard-area-card.html',
  styleUrl: './dashboard-area-card.css',
})
export class DashboardAreaCard {
  area = input.required<AreaModel>();
}
