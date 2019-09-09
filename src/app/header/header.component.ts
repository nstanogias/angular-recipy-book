import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;

  constructor(private storageService: DataStorageService) { }

  ngOnInit() {
  }

  saveRecipes() {
    this.storageService.storeRecipes();
  }

  fetchRecipes() {
    this.storageService.fetchRecipes().subscribe();
  }
}
