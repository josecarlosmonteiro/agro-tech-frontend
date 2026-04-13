import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { AuthLoginBody } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private notificationService = inject(NotificationsService);

  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  submitLogin() {
    if (!this.loginForm.valid)
      return this.notificationService.error({ title: 'Preencha os dados corretamente' });

    this.authService.login(this.loginForm.value as AuthLoginBody).subscribe();
  }
}
