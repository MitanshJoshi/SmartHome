import { Device } from './creational1_Device';

class DeviceNotifier extends Device { 
    private device: Device;

    constructor(device: Device) {
        super(device.id); 
        this.device = device;
    }

    operate(): void {
        this.device.operate();
        console.log(`Notification sent for Device ID: ${this.device.id}`);
    }
}

export { DeviceNotifier }; 
