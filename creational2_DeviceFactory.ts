import { Device } from './creational1_Device';
import { Light, Thermostat } from './Devices';


export class DeviceFactory {
    static createDevice(type: string, id: number): Device {
        switch (type.toLowerCase()) {
            case 'light':
                return new Light(id);
            case 'thermostat':
                return new Thermostat(id);
            default:
                throw new Error('Unknown device type');
        }
    }
}
