import { Component, inject, OnInit } from '@angular/core';
import { AreaModel } from '../../models/area.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AreaService } from '../../services/area/area.service';
import { NewAreaForm } from '../../components/areas/new-area-form/new-area-form';
import { UpdateAreaForm } from '../../components/areas/update-area-form/update-area-form';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-areas',
  imports: [MatButtonModule, MatCardModule, DialogModule],
  templateUrl: './areas.html',
  styleUrl: './areas.css',
})
export class Areas implements OnInit {
  private readonly dialog = inject(MatDialog);
  private areasService = inject(AreaService);
  private notificationService = inject(NotificationsService);

  ngOnInit(): void {
    this.getAreas();
  }

  areas = this.areasService.areas;

  getAreas() {
    this.areasService.findAll().subscribe();
  }

  deleteArea(id: string) {
    this.areasService.delete(id).subscribe({
      next: () => this.notificationService.success({ title: 'Área removida com sucesso!' }),
      error: err =>
        this.notificationService.error({
          title: 'Erro ao remover área',
          description: err.message,
        }),
    });
  }

  openNewAreaFormDialog() {
    this.dialog
      .open(NewAreaForm)
      .afterClosed()
      .subscribe((data: Partial<AreaModel>) => {
        if (data) {
          this.areasService.create(data).subscribe({
            next: () => this.notificationService.success({ title: 'Área cadastrada com sucesso!' }),
            error: err =>
              this.notificationService.error({
                title: 'Erro ao atualizar área',
                description: err.message,
              }),
          });
        }
      });
  }

  openUpdateAreaDialog(area: AreaModel) {
    this.dialog
      .open(UpdateAreaForm, {
        data: { area },
      })
      .afterClosed()
      .subscribe(updatedData => {
        if (updatedData) {
          this.areasService.update(updatedData).subscribe({
            next: () => this.notificationService.success({ title: 'Área atualizada com sucesso!' }),
            error: err =>
              this.notificationService.error({
                title: 'Erro ao atualizar área',
                description: err.message,
              }),
          });
        }
      });
  }

  openRemoveConfirmationAreaDialog(area: AreaModel) {
    this.notificationService
      .confirmation({
        title: `Tem certeza?`,
        description: `Você está prestes a remover a área "${area.name}", (${area.size}m²). Deseja prosseguir?`,
        isDanger: true,
      })
      .subscribe(result => {
        if (result) this.deleteArea(area.id);
      });
  }
}
