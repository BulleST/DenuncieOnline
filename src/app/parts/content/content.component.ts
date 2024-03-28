import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { FormContato } from 'src/app/model/form.model';
import { FormService } from 'src/app/services/form.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'main',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
    object: FormContato = new FormContato;
    loading = false;
    images: string[] = [
      '../../../assets/1.png',
      '../../../assets/2.png',
      '../../../assets/3.png',
      '../../../assets/4.png',
    ]
  constructor(
    private formService: FormService,
  ){
   
  }
  formData = {
    name: '',
    password: ''
  };

  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
  }

  send(ngForm: NgForm){
    if(ngForm.invalid){
      return
    }
    lastValueFrom(this.formService.post(this.object))
    .then(res => {
      console.log('sucesso', res)
    })
    .catch(res => {
      console.log('erro', res)
    })

  }
}
