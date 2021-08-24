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
  shouldShowOtherData: boolean = false;
  isEditing: boolean = false;
  @Output()
  onDeleteUser: EventEmitter<number> = new EventEmitter();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  sendSelectedUserToParent() {
    this.onSelectUser.emit(this.idx);
  }

  updateUser() {
    console.log(this.userFields.value);
    return this.user?.id
      ? this.userService
          .updateUser(this.user.id, this.userFields.value)
          .subscribe(
            (x) => {
              this.userFields.patchValue({ ...x });
              alert('User Updated Successfully!');
            },
            (error) => alert(error.error.message[0] as BadRequestErrorType)
          )
      : null;
  }

  deleteUser() {
    if (this.user) {
      const id = this.user.id;
      const index = this.idx;
      this.sub = this.userService.deleteUser(id).subscribe((result) => {
        if (result) {
          this.onDeleteUser.emit(index);
        }
      });
    }
  }

  toggleOtherData() {
    this.shouldShowOtherData = !this.shouldShowOtherData;
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
