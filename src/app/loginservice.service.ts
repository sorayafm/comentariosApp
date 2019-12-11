import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
//DESDE AQUÍ NOS COMUNICAMOS CON EL SERVIDOR
//tx rx datos 
private static readonly SERVICIO_POST_LOGIN:string ="http://10.1.2.10:8081/cfticionic/usuariocftic";
  constructor(private httpcliente:HttpClient) { }

  readonly RUTA_SERVIDOR:string = "http://10.1.2.10:8081/cfticionic/usuariocftic";

  postLogin (login: Login):Observable<Object>
{

   let observable:Observable<object>;

   let json_login : string =  JSON.stringify(login);//Serializar
   console.log ("Enviado..." +json_login);
   //para la cabecera creo el objetp con new httpheaders
   let cabeceras = new HttpHeaders().set ('Content-type', 'application/json');

   observable=this.httpcliente.post(LoginserviceService.SERVICIO_POST_LOGIN, json_login, {headers:cabeceras, observe: "response"}); 
   return observable;

   return this.httpcliente.post 
    (LoginserviceService.SERVICIO_POST_LOGIN, json_login,{headers:cabeceras, observe:"response"});

    //
}

}
