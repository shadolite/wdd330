
export default class Task {
  id: Date;
  description: string;
  isOpen: boolean;

  constructor(description: string) {
    this.id = new Date();
    this.description = description;
    this.isOpen = true;
  }
}