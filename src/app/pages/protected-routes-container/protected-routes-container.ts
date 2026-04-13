import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidenav } from '../../components/shared/sidenav/sidenav';

@Component({
  selector: 'app-protected-routes-container',
  imports: [RouterOutlet, Sidenav],
  templateUrl: './protected-routes-container.html',
  styleUrl: './protected-routes-container.css',
})
export class ProtectedRoutesContainer {}
