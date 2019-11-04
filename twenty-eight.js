let dung: game.LedSprite = null
let drop = false
function fall () {
    dung = game.createSprite(2, 0)
    dung.turn(Direction.Right, 90)
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        dung.move(1)
        basic.pause(500)
    }
    dung.delete()
    pins.analogWritePin(AnalogPin.P1, 1023)
}
function droped () {
    dung = game.createSprite(2, 2)
    dung.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        dung.move(1)
        basic.pause(300)
    }
    drop = false
    dung.delete()
    fall()
}
input.onButtonPressed(Button.A, function () {
    drop = true
})
basic.forever(function () {
    while (drop != true) {
        basic.showLeds(`
            . . . . .
            . . # . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # . . . #
            . . . . .
            `)
        basic.pause(50)
    }
    if (drop == true) {
        droped()
    }
})
