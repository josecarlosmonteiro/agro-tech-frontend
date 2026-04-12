import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-area-form',
  imports: [ReactiveFormsModule, MatDialogClose],
  templateUrl: './new-area-form.html',
  styleUrl: './new-area-form.css',
})

export class NewAreaForm {
  private dialogRef = inject(MatDialogRef<NewAreaForm>);
  private fb = inject(FormBuilder);
  dialog = inject(MAT_DIALOG_DATA);

  areaForm = this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
    size: [0, Validators.min(1)],
  });

  onSubmit() {
    if (!this.areaForm.valid)
      return alert("Preencha os campos corretamente!");

    this.dialogRef.close(this.areaForm.value);
  }
}
