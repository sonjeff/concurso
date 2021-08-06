import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


import { VaccineService } from 'src/app/services/vaccine.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formVaccine:FormGroup;

  constructor(
   private servicio:VaccineService
  ) {
    this.formVaccine= new FormGroup({
      brand : new FormControl(),
      stock : new FormControl()
    });
   }

  ngOnInit(): void {
  }

  Onsubmit(){
    this.servicio.addVaccine(this.formVaccine.value);
    console.log(this.formVaccine.value);
    
   console.log('se a registrado')

  }

}
