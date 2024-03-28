import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './parts/content/content.component';
import { ConsultarDenunciaComponent } from './parts/consultar-denuncia/consultar-denuncia.component';


const routes: Routes = [
  {
      path: '', component: ContentComponent
  },
  {
    path: 'consultar-denuncia', component: ConsultarDenunciaComponent
  },
  
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
              
    exports: [RouterModule],
    
  })
  export class AppRoutingModule { }
