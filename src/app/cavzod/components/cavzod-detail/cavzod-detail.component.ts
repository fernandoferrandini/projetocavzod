import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cavzod} from '../../model/cavzod.model';
import {Action} from '@ngrx/store';
import {createCavzod, deleteCavzod, unselectCavzod, updateCavzod} from '../../store/actions/cavzods.actions';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-cavzod-detail',
  templateUrl: './cavzod-detail.component.html',
  styleUrls: ['./cavzod-detail.component.scss']
})
export class CavzodDetailComponent implements OnInit {

  cavzodForm = this.fb.group(
    {
      id: [''],
      name: [''],
      classe: [''],
      constelacao: ['']
    }
  );

  @Input()
  set cavzod(cavzod: Cavzod) {
    if (cavzod) {
      this.cavzodForm.patchValue(cavzod);
    }

  }

  @Output()
  actionEmitter = new EventEmitter<Action>();


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  unselect() {
    this.actionEmitter.emit(unselectCavzod());
  }

  salvar() {
    if (this.cavzodForm.get('id') && this.cavzodForm.get('id').value !== '') {
      this.actionEmitter.emit(updateCavzod({cavzod: this.cavzodForm.value}));
    } else {
      this.actionEmitter.emit(createCavzod({cavzod: this.cavzodForm.value}));
    }
  }

  delete() {
    this.actionEmitter.emit(deleteCavzod({id: this.cavzodForm.get('id').value}));
  }
}
