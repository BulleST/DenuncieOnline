import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './parts/header/header.component';
import { ContentComponent } from './parts/content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToggleButtonModule,
    FormsModule,
   
    
  

    ToastrModule.forRoot({
      preventDuplicates: true,
      enableHtml: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
