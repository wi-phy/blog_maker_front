import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [HlmIconDirective, FormsModule, NgIconComponent],
  providers: [provideIcons({ lucideEye, lucideEyeOff })],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPageComponent {
  username = '';
  password = '';

  router = inject(Router);

  isPasswordShown = signal(false);

  goToHome() {
    this.router.navigate(['/home']);
  }

  togglePassword() {
    this.isPasswordShown.update((hide) => !hide);
  }
}
