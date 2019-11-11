let value1 = 0

basic.forever(function () {
    let run = new read()
    run.do_read()
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(100)
})


class read {
    constructor() { }
    do_read() {
        pins.digitalWritePin(DigitalPin.P12, 1);
        value1 = pins.analogReadPin(AnalogPin.P0);
        pins.digitalWritePin(DigitalPin.P12, 0);
        let i: number = pins.map(value1, 8, 815, 0, 4);
        this.fill_chart(i)
        this.make_chart(i)
    }
    fill_chart(r: number) {
        for (let i = r; i >= 0; i--) {
            this.make_chart(i)
        }

    }
    make_chart(r: number): void {
        led.plot(0, 4 - r);
        led.plot(1, 4 - r);
        led.plot(2, 4 - r);
        led.plot(3, 4 - r);
        led.plot(4, 4 - r);
    }

}
