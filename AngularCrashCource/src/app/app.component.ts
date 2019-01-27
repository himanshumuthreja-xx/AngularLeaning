import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];
  isSelected = false;
  canSave = false;
  task = {
    title: 'Review application',
    assignee: null
  };


  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  onRemove(index) {
    this.courses.splice(index, 1);
  }

  setFavourite() {
    this.isSelected = !this.isSelected;
  }

  setCanSave() {
    this.canSave = !this.canSave;
  }
}
