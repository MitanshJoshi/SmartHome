# Smart Home System

## Overview
The Smart Home System is a console-based TypeScript project designed to simulate the control of smart devices, handle temperature updates, support multiple payment methods, and provide scheduling for device actions. This project demonstrates various design patterns such as Observer, Factory, Strategy, Adapter, and Decorator.

## Features

### 1. Device Management
- **Add Devices**: You can dynamically add devices like Lights and Thermostats to the system.
- **Remove Devices**: Devices can be removed from the system based on their ID.
- **Device Status Logging**: Every time a device operates, its status is logged to the console.

### 2. Temperature Management
- **Observer Pattern**: The system uses the Observer pattern to notify observers when the temperature changes.
- **Temperature History**: The system logs and provides a history of temperature changes.

### 3. Device Scheduling
- **Schedule Actions**: You can schedule actions for devices to operate at a specific time (e.g., turning on a light after 5 seconds).

### 4. Payment System
- **Adapter Pattern**: Supports multiple payment methods such as PayPal and Credit Cards using the Adapter pattern.
- **Flexible Payment Options**: The system allows you to add more payment methods without changing the main logic.

### 5. Sorting Algorithm
- **Strategy Pattern**: The system supports multiple sorting strategies (QuickSort, BubbleSort) and allows dynamic switching of the sorting algorithm.

### 6. Notifications
- **Decorator Pattern**: You can decorate devices with additional functionality, such as sending a notification every time a device operates.


### Detailed Functionality

#### 1. Device Management
- **File**: `Device.ts`, `Devices.ts`, `SmartHome.ts`
- The `Device` abstract class provides a blueprint for all devices with an `operate` method. Devices such as `Light` and `Thermostat` inherit from `Device` and provide their specific implementations.

#### 2. Temperature Management (Observer Pattern)
- **File**: `behavioral1_Observer.ts`
- The `TemperatureSubject` class manages the temperature and notifies registered observers when the temperature changes.
- The `TemperatureObserver` class listens for temperature changes and prints a message when notified.
- **Method**: `setTemperature(temp: number)` updates the temperature and notifies observers.

#### 3. Device Scheduling
- **File**: `SmartHome.ts`
- The `scheduleDeviceAction` method allows scheduling actions for devices to be executed after a specified delay (in milliseconds).




