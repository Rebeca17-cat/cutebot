radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        cuteBot.motors(50, 50)
        music.play(music.stringPlayable("E B C5 A B G A F ", 380), music.PlaybackMode.UntilDone)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            # # . # #
            # . # . #
            . # # # .
            # . # . #
            # # . # #
            `)
        cuteBot.stopcar()
        music.play(music.stringPlayable("E D G F B A C5 B ", 380), music.PlaybackMode.UntilDone)
    }
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xb09eff)
})
radio.setGroup(6)
