import { DeviceFactory } from './creational2_DeviceFactory';
import { DeviceProxy } from './DeviceProxy';
import { TemperatureSubject, TemperatureObserver } from './behavioral1_Observer';
import { Light, Thermostat } from './Devices';
import { Logger } from './creational3_Logger';

export class SmartHome {
    private devices: any[] = [];
    private temperatureSubject: TemperatureSubject;

    constructor() {
        this.temperatureSubject = new TemperatureSubject();
    }

    addDevice(type: string, id: number): void {
        const device = DeviceFactory.createDevice(type, id);
        this.devices.push(device);
        console.log(`${type} ${id} added to system.`);
    }

    scheduleDeviceAction(deviceId: number, action: string, delay: number): void {
        const device = this.devices.find(d => d.id === deviceId);
        if (device) {
            setTimeout(() => {
                device.operate();
            }, delay);
            console.log(`Scheduled ${action} for device ${deviceId} in ${delay / 1000} seconds.`);
        } else {
            console.log(`Device ${deviceId} not found.`);
        }
    }
    
    getTemperatureHistory(): number[] {
        return this.temperatureSubject.getTemperatureHistory(); 
    }

    removeDevice(deviceId: number): void {
        const index = this.devices.findIndex(d => d.id === deviceId);
        if (index !== -1) {
            this.devices.splice(index, 1);
            console.log(`Device ${deviceId} removed from system.`);
        } else {
            console.log(`Device ${deviceId} not found.`);
        }
    }

    displayStatus(): void {
        console.log("Current device statuses:");
        this.devices.forEach(device => {
            device.operate();
        });
    }

    registerTemperatureObserver(observer: TemperatureObserver): void {
        this.temperatureSubject.registerObserver(observer);
    }

    updateTemperature(temp: number): void {
        this.temperatureSubject.setTemperature(temp);
        Logger.getInstance().log(`Temperature updated to ${temp}`);
    }
}
