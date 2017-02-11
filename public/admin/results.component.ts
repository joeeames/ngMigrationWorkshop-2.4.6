import { Component, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'results',
  templateUrl: "/admin/results.component.html"
  // template: `<h1>temp results</h1>`
})
export class ResultsComponent {
  sessionsByVoteDesc: any;
  sessions: any;
  sessionsObs: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('sessions', this.sessions);

    this.route.data.forEach((data) => {
      this.sessionsByVoteDesc = data['sessions'];
      console.log('s', this.sessions);
    })
    this.sessionsByVoteDesc.sort(function(session1, session2) {
      // reverse order
      return session2.voteCount - session1.voteCount;
    })
  }

}

