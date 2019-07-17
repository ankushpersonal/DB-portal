import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { CollectionsComponent } from './collections/collections.component';
import { DatabasesComponent } from './databases/databases.component';
import { DocumentsComponent } from './documents/documents.component';




const appRoutes : Routes = [{path : 'dashboard', component : DashboardComponent},
{path : 'databases', component : DatabasesComponent},
{path : 'collections', component : CollectionsComponent},
{path : 'documents', component : DocumentsComponent},
{path : 'settings', component : SettingsComponent},
{path : '' , component : LoginComponent},
{path : '**' , component : LoginComponent}]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SettingsComponent,
    CollectionsComponent,
    DatabasesComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
