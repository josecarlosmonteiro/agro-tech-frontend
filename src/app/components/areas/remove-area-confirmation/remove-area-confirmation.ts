import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { AreaService } from '../../../services/area/area.service';

@Component({
  selector: 'app-remove-area-confirmation',
  imports: [MatDialogClose],
  templateUrl: './remove-area-confirmation.html',
  styleUrl: './remove-area-confirmation.css',
})
export class RemoveAreaConfirmation {
  areaService = inject(AreaService);
  data = inject(MAT_DIALOG_DATA);

  confirmRemoveArea(areaId: string) {
    // this.areaService.remove(areaId);
  }
}
