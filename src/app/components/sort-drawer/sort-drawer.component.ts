import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-drawer',
  templateUrl: './sort-drawer.component.html',
  styleUrls: ['./sort-drawer.component.scss']
})
export class SortDrawerComponent implements OnInit {
  ngOnInit(): void { }

  @Input() sortOrder: string = 'asc';
  @Output() applyFilters = new EventEmitter<string>();
  @Output() closeDrawer = new EventEmitter<void>();

  resetAll(): void {
    this.sortOrder = 'asc';
    this.closeDrawer.emit();
  }

  sortValue(order: 'asc' | 'desc'): void {
    this.sortOrder = order;
  }

  apply(): void {
    this.applyFilters.emit(this.sortOrder);
  }

  closeSideDrawer(): void {
    this.closeDrawer.emit();
  }

}
