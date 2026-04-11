import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-area-form',
  imports: [ReactiveFormsModule, MatDialogModule],
  templateUrl: './update-area-form.html',
  styleUrl: './update-area-form.css',
})
export class UpdateAreaForm {
  private dialogRef = inject(MatDialogRef<UpdateAreaForm>);
  data = inject(MAT_DIALOG_DATA);

  private fb = inject(FormBuilder);
  updateForm = this.fb.group({
    name: [this.data.area.name, Validators.required],
    location: [this.data.area.location, Validators.required],
    size: [this.data.area.size, Validators.min(0)],
  });

  onSubmit() {
    if (!this.updateForm.valid)
      return alert("Preencha os campos corretamente!");

    this.dialogRef.close({
      ...this.data.area,
      ...this.updateForm.value
    });
  }
}
