import { Component, OnInit } from '@angular/core';
import { ServiceLanguageService } from '../../services/service-language.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {
	trigger,
	state,
	style,
	animate,
	transition,
	// ...
  } from '@angular/animations';


  @Component({
	selector: 'app-my-contact',
	templateUrl: './my-contact.component.html',
	styleUrls: ['./my-contact.component.scss'],
	animations: [ trigger('fadeIn', [
	  transition(':enter', [
		style({opacity: 0}),
		animate('450ms', style({opacity:1}) )
	  ])
	]) ]
  })

export class MyContactComponent implements OnInit {
	changeLanguage:boolean;
	form: FormGroup;
	submitted: boolean = false; // show and hide the success message
	isLoading: boolean = false; // disable the submit button if we're loading
	responseMessage: string; // the response message to show to the user
	validationMessage: string;
  	urlString:string ="https://tailorssendgrid.azurewebsites.net/api/HttpTriggerSendGrid?code=FLhDhGPAMmOIbVbgQZeDNYP3ygzxEhQICeS2r4/nGwTjd/3EzD685g==";
	constructor(private formBuilder: FormBuilder, private http: HttpClient, private servicelanguageservice:ServiceLanguageService) {
		
	}
	get getControl(){
		return this.form.controls;
	  }
	ngOnInit(): void {
		this.form = this.formBuilder.group({
		  name: ['', [Validators.required, Validators.minLength(3)]],
		  email: ['', [Validators.required, Validators.email]],
		  phone: [''],
		  subject: ['', [Validators.required, Validators.minLength(3)]],
		  message: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(512)]],
		  honeypot: ['']
		})  
		this.servicelanguageservice.changeLanguage.subscribe(c => {
			this.changeLanguage = c;
		  })
	  }


	onSubmit() {
		this.validationMessage = "";
		//console.log(this.form+"***"+this.form.get('honeypot').value);
		if ((!this.form.invalid) && this.form.get('honeypot').value == "") {
			//alert(this.form.invalid);
			this.form.get('honeypot').setValue("submited");
			this.form.disable(); // disable the form if it's valid to disable multiple submissions
			var formData: any = new FormData();
			formData.append("name", this.form.get("name").value);
			formData.append("email", this.form.get("email").value);
			formData.append("phone", this.form.get("phone").value);
			formData.append("subject", this.form.get("subject").value);
			formData.append("message", this.form.get("message").value);
			this.isLoading = true; // sending the post request async so it's in progress
			this.submitted = false; // hide the response message on multiple submits
			this.http.post(this.urlString, formData).subscribe(
				(response) => {
					// choose the response message
					if (response["result"] == "success") {
						this.responseMessage = "Thanks for the message! I'll get back to you soon!";
					} else {
						this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
					}
					this.form.enable(); // re enable the form after a success
					this.submitted = true; // show the response message
					this.isLoading = false; // re enable the submit button
					console.log(response);
				},
				(error) => {
					this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
					this.form.enable(); // re enable the form after a success
					this.submitted = true; // show the response message
					this.isLoading = false; // re enable the submit button
					console.log(error);
				}
			);
		}else if((this.form.invalid)){
			//alert((this.form.status == "VALID") +"**"+ +this.form.invalid+" no call is made either validation failed or duplicate");
			this.validationMessage ="The form could not be submitted because errors were found";
		}
	}
}