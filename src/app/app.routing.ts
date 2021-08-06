import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

const  appRoutes = [
    { path: 'admin', component: AdminComponent}
  ];

export const routing = RouterModule.forRoot(appRoutes);