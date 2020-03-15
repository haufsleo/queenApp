import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/list',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        loadChildren: () =>
          import('../list/list.module').then((m) => m.ListPageModule)
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('../calendar/calendar.module').then(
            (m) => m.CalendarPageModule
          )
      },
      {
        path: 'newsletter',
        loadChildren: () =>
          import('../newsletter/newsletter.module').then(
            (m) => m.NewsletterPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
