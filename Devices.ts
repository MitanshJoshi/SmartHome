import { Device } from './creational1_Device';

export class Light extends Device {
    operate(): void {
        this.logOperation(`Light ${this.id} is operating.`);
    }
}

export class Thermostat extends Device {
    operate(): void {
        this.logOperation(`Thermostat ${this.id} is regulating temperature.`);
    }
}
