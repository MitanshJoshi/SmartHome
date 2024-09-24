export interface SortStrategy {
    sort(data: number[]): number[];
}

export class QuickSort implements SortStrategy {
    sort(data: number[]): number[] {
        return data.sort((a, b) => a - b);
    }
}

export class BubbleSort implements SortStrategy {
    sort(data: number[]): number[] {
        const arr = [...data];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
}

export class Sorter {
    private strategy: SortStrategy;

    constructor(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortStrategy): void {
        this.strategy = strategy;
    }

    sort(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}
