
var dnivalido = false
do {
    var numero = prompt("Introduce tu número de DNI (Los datos se eliminarán automáticamente después de este mensaje)")
    var letra = prompt("Introduce la letra de tú DNI en mayúsculas (Los datos se eliminarán automáticamente después de este mensaje): ")
    if (numero !== null && letra !== null && !isNaN(numero))
        if (numero > 0 && numero < 9999999999) {
            resto = numero % 23
            if (resto === 22) {
                if (letra == "E") {
                    dnivalido = true
                }
            } else if (resto === 21) {
                if (letra == "K") {
                    dnivalido = true
                }
            } else if (resto === 20) {
                if (letra == "C") {
                    dnivalido = true
                }
            } else if (resto === 19) {
                if (letra == "L") {
                    dnivalido = true
                }
            } else if (resto === 18) {
                if (letra == "H") {
                    dnivalido = true
                }
            } else if (resto === 17) {
                if (letra == "V") {
                    dnivalido = true
                }
            } else if (resto === 16) {
                if (letra == "Q") {
                    dnivalido = true
                }
            } else if (resto === 15) {
                if (letra == "S") {
                    dnivalido = true
                }
            } else if (resto === 14) {
                if (letra == "Z") {
                    dnivalido = true
                }
            } else if (resto === 13) {
                if (letra == "J") {
                    dnivalido = true
                }
            } else if (resto === 12) {
                if (letra == "N") {
                    dnivalido = true
                }
            } else if (resto === 11) {
                if (letra == "B") {
                    dnivalido = true
                }
            } else if (resto === 10) {
                if (letra == "X") {
                    dnivalido = true
                }
            } else if (resto === 9) {
                if (letra == "D") {
                    dnivalido = true
                }
            } else if (resto === 8) {
                if (letra == "P") {
                    dnivalido = true
                }
            } else if (resto === 7) {
                if (letra == "F") {
                    dnivalido = true
                }
            } else if (resto === 6) {
                if (letra == "Y") {
                    dnivalido = true
                }
            } else if (resto === 5) {
                if (letra == "M") {
                    dnivalido = true
                }
            } else if (resto === 4) {
                if (letra == "G") {
                    dnivalido = true
                }
            } else if (resto === 3) {
                if (letra == "A") {
                    dnivalido = true
                }
            } else if (resto === 2) {
                if (letra == "W") {
                    dnivalido = true
                }
            } else if (resto === 1) {
                if (letra == "R") {
                    dnivalido = true
                }
            } else if (resto === 0) {
                if (letra == "T") {
                    dnivalido = true
                }
            } else {
                alert("NO VÁLIDO")
            }
        }
} while (!dnivalido)