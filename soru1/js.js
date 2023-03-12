function dogru(i) {
    document.getElementById("image" + i).src = "./img/onay.png"
}

function yanlis(i) {
    document.getElementById("image" + i).src = "./img/red.png"
}

function text() {
    var value = document.getElementById("textBox").value

    if (value == "köpek") {
        document.getElementById("image3").src = "./img/onay.png"
    } else {
        document.getElementById("image3").src = "./img/red.png"

    }
}