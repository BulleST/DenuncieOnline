
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Protocolo, ProtocoloMensagem, ProtocoloResponse, RetornoProtocolo } from './../model/protocol.model';
import { Mensagem } from "./../model/protocol.model";


@Injectable({
    providedIn: 'root'
  })

  export class ProtocoloService{

    constructor(
        private httpClient: HttpClient
      ) { }
      
    getMessages(model: Protocolo){
        return this.httpClient.post<ProtocoloResponse>('https://denuncieonline.azurewebsites.net/api/denuncia-mensagem/GetMessages', model)
    }

    post(model: ProtocoloMensagem){
      console.log(model)
      return this.httpClient.post<RetornoProtocolo>('https://denuncieonline.azurewebsites.net/api/denuncia-mensagem/AddMessage', model)

  }
  } 