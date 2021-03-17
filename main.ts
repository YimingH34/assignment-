input.onButtonPressed(Button.A, function () {
    while (y <= 4) {
        while (x <= 4) {
            for (let index = 0; index < 5; index++) {
                led.plot(x, y)
                basic.pause(100)
                x += 1
            }
            x = 0
            y += 1
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
x = 0
y = 0
basic.forever(function () {
	
})
