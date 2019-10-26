import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {path: 'gameslist',
  children: [
    {
      path: '',
      loadChildren:
      './gameslist/gameslist.module#GameslistPageModule'
    },
    {
      path: ':gameid',
     loadChildren: './game/game.module#GamePageModule'
    }
  ]
},
  { path: 'addgame', loadChildren: './addgame/addgame.module#AddgamePageModule' }
 /* { path: 'gameslist', loadChildren: './gameslist/gameslist.module#GameslistPageModule' },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
