import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

@Injectable()
export class ServiceMailService {

  constructor(private http:HttpClient) { }

  contactUserdetails( name, email, phone, subject, mailmessage) {
    // post these details to BACKEND server return user info if correct
    return this.http.post<myData>('https://tailorssendgrid.azurewebsites.net/api/HttpTriggerSendGrid?code=FLhDhGPAMmOIbVbgQZeDNYP3ygzxEhQICeS2r4/nGwTjd/3EzD685g==',{
      name, email, phone, subject, mailmessage
    })

  }

}
