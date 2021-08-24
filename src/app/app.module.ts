import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserlistComponent } from './components/users/userlist/userlist.component';
import { UserBlockComponent } from './components/users/user-block/user-block.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, UserlistComponent, UserBlockComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
