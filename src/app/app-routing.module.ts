import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {UserMainComponent} from './user-main/user-main.component';
import {QuestionsComponent} from './questions/questions.component';
import {AnswercomponentComponent} from './answercomponent/answercomponent.component';
import {FreelanceMainComponent} from './freelance-main/freelance-main.component';
import {GigsMainComponent} from './gigs-main/gigs-main.component';
import {GigsDetailsComponent} from './gigs-details/gigs-details.component';
import {PostquestionComponent} from './postquestion/postquestion.component';
import {AccountFreelanceComponent} from './account-freelance/account-freelance.component';
import {AddGigsComponent} from './add-gigs/add-gigs.component';
import {JobsComponent} from './jobs/jobs.component';
import {PostJobComponent} from './post-job/post-job.component';
import {JobDetailsComponent} from './job-details/job-details.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserProfileDetailsComponent} from './user-profile-details/user-profile-details.component';
import {QuestionmainComponent} from './questionmain/questionmain.component';
import {MyanswerComponent} from './myanswer/myanswer.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

  {
    path: 'main', component: UserMainComponent,
    children: [
      {
        path: '', component: QuestionmainComponent,
        children: [
          {path: '', component: QuestionsComponent}
        ]
      },
      {path: 'answer/:id', component: AnswercomponentComponent},
      {path: 'postquestion', component: PostquestionComponent},
      {
        path: 'userprofile', component: UserProfileComponent,
        children: [
          {path: '', component: UserProfileDetailsComponent},
          {
            path: 'myquestion', component: QuestionsComponent,
            // children: [
            //   {path: 'answer/:id', component: AnswercomponentComponent},
            // ]
          },
          {path: 'myanswer', component: MyanswerComponent},
          {path: 'add-gig', component: AddGigsComponent}
        ]
      },
      {
        path: 'jobs',
        children: [
          {path: '', component: JobsComponent},
          {path: 'post-job', component: PostJobComponent},
          {path: 'job-details/:id', component: JobDetailsComponent}
        ]
      },
      {
        path: 'freelance', component: FreelanceMainComponent,
        children: [
          {path: '', component: GigsMainComponent},
          {path: 'gig_details', component: GigsDetailsComponent},
          {path: 'account-freelance', component: AccountFreelanceComponent}
        ]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
