import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  postFields = this.formBuilder.group({
    title: ['', Validators.required],
    body: [''],
  });
  sub: Subscription = new Subscription();
  @Input() userId: number = -1;
  @Output() createPostEvent: EventEmitter<IPost> = new EventEmitter<IPost>();
  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService
  ) {}

  createPost() {
    if (this.userId > 0) {
      this.sub = this.postsService
        .createPost(
          {
            ...this.postFields.value,
          } as CreatePostDto,
          this.userId
        )
        .subscribe((newPost) => {
          this.createPostEvent.emit(newPost);
        });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
