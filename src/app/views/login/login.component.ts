import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStoreService } from 'src/app/_services/token-store.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string | null = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  accountForm = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required])],
    // account: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenStore: TokenStoreService,
    private router: Router,
    private _sankBar: MatSnackBar
  ) { }

  onSubmit(): void {
    const { username, password } = this.accountForm.value;


    if (username == 'admin' && password == 'admin') {
      this.router.navigateByUrl('admin');
      this._sankBar.open('登入成功', ``, {
        duration: 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
    }

      // this.authService.login(username, password).subscribe(
      //   data => {
      //     this.tokenStore.saveToken(data.token);
      //     this.tokenStore.saveUser(data.user);
      //     this.tokenStore.saveRole(data.role);

      //     this.isLoginFailed = false;

      //     this.role = this.tokenStore.getUser().role;
      //     if (this.role == "admin") {
      //       this.isLoggedIn = true;
      //       console.log(this.isLoggedIn);
      //       this.router.navigateByUrl('admin');
      //       this._sankBar.open('登入成功', ``, {
      //         duration: 1000,
      //         horizontalPosition: this.horizontalPosition,
      //         verticalPosition: this.verticalPosition
      //       });

      //     } else {
      //       console.log(this.authService.isLoggedIn);
      //       this.isLoggedIn = true;
      //       this.router.navigateByUrl('/inbox');
      //       this._sankBar.open('登入成功', ``, {
      //         duration: 1000,
      //         horizontalPosition: this.horizontalPosition,
      //         verticalPosition: this.verticalPosition
      //       });

      //     }
      //   },
      //   error => {
      //     this.errorMessage = error.message;
      //     this.isLoginFailed = true;
      //     this._sankBar.open('登入失敗', `${error.message}`, {
      //       duration: 1000,
      //       horizontalPosition: this.horizontalPosition,
      //       verticalPosition: this.verticalPosition
      //     });
      //   }

      // )

   
  
  }
}
