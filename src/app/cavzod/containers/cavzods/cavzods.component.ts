import { Component, OnInit } from '@angular/core';
import {CavzodState} from '../../store/reducers/global.reducer';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Cavzod} from '../../model/cavzod.model';
import {getAllCavzods} from '../../store/selectors/cavzods.selectors';


@Component({
  selector: 'app-cavzods',
  templateUrl: './cavzods.component.html',
  styleUrls: ['./cavzods.component.scss']
})
export class CavzodsComponent implements OnInit {

  cavzods$: Observable<Cavzod[]>;
  constructor(private store: Store<CavzodState>) { }

  ngOnInit() {
    this.cavzods$ = this.store.pipe(select(getAllCavzods));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

}
