let value1 = 0 //value1 is the value of pin 0

basic.forever(function () { //forever 
    let run = new read() //creats new instance of read class
    run.do_read() //begins read cycle
    basic.pause(1000) //pause
    basic.clearScreen() //reeset for next reading
    basic.pause(100) //pause
})


class read {    //where the magic happens
    do_read() { //read and display
        pins.digitalWritePin(DigitalPin.P12, 1);//start mesuring
        value1 = pins.analogReadPin(AnalogPin.P0);//set value1 to analog values of pin 0
        pins.digitalWritePin(DigitalPin.P12, 0);//stops mesuring
        let i: number = pins.map(value1, 8, 815, 0, 4);//creats var i = a mesurment from 0 to 4
        this.fill_chart(i)//fills the chart with starting points
        this.make_chart(i)//fills the chart with mesurment
    }
    fill_chart(r: number) {
        for (let i = r; i >= 0; i--) {
            this.make_chart(i)//runs till chart is full
        }

    }
    make_chart(r: number): void {//fills chart
        led.plot(0, 4 - r);
        led.plot(1, 4 - r);
        led.plot(2, 4 - r);
        led.plot(3, 4 - r);
        led.plot(4, 4 - r);
    }

}
