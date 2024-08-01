import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GruposPage } from './pages/grupos/grupos.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'grupos',
    loadChildren: () => import('./pages/grupos/grupos.module').then(m => m.GruposPageModule)
  },
  { path: 'grupo/:id', loadChildren: () => import('./pages/grupos/grupos.module').then(m => m.GruposPageModule) },

  {
    path: '',
    component: GruposPage
  },

  {
    path: 'chat/:groupName',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
  }
  // {
  //   path: 'chat-selection',
  //   loadChildren: () => import('./pages/chat-selection/chat-selection.module').then(m => m.ChatSelectionPageModule)
  // },
  // {
  //   path: 'chat-room/:roomName',
  //   loadChildren: () => import('./pages/chat-room/chat-room.module').then(m => m.ChatRoomPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

