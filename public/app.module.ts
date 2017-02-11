import { NgModule, forwardRef, OpaqueToken }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, UrlHandlingStrategy }   from '@angular/router';
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
import { AllSessionsResolver } from './sessions/allSessions.resolver';

declare var toastr: Toastr;

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { console.log('match', url.toString().startsWith("/admin/results"), url.toString()); return url.toString().startsWith("/admin/results"); }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    RouterModule.forRoot([
      { path: 'admin/results', component: ResultsComponent, resolve: { sessions: AllSessionsResolver} },
    ], {useHash: true})
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
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
    { provide: '$scope', useExisting: '$rootScope' }, // I have to do this cause we do not provide $scope in the module. Seems to be broken.
    AllSessionsResolver
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent,
    ProfileComponent,
    DetailPanelComponent
    // ResultsComponent
  ]
})
export class AppModule { }
