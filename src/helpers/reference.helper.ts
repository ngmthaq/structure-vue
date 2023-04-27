export default class ReferenceHelper {
  public static range(start: number, end: number) {
    const array: Array<number> = [];
    if (start >= end) {
      for (let i = start; i <= end; i++) {
        array.push(i);
      }
    } else {
      for (let i = end; i >= start; i--) {
        array.push(i);
      }
    }

    return array;
  }
}
