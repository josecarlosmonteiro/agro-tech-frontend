import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  private notificationService = inject(NotificationsService);
  private fb = inject(FormBuilder);

  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  submitRegistraion() {
    if (!this.registrationForm.valid)
      return this.notificationService.error({ title: 'Preencha o formulário corretamente' });

    const data = this.registrationForm.value;

    if (data.password !== data.confirmPassword)
      return this.notificationService.error({ title: 'As senhas precisam ser iguais' });

    alert('Submit passou!');
  }
}
