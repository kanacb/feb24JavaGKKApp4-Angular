import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from "primeng/password";

@Component({
  selector: 'app-signuppage',
  standalone: true,
  imports: [CommonModule, CheckboxModule, PasswordModule, InputTextModule, ButtonModule],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.scss'
})
export class SignuppageComponent {
  password = ""
}
