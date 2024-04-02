
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Protocolo, RetornoProtocolo } from './../model/protocol.model';
import { Mensagem } from "./../model/protocol.model";


@Injectable({
    providedIn: 'root'
  })

  export class ProtocoloService{

    constructor(
        private httpClient: HttpClient
      ) { }
      
    getMessages(model: Protocolo){
        return this.httpClient.post<Mensagem[]>('http://denuncieonline.azurewebsites.net/GetMessages', model)
    }

    post(model: Protocolo){
      console.log(model)
      return this.httpClient.post<RetornoProtocolo>('http://denuncieonline.azurewebsites.net/AddMessage', model)

  }
  } 