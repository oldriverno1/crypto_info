import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  currentPage!: number;
  @Input() totalPages!: number;
  @Input() pageSlideSize!: number;
  @Output() private pageEvent = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
    this.initPage();
  }

  private initPage(): void {
    const previousPage: string | null = window.sessionStorage.getItem('pageIndex');
    this.currentPage = previousPage ? parseInt(previousPage) : 1;
    this.emitThisPage(this.currentPage);
  }

  getPagination(): number[] {
    return [...Array(this.pageSlideSize).keys()].map(
      (value) =>
        value + Math.floor((this.currentPage - 1) / this.pageSlideSize) * this.pageSlideSize + 1
    );
  }

  emitThisPage(pageIndex: number): void {
    this.currentPage = pageIndex;
    window.sessionStorage.setItem('pageIndex', pageIndex.toString());
    this.pageEvent.emit(this.currentPage);
  }
}
