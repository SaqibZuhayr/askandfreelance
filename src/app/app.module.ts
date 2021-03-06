import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormGroup, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
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
import { UserProfileDetailsComponent } from './user-profile-details/user-profile-details.component';
import { QuestionmainComponent } from './questionmain/questionmain.component';
import { MyanswerComponent } from './myanswer/myanswer.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import {MessageService} from './services/message.service';
import { UserProfileSidebarComponent } from './user-profile-sidebar/user-profile-sidebar.component';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { RequestOrderComponent } from './request-order/request-order.component';
import { RightsidebarUserDetailComponent } from './rightsidebar-user-detail/rightsidebar-user-detail.component';
import { RecommededQuestionComponent } from './recommeded-question/recommeded-question.component';
import { BuyerOrderComponent } from './buyer-order/buyer-order.component';
import { PaymentComponent } from './payment/payment.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { MyjobsComponent } from './myjobs/myjobs.component';
import { MyjobsAppliedComponent } from './myjobs-applied/myjobs-applied.component';
import { SettingsComponent } from './settings/settings.component';
import { GigsAppliedComponent } from './gigs-applied/gigs-applied.component';
import { LoaderComponent } from './loader/loader.component';


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
    JobDetailsComponent,
    UserProfileDetailsComponent,
    QuestionmainComponent,
    MyanswerComponent,
    ChatComponent,
    MessageComponent,
    UserProfileSidebarComponent,
    ConversationListComponent,
    PendingOrdersComponent,
    RequestOrderComponent,
    RightsidebarUserDetailComponent,
    RecommededQuestionComponent,
    BuyerOrderComponent,
    PaymentComponent,
    UserAccountComponent,
    MyjobsComponent,
    MyjobsAppliedComponent,
    SettingsComponent,
    GigsAppliedComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxAutoScrollModule,
    NgxPaginationModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
