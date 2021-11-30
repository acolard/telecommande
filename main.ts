input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("Recule")
    basic.showLeds(`
        . . . . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("Droite")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("Gauche")
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("Avance")
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("Stop")
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
radio.setGroup(69)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("Stop")
    }
})
