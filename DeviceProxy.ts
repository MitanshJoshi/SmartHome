import { Device } from './creational1_Device';

export class DeviceProxy {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    control(action: string): void {
        console.log(`Performing action: ${action}`);
        this.device.operate();
    }
}
