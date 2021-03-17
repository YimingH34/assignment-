input.onButtonPressed(Button.A, function () {
    if (y <= 4) {
        for (let index = 0; index < 5; index++) {
            y += 1
            if (x <= 4) {
                for (let index = 0; index < 5; index++) {
                    x += 1
                    led.plot(x, y)
                    basic.pause(100)
                }
                x = -1
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
})
let y = 0
let x = 0
x = -1
y = -1
basic.forever(function () {
	
})
