import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {modelABC} from "../modelABC";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  abc:modelABC;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() newItemEvent = new EventEmitter<modelABC>();
  addNewItem(value:modelABC) {
    this.newItemEvent.emit(value);
  }

}
