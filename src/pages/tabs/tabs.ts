import { UsuarioProvider } from './../../providers/usuario/usuario';
import { UbicacionProvider } from './../../providers/ubicacion/ubicacion';
import { ToolsPage } from './../tools/tools';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ConsultasPage } from '../consultas/consultas';
import { IncidentesPage } from '../incidentes/incidentes';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  consultar=ConsultasPage;
  registrar=IncidentesPage;
  tools=ToolsPage
  
  constructor(
    public ubicacion:UbicacionProvider,
    public usuario:UsuarioProvider
  ) {

    ubicacion.iniciarGeolocalizacion();
    ubicacion.iniciarPolicia();

  }


}
