import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UserMainComponent } from './user-main/user-main.component';
import { QuestionsComponent } from './questions/questions.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SidebarQuestionComponent } from './sidebar-question/sidebar-question.component';
import { TrendingtagsquestionComponent } from './trendingtagsquestion/trendingtagsquestion.component';
import { AnswercomponentComponent } from './answercomponent/answercomponent.component';
import { FreelanceMainComponent } from './freelance-main/freelance-main.component';
import { SidebarFreelanceComponent } from './sidebar-freelance/sidebar-freelance.component';
import { GigsMainComponent } from './gigs-main/gigs-main.component';
import { GigsDetailsComponent } from './gigs-details/gigs-details.component';
import { PostquestionComponent } from './postquestion/postquestion.component';
import { AccountFreelanceComponent } from './account-freelance/account-freelance.component';
import { AddGigsComponent } from './add-gigs/add-gigs.component';
import { JobsSidebarComponent } from './jobs-sidebar/jobs-sidebar.component';
import { JobsComponent } from './jobs/jobs.component';
import { PostJobComponent } from './post-job/post-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    UserMainComponent,
    QuestionsComponent,
    UserProfileComponent,
    SidebarQuestionComponent,
    TrendingtagsquestionComponent,
    AnswercomponentComponent,
    FreelanceMainComponent,
    SidebarFreelanceComponent,
    GigsMainComponent,
    GigsDetailsComponent,
    PostquestionComponent,
    AccountFreelanceComponent,
    AddGigsComponent,
    JobsSidebarComponent,
    JobsComponent,
    PostJobComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
