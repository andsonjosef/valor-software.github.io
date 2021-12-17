import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@valor-software/home-page').then(m => m.MainPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('@valor-software/services-page').then(m => m.ServicesPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('@valor-software/blog').then(m => m.BlogModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('@valor-software/projects').then(m => m.ProjectsModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('@valor-software/for-clients').then(m => m.ForClientsModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('@valor-software/careers').then(m => m.CareersModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

