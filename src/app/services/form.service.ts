import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormContato } from "../model/form.model";

@Injectable({
    providedIn: 'root'
  })

  export class FormService{

    constructor(
        private httpClient: HttpClient
      ) { }
      
    post(model: FormContato){

        return this.httpClient.post('./assets/mail/contact_me.php', model, {headers: {'Content-Type': 'application/json; charset=utf-8'}} )
    }
  }