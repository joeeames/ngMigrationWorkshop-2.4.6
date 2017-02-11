import { NgModule, forwardRef, OpaqueToken }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NameParser } from './admin/nameParser.service';
import { UnreviewedTalkComponent  } from './home/unreviewedTalk.component';
import { TalkDurationPipe } from './common/talkDuration.pipe';
import { ProfileComponent } from './profile/profile.component';
import { TOASTR_TOKEN, Toastr } from './toastr/toastr.service';
import { NavComponent } from './nav/nav.component';
import { NavWrapperComponent } from './nav/nav-wrapper.component';
import { Sessions } from './sessions/sessions.service';
import { DetailPanelComponent } from './common/detailPanel.component';
import { SessionDetailWithVotesComponent } from './sessions/sessionDetailWithVotes.component';
import { ResultsComponent } from './admin/results.component';

declare var toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule
    // RouterModule.forRoot([], {useHash: true})
  ],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent,
    TalkDurationPipe,
    ProfileComponent,
    NavWrapperComponent,
    NavComponent,
    DetailPanelComponent,
    ResultsComponent,
    SessionDetailWithVotesComponent
  ],
  providers: [
    NameParser,
    Sessions,
    { provide: '$location',
      useFactory: (i: any) => i.get('$location'),
      deps: ['$injector'] },
    { provide: 'currentIdentity',
      useFactory: (i: any) => i.get('currentIdentity'),
      deps: ['$injector'] },
    { provide: TOASTR_TOKEN, useValue: toastr }
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent,
    ProfileComponent,
    DetailPanelComponent,
    ResultsComponent
  ]
})
export class AppModule { }
