import {Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdowm-timer',
  templateUrl: './countdowm-timer.component.html',
  styleUrls: ['./countdowm-timer.component.scss']
})
export class CountdowmTimerComponent implements OnInit, OnDestroy, OnChanges {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  private _second = 11; //neu cha ko truyen vao mac dinh la 11

  @Input('remaining-time')
  secondss = 20;

  // get seconds(): number {
  //   return this._second
  // }
  //
  // set seconds(v) {
  //   v = typeof v === 'undefined' ? 99 : v; //neu cha truyen vao khong phai so, mac dinh la 99
  //   const vFixed = Number(v);
  //   this._second = Number.isNaN(vFixed) ? 99 : vFixed;
  // }

//   @Output('timerEnd')
//   finish = new EventEmitter<boolean>();
//   private countDown() {
// // other code
//     if (this.remainingTime === 0) {
//       this.finish.emit(true);
//     }
//   }

  constructor() {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  clearTimter() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('secondss' in changes) {
      let ve = changes.secondss.currentValue;
      ve = typeof ve === 'undefined' ? 120 : ve;
      const vFixed = Number(ve);
      this.secondss = Number.isNaN(vFixed) ? 120 : vFixed;
    }
  }

  start() {
    this.remainingTime = this.secondss;
    this.secondss--;
  }

  stop() {
  }

  reset() {
  }

  private

  countDown() {
  }
}
