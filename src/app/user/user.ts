import {Component, Input, Output, EventEmitter} from '@angular/core';

type UserType = {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true }) user!: UserType;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
