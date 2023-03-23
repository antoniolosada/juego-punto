input.onButtonPressed(Button.A, function () {
    if (vertical > 0) {
        led.unplot(horizontal, vertical)
        vertical = vertical - 1
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (horizontal < 4) {
        led.unplot(horizontal, vertical)
        horizontal = horizontal + 1
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (horizontal > 0) {
        led.unplot(horizontal, vertical)
        horizontal = horizontal - 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (vertical < 4) {
        led.unplot(horizontal, vertical)
        vertical = vertical + 1
    }
})
let horizontal = 0
let vertical = 0
vertical = 0
horizontal = 0
let ph = randint(0, 4)
let pv = randint(0, 4)
led.plot(ph, pv)
basic.forever(function () {
    led.plot(horizontal, vertical)
    if (vertical == pv && horizontal == ph) {
        music.playMelody("D A B F G E C C5 ", 120)
        ph = randint(0, 4)
        pv = randint(0, 4)
        led.plot(ph, pv)
    }
})
