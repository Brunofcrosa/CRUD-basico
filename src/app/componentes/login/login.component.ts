import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {AutenticacaoService} from "../../app-core/servicos/autenticacao.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private autenticacaoService: AutenticacaoService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/painel-do-jogador']);
    }
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;

    if (this.loginForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Campos inválidos',
        text: 'Por favor, preencha todos os campos.',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (username === '123' && password === '123') {

      Swal.fire({
        icon: 'success',
        title: 'Login bem-sucedido',
        text: 'Bem-vindo!',
        confirmButtonText: 'Continuar',
      }).then(() => {
        this.autenticacaoService.login();  // Use o login do AuthService
        this.router.navigate(['/painel-do-jogador']);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erro no login',
        text: 'Usuário ou senha incorretos',
        confirmButtonText: 'Tentar novamente',
      });
    }
  }
}
