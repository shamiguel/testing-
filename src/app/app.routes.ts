import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SectionPageComponent } from './section-page/section-page.component';
import { SectionDetailsComponent } from './section-details/section-details.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'experience', component: SectionPageComponent},
    {path: 'experience/:id', component: SectionDetailsComponent},
    {path: 'writings', component: SectionPageComponent},
    {path: 'writings/:id', component: SectionDetailsComponent},
    {path: 'projects', component: SectionPageComponent},
    {path: 'projects/:id', component: SectionDetailsComponent},
];
