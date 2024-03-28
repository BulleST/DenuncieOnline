
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Protocolo } from './../model/protocol.model';
import { Mensagem } from "./../model/protocol.model";


@Injectable({
    providedIn: 'root'
  })

  export class ProtocoloService{

    constructor(
        private httpClient: HttpClient
      ) { }
      
    post(model: Protocolo){
        return this.httpClient.post<Mensagem[]>('http://denuncieonline.azurewebsites.net/GetMessages', model)
    }
  }