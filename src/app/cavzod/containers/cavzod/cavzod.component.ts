import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Cavzod} from '../../model/cavzod.model';
import {CavzodState} from '../../store/reducers/global.reducer';
import {Action, select, Store} from '@ngrx/store';
import {getAllCavzods, getSelectCavzod} from '../../store/selectors/cavzods.selectors';

@Component({
  selector: 'app-cavzod',
  templateUrl: './cavzod.component.html',
  styleUrls: ['./cavzod.component.scss']
})
export class CavzodComponent implements OnInit {

  cavzod$: Observable<Cavzod>;

  constructor(private store: Store<CavzodState>) { }

  ngOnInit() {
    this.cavzod$ = this.store.pipe(select(getSelectCavzod));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

}
