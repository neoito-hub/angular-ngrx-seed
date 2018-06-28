import { Component, OnInit } from '@angular/core';
import { Home } from '../../../../core/home/reducers/home.reducer';
import { Store } from '@ngrx/store';
import * as fromHomeActions from '../../../../core/home/actions/home.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public store: Store<Home>) {}

  ngOnInit() {
    this.store.dispatch(new fromHomeActions.LoadHome());
  }
}
