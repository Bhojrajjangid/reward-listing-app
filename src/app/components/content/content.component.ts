import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  showSortDrawer = false; // Controls the visibility of the Sort Drawer
  searchText = '';
  rewards = [
    {
      pk: 987,
      name: 'Reward Name A',
      points: 150,
      display_img_url: '',
      quantity: 14,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 10,
    },
    {
      pk: 988,
      name: 'Reward Name B',
      points: 200,
      display_img_url: 'https://via.placeholder.com/150',
      quantity: 0,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 5,
    },
    {
      pk: 989,
      name: 'Reward Name C',
      points: 120,
      display_img_url: 'https://via.placeholder.com/150',
      quantity: 8,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 10,
    },
    {
      pk: 990,
      name: 'Reward Name D',
      points: 180,
      display_img_url: '',
      quantity: 3,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 10,
    }
  ];

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
}