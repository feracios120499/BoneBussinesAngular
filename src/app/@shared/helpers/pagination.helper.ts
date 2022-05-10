export class PaginationHelper<T> {
  private list: T[];
  private currentIndex = 0;
  constructor(list: T[]) {
    this.list = list;
  }

  startFrom(item?: T): void {
    if (item === undefined) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.list.indexOf(item);
    }
  }

  next(): T {
    if (this.currentIndex === this.list.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    return this.list[this.currentIndex];
  }

  previous(): T {
    if (this.currentIndex === 0) {
      this.currentIndex = this.list.length - 1;
    } else {
      this.currentIndex--;
    }
    return this.list[this.currentIndex];
  }
}
