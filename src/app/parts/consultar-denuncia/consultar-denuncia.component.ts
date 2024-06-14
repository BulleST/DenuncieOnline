import { Component } from '@angular/core';
import { Protocolo } from 'src/app/model/protocol.model';
import { Mensagem } from 'src/app/model/protocol.model';
import { ProtocoloService } from 'src/app/services/protocolo.service';
import { lastValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProtocoloMensagem } from 'src/app/model/protocol.model';

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
  message: ProtocoloMensagem = new ProtocoloMensagem;

  

  constructor(
    private protocoloService: ProtocoloService,
    private datePipe: DatePipe,
  
  ){

  }

  send(ngForm: NgForm){
    if(ngForm.invalid){
      return
    }
   this.loadList(this.object)

  }

  sendMessage(form: NgForm){
    if(form.invalid){
      return
    }
    this.message.Protocol = this.object.Protocol;
    this.message.MensagemDenunciante = true;
    lastValueFrom(this.protocoloService.post(this.message))
    .then(res =>{
     this.loadList(this.object)
     this.message.Description = '';
     form.reset();
    })
  }

  loadList(protocol: Protocolo){
    lastValueFrom(this.protocoloService.getMessages(protocol))
    .then(res => {
      if(res){
        this.loading = false;
        this.list = res.List;
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
     return this.datePipe.transform( date, 'dd/MM/yyyy HH:mm:ss') as string;
  }
}
