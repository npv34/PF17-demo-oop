class FlashLamp {
    constructor() {
        this.status = false;
        this.battery = null;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    light() {
        if (this.status) {
            document.getElementById('main').style.backgroundColor = "Yellow"
            this.battery.decreataseEnergy();
        } else {
            console.log("den dang tat vui long bat den");
        }
    }
}