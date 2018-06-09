import { UsuarioProvider } from './../../providers/usuario/usuario';
import { UbicacionProvider } from './../../providers/ubicacion/ubicacion';
import { ToolsPage } from './../tools/tools';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { RegistrarPage } from './../registrar/registrar';
import { ConsultasPage } from '../consultas/consultas';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  consultar=ConsultasPage;
  registrar=RegistrarPage;
  tools=ToolsPage
  
  constructor(
    public ubicacion:UbicacionProvider,
    public usuario:UsuarioProvider
  ) {

    ubicacion.iniciarGeolocalizacion();
    ubicacion.iniciarPolicia();

  }


}
