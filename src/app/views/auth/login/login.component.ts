import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@app/services/auth.service";
import {StorageService} from "@app/services/storage.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private permissionsService: NgxPermissionsService,
              private storageService: StorageService) {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  handleLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('user')?.value || '';
      const password = this.loginForm.get('password')?.value || '';

      this.authService.login(username, password).subscribe({
        next: data => {
          this.storageService.saveUser(data);

          const userGroups = data.user.groups.map((group: any) => group.name);
          this.permissionsService.loadPermissions(userGroups);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['/imagenes/captacion']);
        },
        error: err => {
          console.log(err, 'rrr')
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });

    }
  }
}
