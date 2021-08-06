import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
 url!: String;
    constructor(private http: HttpClient){

    }
    addVaccine(valueForm: any[] ) {

      console.log('datos en servicio'+valueForm);
      
        return this.http.post(`${this.url}/post.php`,valueForm );
      }

}