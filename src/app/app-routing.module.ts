import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserMainComponent } from './user-main/user-main.component';
import { QuestionsComponent } from './questions/questions.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import {AnswercomponentComponent} from './answercomponent/answercomponent.component';
import {FreelanceMainComponent} from './freelance-main/freelance-main.component';
import {GigsMainComponent} from './gigs-main/gigs-main.component';
import {GigsDetailsComponent} from './gigs-details/gigs-details.component';
import {PostquestionComponent} from './postquestion/postquestion.component';
import { AccountFreelanceComponent } from './account-freelance/account-freelance.component';
import { AddGigsComponent } from './add-gigs/add-gigs.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {
    path: 'main', component: UserMainComponent,
    children: [
      {path: '', component: QuestionsComponent},
      {path: 'answer/:id', component: AnswercomponentComponent},
      {path: 'postquestion', component: PostquestionComponent},
      {path: 'freelance', component: FreelanceMainComponent,
        children: [
          {path: '', component: GigsMainComponent},
          {path: 'gig_details', component: GigsDetailsComponent},
          {path: 'account-freelance', component: AccountFreelanceComponent},
          {path: 'add-gig', component: AddGigsComponent}]
      }

    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
