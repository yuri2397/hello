import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // ALL
  userData: any;

  // SIGN-UP
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  alertMessage: string = '';
  isSignUpLoad: boolean = false;
  isSignInLoad: boolean = false;
  errorNetWork: boolean = false;

  // LOGIN
  loginEmail: string;
  loginPassword: string;
  alertLoginMessage: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    public ngZone: NgZone
  ) {}

  ngOnInit(): void {}

  // SIGN UP

  onSubmit() {
    this.isSignUpLoad = true;
    this.alertMessage = '';

    this.auth
      .signUp(this.email, this.password)
      .then((response) => {
        console.log('RESPONSE :::: ', response.user);
        this.auth.setUserData(
          response.user.uid,
          this.name,
          response.user.email
        );
        this.userData = response.user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate(['welcome/profile']);
        this.errorNetWork = false;
        this.isSignUpLoad = false;
      })
      .catch((error) => {
        console.log('ERROR ::::: ', error);
        if (error.code == 'auth/email-already-in-use') {
          this.alertMessage = "L'adresse est déjà utilisé par un autre compte.";
        } else {
          this.errorNetWork = true;
        }
        this.isSignUpLoad = false;
      });
  }

  // LOGIN

  onLogin() {
    this.isSignInLoad = true;
    this.auth
      .signIn(this.loginEmail, this.loginPassword)
      .then((response) => {
        console.log('LOGIN ::::::::', response.user);
        this.isSignInLoad = false;
        this.userData = response.user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate(['profile']);
      })
      .catch((error) => {
        this.isSignInLoad = false;
        if (error.code === 'auth/user-not-found') {
          this.alertLoginMessage = 'Email ou mot de passe incorrect.';
        }
        console.log('ERROR LOGIN : ', error);
      });
  }
}
