input.onButtonPressed(Button.A, function () {
    mode = 1
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    JoyCar.hazardlights(ToggleSwitch.Off)
})
input.onButtonPressed(Button.AB, function () {
    mode = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    mode = 2
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    JoyCar.hazardlights(ToggleSwitch.Off)
})
let mode = 0
mode = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
JoyCar.hazardlights(ToggleSwitch.On)
basic.forever(function () {
    if (mode == 0) {
        JoyCar.stop(StopIntensity.Intense)
        JoyCar.brakelight(ToggleSwitch.On)
        JoyCar.hazardlights(ToggleSwitch.On)
    } else if (mode == 1) {
        if (JoyCar.sonar() < 20) {
            JoyCar.drive(FRDirection.Reverse, 50)
            JoyCar.reversinglight(ToggleSwitch.On)
        } else {
            JoyCar.stop(StopIntensity.Soft)
            JoyCar.reversinglight(ToggleSwitch.Off)
        }
    } else if (mode == 2) {
        if (JoyCar.sonar() > 40) {
            JoyCar.drive(FRDirection.Forward, 50)
            JoyCar.brakelight(ToggleSwitch.Off)
        } else {
            JoyCar.stop(StopIntensity.Soft)
            JoyCar.brakelight(ToggleSwitch.On)
        }
    } else {
        mode = 0
    }
})
