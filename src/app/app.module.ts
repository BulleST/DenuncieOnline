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
import { ConsultarDenunciaComponent } from './parts/consultar-denuncia/consultar-denuncia.component';
import { FooterComponent } from './parts/footer/footer.component';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ConsultarDenunciaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToggleButtonModule,
    FormsModule,
    ButtonModule,
   
    
  

    ToastrModule.forRoot({
      preventDuplicates: true,
      enableHtml: true
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
