import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  sub: Subscription = new Subscription();
  @Output() onCreateUser: EventEmitter<void> = new EventEmitter<void>();
  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {}

  createUser() {
    this.sub = this.usersService
      .createUser(this.userForm.value)
      .subscribe(() => {
        this.onCreateUser.emit();
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
