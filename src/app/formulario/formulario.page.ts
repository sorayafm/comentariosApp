import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { LoginserviceService } from '../loginservice.service';
import { HttpResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  providers:[LoginserviceService]
})
export class FormularioPage implements OnInit {
//creo login
login:Login;
//añado el public para cambiar de pagina
constructor(private loginservice:LoginserviceService, public navCtrl :NavController) { 
console.log ("en constructor")
this.login= new Login();// creo el objeto login

}
gestionarRespuesta (loginval:Login)
{
  console.log("usuario"+ loginval.nombre);
  console.log("pwd"+ loginval.pwd);
  console.log("token"+ loginval.token);
  //guardar credenciales
  //serialiso 
  let loginstr:string =JSON.stringify(loginval);
  //guardar
  window.localStorage.setItem("credenciales", loginstr); 
  //cambiar de pagina
this.navCtrl.navigateForward('listapelis');



}
acceder(datos:Login)
{
console.log("ha tocado acceder");
console.log("nombre"+ datos.nombre);
console.log("pwd"+ datos.pwd);
//aqui hago la inyeccion de servicios
// hago casting
this.loginservice.postLogin(datos).subscribe(
  resp=>{
    let cuerpo:HttpResponse<Object>;
    //pasar resp a httpresponse
    cuerpo = resp as HttpResponse<Object>; //CASING CONVERSION 
    //cuerpo =<HttpResponse<Object>

    console.log("ha ido bien"+ resp);
    console.log("status"+ cuerpo.status);
    console.log("Body"+ cuerpo.body);
    let loginval:Login=cuerpo.body as Login;
    this.gestionarRespuesta(loginval);

  },
    error=> {
      console.log("error"+ error)
    }

  );
}

ngOnInit() {
}

}
