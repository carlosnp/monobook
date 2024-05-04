import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
  },
];
