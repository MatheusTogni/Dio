
function calcularNivel(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas
    let nivel
    if (saldoDeVitorias <= 10) {
        nivel = "Ferro"
        console.log("O Heroi tem um saldo de:", saldoDeVitorias, "está no nível de", nivel)
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
        nivel = "Bronze"
        console.log("O Heroi tem um saldo de:", saldoDeVitorias, "está no nível de", nivel)
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        nivel = "Prata"
        console.log("O Heroi tem um saldo de:", saldoDeVitorias, "está no nível de", nivel)
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        nivel = "Ouro"
        console.log("O Heroi tem um saldo de:", saldoDeVitorias, "está no nível de", nivel)
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        nivel = "Diamante"
        console.log("O Heroi tem um saldo de:", saldoDeVitorias, "está no nível de", nivel)
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
        nivel = "Lendário"
        console.log("O Heroi tem um saldo de:", saldoDeVitorias, "está no nível de", nivel)
    } else if (saldoDeVitorias >= 101) {
        nivel = "Imortal"
        console.log("O Heroi tem um saldo de:", saldoDeVitorias, "está no nível de", nivel)
    }
}

calcularNivel(200, 25)