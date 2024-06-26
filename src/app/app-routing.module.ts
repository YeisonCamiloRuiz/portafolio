import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'portafolio', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path:'',
    redirectTo:'portafolio',
    pathMatch:'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
