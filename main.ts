led.enable(false)
let strip = neopixel.create(DigitalPin.P1, 18, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.rgb(25, 0, 5))
    strip.show()
    for (let index = 0; index <= 18; index++) {
        strip.rotate(1)
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(index - 1, neopixel.rgb(255, 0, 50))
        strip.setPixelColor(index + 1, neopixel.rgb(255, 0, 50))
        basic.pause(40)
        strip.show()
    }
})
