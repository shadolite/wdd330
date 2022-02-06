import { Guid } from 'guid-ts';

export default class Task {
  id: Guid;
  description: string;
  isOpen: boolean;

  constructor(description: string) {
    this.id = Guid.newGuid();
    this.description = description;
    this.isOpen = true;
  }
}