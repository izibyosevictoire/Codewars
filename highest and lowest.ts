export class Kata {
    static highAndLow(numbers: string): string {
      const numbersArray: number[] = numbers.split(' ').map(Number);
      const highest: number = Math.max(...numbersArray);
      const lowest: number = Math.min(...numbersArray);
      return `${highest} ${lowest}`;
  }
      }