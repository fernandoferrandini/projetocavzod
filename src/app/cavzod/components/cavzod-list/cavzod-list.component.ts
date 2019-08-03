import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cavzod} from '../../model/cavzod.model';
import {Action} from '@ngrx/store';
import {selectCavzod} from '../../store/actions/cavzods.actions';

@Component({
  selector: 'app-cavzod-list',
  templateUrl: './cavzod-list.component.html',
  styleUrls: ['./cavzod-list.component.scss']
})
export class CavzodListComponent implements OnInit {

  @Input()
  cavzods: Cavzod[];

  @Output()
  actionEmitter = new EventEmitter<Action>();

  constructor() { }

  ngOnInit() {
  }

  select(cavzod: Cavzod) {
    this.actionEmitter.emit(selectCavzod({cavzod}));
  }

}
