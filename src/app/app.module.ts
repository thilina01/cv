import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SummaryComponent } from './summary/summary.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExtraComponent } from './extra/extra.component';
import { NonRelatedComponent } from './non-related/non-related.component';
import { CertificationComponent } from './certification/certification.component';
import { TechHistoryComponent } from './tech-history/tech-history.component';
import { PublicationComponent } from './publication/publication.component';
import { InterestedComponent } from './interested/interested.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SummaryComponent,
    TechnologiesComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ExtraComponent,
    NonRelatedComponent,
    CertificationComponent,
    TechHistoryComponent,
    PublicationComponent,
    InterestedComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
