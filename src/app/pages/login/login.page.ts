import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Storage } from '@ionic/storage-angular';
import { LoginRequest } from '../../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username!: string;
  password!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async login() {
    const loginRequest: LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.loginService.doLogin(loginRequest).subscribe(
      async (response) => {
        await this.storage.set('user', response.user);
        this.router.navigate(['/grupos']);
      },
      (error) => {
        console.error('Login error', error);
        // Mostrar mensaje de error
      }
    );
  }
}


