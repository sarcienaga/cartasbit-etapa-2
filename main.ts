/**
 * Esta programación es de la Placa satélite
 */
input.onButtonPressed(Button.A, function () {
    radio.sendString("Feliz")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Feliz") {
        basic.showIcon(IconNames.Happy)
    }
    if (receivedString == "Triste") {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Triste")
})
/**
 * Esta programación es de la Placa Maestra
 */
radio.setGroup(1)
