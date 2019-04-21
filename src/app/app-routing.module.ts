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
import {ChatComponent} from './chat/chat.component';
import {RequestOrderComponent} from './request-order/request-order.component';
import {PendingOrdersComponent} from './pending-orders/pending-orders.component';
import {BuyerOrderComponent} from './buyer-order/buyer-order.component';
import {PaymentComponent} from './payment/payment.component';
import {UserAccountComponent} from './user-account/user-account.component';
import {MyjobsComponent} from './myjobs/myjobs.component';
import {MyjobsAppliedComponent} from './myjobs-applied/myjobs-applied.component';

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
          {path: 'chat', component: ChatComponent},
          {path: 'add-gig', component: AddGigsComponent},
          {path: 'order-requests', component: RequestOrderComponent},
          {path: 'pending-orders', component: PendingOrdersComponent},
          {path: 'my-orders', component: BuyerOrderComponent},
          {path: 'account', component: UserAccountComponent},
          {path: 'payment/:amount/:oid/:gigid', component: PaymentComponent},
          {path: 'myjob', component: MyjobsComponent},
          {path: 'myjob-applied', component: MyjobsAppliedComponent}


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
          {path: 'gig_details/:id', component: GigsDetailsComponent},
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
