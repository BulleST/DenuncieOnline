import { Component } from '@angular/core';
import { Protocolo } from 'src/app/model/protocol.model';
import { Mensagem } from 'src/app/model/protocol.model';
import { ProtocoloService } from 'src/app/services/protocolo.service';
import { lastValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consultar-denuncia',
  templateUrl: './consultar-denuncia.component.html',
  styleUrl: './consultar-denuncia.component.scss'
})
export class ConsultarDenunciaComponent {
  loading = false;
  list: Mensagem[] = [];
  object: Protocolo = new Protocolo;
  submitted: boolean = false;
  

  constructor(
    private protocoloService: ProtocoloService,
    private datePipe: DatePipe,
  
  ){

  }

  send(ngForm: NgForm){
    if(ngForm.invalid){
      return
    }
    lastValueFrom(this.protocoloService.post(this.object))
    .then(res => {
      if(res){
        this.loading = false;
        this.list = res;
        this.submitted = true;
        console.log(this.list)
      }
      
    })
    .catch(res => {
      console.log('erro', res)
    })

  }

  back(){
    this.submitted = false;
    this.list = [];
  }

  formatDateTime(date: Date){
     return this.datePipe.transform( date, 'HH:mm:ss dd/MM/yyyy') as string;
  }
}
