import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
	    path: '',
	    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  	},{
	    path: 'about',
	    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  	},{
	    path: 'projects',
	    loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)
  	},{
	    path: 'education',
	    loadChildren: () => import('./modules/education/education.module').then(m => m.EducationModule)
  	},{
	    path: 'testimonials',
	    loadChildren: () => import('./modules/testimonials/testimonials.module').then(m => m.TestimonialsModule)
  	},{
	    path: 'contact',
	    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
