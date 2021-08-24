import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserBlockComponent } from './components/users/user-block/user-block.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { PostItemComponent } from './components/posts/post-item/post-item.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UserBlockComponent,
    TodoItemComponent,
    PostItemComponent,
    PostFormComponent,
    TodoFormComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
