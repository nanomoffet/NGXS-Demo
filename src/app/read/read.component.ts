import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveTutorial } from '../actions/tutorial.actions';
import { TutorialState } from '../state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>;

  constructor(private store: Store) {
  }

  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }

  ngOnInit() {
  }

}
