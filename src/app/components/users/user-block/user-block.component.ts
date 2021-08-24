import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.css'],
})
export class UserBlockComponent implements OnInit {
  sub: Subscription = new Subscription();
  @Input() user?: IExtendedUser;
  @Input() idx: number = -1;
  @Input() isActive: boolean = false;
  @Output() onSelectUser = new EventEmitter<number>();
  userFields = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    city: [''],
    street: [''],
    zipcode: [''],
  });
  expanded: boolean = false;
  isEditing: boolean = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  sendSelectedUserToParent() {
    this.onSelectUser.emit(this.idx);
  }

  updateUser() {
    if (this.user) {
      const modifiedUser = { ...this.user, ...this.userFields.value };
      this.sub = this.userService
        .updateUser(this.user.id, modifiedUser)
        .subscribe((result) => Object.assign(this.user, result));
    }
  }

  fillForm(values?: Partial<IUser>): void {
    values
      ? this.userFields.patchValue({ ...values })
      : this.userFields.patchValue({ ...this.user });
  }
  ngOnInit(): void {
    this.fillForm();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
