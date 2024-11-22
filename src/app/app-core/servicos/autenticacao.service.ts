import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
private isLoggedInSubject = new BehaviorSubject<boolean>(this.getLoginStatus());
isLoggedIn$ = this.isLoggedInSubject.asObservable();
  constructor() { }

  private getLoginStatus(): boolean {
    return localStorage.getItem('isLoggedIn')=== 'true';
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedInSubject.next(true);
  }
  logout(){
      localStorage.removeItem('isLoggedIn');
      this.isLoggedInSubject.next(false);
    }
  }


