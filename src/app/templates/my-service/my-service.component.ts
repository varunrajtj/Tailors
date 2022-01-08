import { Component, OnInit } from '@angular/core';
import { ServiceLanguageService } from '../../services/service-language.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.scss'],
  animations: [ trigger('fadeIn', [
    transition(':enter', [
      style({opacity: 0}),
      animate('450ms', style({opacity:1}) )
    ])
  ]) ]
})
export class MyServiceComponent implements OnInit {
  
  changeLanguage:boolean;

  htmlOne: string = `
  <b>Tip:</b><br>
  <dl>
  <dt>Know your measurements</dt>
  <dd>(neck, bust, arms, waist, hips, and inseam) 
  they vary from brand to brand.<br></dd>
  <dt>Buy clothes that fit your widest measurements</dt>
  Aim to buy clothing that fits your widest measurement—for example, if your hips are your widest part, 
  buy jeans that fit your hips.<br></dd>
  </dl>
  
  <b>Assurance:</b><br>
  We use the right thread appropriate color 
  that blends into the fabric makes your alteration more discrete<br>
  Backstitching stitching to last long<br>
`;
  htmlTwo: string = `
  <b>Tip:</b><br>
  <dl>
  <dt>Know your measurements</dt>
  <dd>(neck, bust, arms, waist, hips, and inseam) 
  they vary from brand to brand.<br></dd>
  <dt>Buy clothes that fit your widest measurements</dt>
  Aim to buy clothing that fits your widest measurement—for example, if your hips are your widest part, 
  buy jeans that fit your hips.<br></dd>
  </dl>
  
  <b>Assurance:</b><br>
  We use the right thread appropriate color 
  that blends into the fabric makes your alteration more discrete<br>
  Backstitching stitching to last long<br>
  `;
  
  htmlThree: string = `
  <b>Tip:</b><br>
  <dl>
  <dt>Know your measurements</dt>
  <dd>(neck, bust, arms, waist, hips, and inseam) 
  they vary from brand to brand.<br></dd>
  <dt>Buy clothes that fit your widest measurements</dt>
  Aim to buy clothing that fits your widest measurement—for example, if your hips are your widest part, 
  buy jeans that fit your hips.<br></dd>
  </dl>
  
  <b>Assurance:</b><br>
  We use the right thread appropriate color 
  that blends into the fabric makes your alteration more discrete<br>
  Backstitching stitching to last long<br>
`;

  htmlFour: string = `
  <b>Tip:</b><br>
  <dl>
  <dt>Know your measurements</dt>
  <dd>(neck, bust, arms, waist, hips, and inseam) 
  they vary from brand to brand.<br></dd>
  <dt>Buy clothes that fit your widest measurements</dt>
  Aim to buy clothing that fits your widest measurement—for example, if your hips are your widest part, 
  buy jeans that fit your hips.<br></dd>
  </dl>
  
  <b>Assurance:</b><br>
  We use the right thread appropriate color 
  that blends into the fabric makes your alteration more discrete<br>
  Backstitching stitching to last long<br>
  `;

  constructor(private servicelanguageservice:ServiceLanguageService) { }

  ngOnInit() {
    this.servicelanguageservice.changeLanguage.subscribe(c => {
      this.changeLanguage = c;      
    })
  }
  

}

