import { Component, OnInit } from '@angular/core';
import { originalRewards, placeholderImage } from 'src/app/models/rewards.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  showSortDrawer = false; // Controls the visibility of the Sort Drawer
  searchText = '';
  originalRewards = originalRewards;
  placeholderImage = placeholderImage;
  rewards = [...this.originalRewards];
  categories = ['Category 1', 'Category 2', 'Category 3'];
  filters = ['Filter 1', 'Filter 2'];
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor() { }

  ngOnInit(): void {
  }

  openSortDrawer() {
    this.showSortDrawer = true;
  }

  closeSortDrawer() {
    this.sortOrder = 'asc';
    this.showSortDrawer = false;
  }

  handleSort(order) {
    this.sortOrder = order;
    if (this.sortOrder === 'asc') {
      this.rewards.sort((a, b) => a.name.localeCompare(b.name)); // Sort A-Z
    } else if (this.sortOrder === 'desc') {
      this.rewards.sort((a, b) => b.name.localeCompare(a.name)); // Sort Z-A
    }
    this.showSortDrawer = false;
  }

  getRewardStatus(reward: any) {
    return reward.quantity > 0 ? 'In Stock' : 'Out of Stock';
  }

  filterRewards() {
    if (this.searchText.trim() === '') {
      // Reset to original rewards if search text is empty
      this.rewards = [...this.originalRewards];
    } else {
      // Filter rewards based on search text
      const searchTextLowerCase = this.searchText.toLowerCase();
      this.rewards = this.originalRewards.filter(reward =>
        reward.name.toLowerCase().includes(searchTextLowerCase)
      );
    }
  }
}