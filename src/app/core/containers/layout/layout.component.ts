import { Component, OnInit } from '@angular/core';
import {CoreState} from '../../store/reducers/feature.reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {isAuthenticated} from '../../store/selectors/auth.selectors';
import {signOut} from '../../store/actions/auth.actions';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isUserAuthenticated$: Observable<boolean>;


  constructor(private store: Store<CoreState>) { }

  ngOnInit() {
    this.isUserAuthenticated$ = this.store.pipe(select(isAuthenticated), tap(
      taAutenticado => console.log('ta autenticado', taAutenticado)
    ));
  }

  logout() {
    this.store.dispatch(signOut());
  }

}
