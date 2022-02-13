
export class Task {
  constructor(description) {
    this.id = new Date();
    this.description = description;
    this.isOpen = true;
  }
}