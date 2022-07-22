import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  private getTotalUsuariosPorRedesSociales(){
    return this.http.get<any>('http://localhost:3000/grafica');
  }

  public getUsuariosPorRedesSocialesDona():Observable<any>{
    console.log("Hola mundo!!!!");
    return this.getTotalUsuariosPorRedesSociales()
      .pipe(
        map( (data)=>{

          return {
            labels: Object.keys(data),
            datasets: [{ data: Object.values(data), backgroundColor: ['#0C73ED', '#0CB6F7','#00DBE0', '#0CF7B9', '#0CED72'] }],
          };
        })
      );
  }
}
