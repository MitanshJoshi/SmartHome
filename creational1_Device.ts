export abstract class Device {
    constructor(public id: number) {}
    abstract operate(): void;

    logOperation(message: string): void {
        console.log(`[Device ${this.id}] ${message}`);
    }
}
