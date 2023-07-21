import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = "Joaquim"
  userData ={
    email: 'Joaquim@email.com',
    role: "Admin"
  };


  nomeUsuario= "João"
  dadosUsuario={
    email:"marcuz.silva@hotmail.com",
    tipo:"administrador"
  }


  nome="João Marcos Silva"
  data= "04/08/1980"
  telefone= 994140962



  title = 'curso-angular';

}
