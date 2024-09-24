import { SmartHome } from './SmartHome';
import { TemperatureObserver } from './behavioral1_Observer';
import { PayPalAdapter, CreditCardAdapter } from './structural1_PaymentAdapter';
import { Sorter, QuickSort } from './behavioral2_Strategy';
import { Light, Thermostat } from './Devices';
import { DeviceNotifier } from './structural2_NotifierDecorator';

const home = new SmartHome();


home.addDevice('light', 1);
home.addDevice('thermostat', 2);


home.displayStatus();


const observer1 = new TemperatureObserver('1');
const observer2 = new TemperatureObserver('2');
home.registerTemperatureObserver(observer1);
home.registerTemperatureObserver(observer2);
home.updateTemperature(25);

console.log('Temperature History:', home.getTemperatureHistory());


home.scheduleDeviceAction(1, 'turn on', 5000); 
home.scheduleDeviceAction(2, 'regulate temperature', 3000); 


const payPalAdapter = new PayPalAdapter();
payPalAdapter.pay(100); 

const creditCardAdapter = new CreditCardAdapter();
creditCardAdapter.pay(150); 

const sorter = new Sorter(new QuickSort());
console.log('Sorted Array:', sorter.sort([5, 3, 8, 1]));

const notifiedLight = new DeviceNotifier(new Light(3));
notifiedLight.operate(); 
