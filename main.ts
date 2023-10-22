radio.onReceivedValue(function (name, value) {
    if (name == "tune") {
        if (value == 1) {
            music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.InBackground)
        }
        if (value == 2) {
            music.play(music.stringPlayable("C5 E G D A C F D ", 120), music.PlaybackMode.InBackground)
        }
    }
})
radio.setGroup(2)
music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    . # # # .
    # . . . #
    `)
