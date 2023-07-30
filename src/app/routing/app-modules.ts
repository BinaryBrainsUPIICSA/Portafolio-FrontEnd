import {ModuleContext} from "../../shared/model/routing/module-context";

export class AppModules{
  static readonly nombreModulo: ModuleContext = {
    id: 'nombre-modulo',
    description: 'Ejemplo de como hacer un modulo personalizado',
  }
  static readonly nosotros: ModuleContext = {
    id: 'nosotros',
    description: 'Modulo que contiene información de los integrantes',
  }
  static readonly contactanos: ModuleContext = {
    id: 'contactanos',
    description: 'Modulo que contiene el formulario de contacto',
  }
}
