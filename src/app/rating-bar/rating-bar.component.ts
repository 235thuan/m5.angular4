import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

class IRatingUnit {
  value: any;
}

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.scss']
})
export class RatingBarComponent implements OnInit,
  OnChanges {
  @Input() max = 5;
  @Input() ratingValue = 5;
  @Input() showRatingValue = true;
  ratingUnits: Array<IRatingUnit> = [];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue)
    }
  }

  calculate(max,value){};
}
