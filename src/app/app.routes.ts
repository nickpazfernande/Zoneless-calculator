import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calculator',
    // loadComponent: () => import('./calculator/views/calculator-view/calculator-view.component').then(m => m.CalculatorViewComponent), // Una forma de hacer poco estetica
    loadComponent: () => import('./calculator/views/calculator-view/calculator-view.component') //Podemos usar esta si le agregamos el export default a la clase
  },
  {
    path: '**',
    redirectTo: 'calculator', // Redirect to calculator if no other route matches
  }
];
