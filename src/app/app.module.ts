import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// -------- Components ---------- //
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { IcecreamListPageComponent } from './pages/icecream-list-page/icecream-list-page.component';

// -------- Guards ---------- //
import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { IcecreamCardComponent } from './components/icecream-card/icecream-card.component';

// -------- Routes ---------- //
const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [InitAuthGuard] },
  { path: 'login',  component: LoginPageComponent, canActivate: [RequireAnonGuard] },
  { path: 'profile',  component: ProfilePageComponent, canActivate: [RequireUserGuard] },
  { path: 'list',  component: IcecreamListPageComponent, canActivate: [InitAuthGuard] },
  { path: '**',  component: NotFoundPageComponent, canActivate: [InitAuthGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ProfilePageComponent,
    IcecreamListPageComponent,
    IcecreamCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
