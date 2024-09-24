export interface Observer {
    update(temp: number): void;
}

export class TemperatureObserver implements Observer {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    update(temp: number): void {
        console.log(`Observer ${this.id} notified. New temperature: ${temp}`);
    }
}

export class TemperatureSubject {
    private observers: Observer[] = [];
    private temperature: number=0;
    private history: number[] = []; 

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    setTemperature(temp: number): void {
        this.temperature = temp;
        this.history.push(temp); 
        this.notifyObservers();
    }

    getTemperatureHistory(): number[] {
        return this.history; 
    }

    private notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.temperature));
    }
}

