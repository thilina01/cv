import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { ExternalResourcesComponent } from './external-resources/external-resources.component';
import { DataService } from './data.service';

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
    RecommendationsComponent,
    ExternalResourcesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
