import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  currentPage = 1;
  @Input() totalPages!: number;
  @Input() pageSlideSize!: number;
  @Output() private pageEvent = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  getPagination(): number[] {
    return [...Array(this.pageSlideSize).keys()].map(
      (value) =>
        value + Math.floor((this.currentPage - 1) / this.pageSlideSize) * this.pageSlideSize + 1
    );
  }

  emitThisPage(pageIndex: number): void {
    this.currentPage = pageIndex;
    this.pageEvent.emit(this.currentPage);
  }
}
