const nomeHeroi = "Kira";

let xp = 11000;

/*
    Níveis de XP:
    - Ferro: menos de 1.000
    - Bronze: entre 1.001 e 2.000
    - Prata: entre 2.001 e 5.000
    - Ouro: entre 5.001 e 7.000
    - Platina: entre 7.001 e 8.000
    - Ascendente: entre 8.001 e 9.000
    - Imortal: entre 9.001 e 10.000
    - Radiante: maior ou igual a 10.001
*/

switch (xp < 1000) {
    case true:
        console.log("O herói de nome " + nomeHeroi + " está no nível " + xp + " e é classificado como Ferro.");
        break;
    case false:
        switch (true) {
            case (xp >= 1001 && xp <= 2000):
                console.log("O herói de nome " + nomeHeroi + " está no nível " + xp + " e é classificado como Bronze.");
                break;
            case (xp >= 2001 && xp <= 5000):
                console.log("O herói de nome " + nomeHeroi + " está no nível " + xp + " e é classificado como Prata.");
                break;
            case (xp >= 5001 && xp <= 7000):
                console.log("O herói de nome " + nomeHeroi + " está no nível " + xp + " e é classificado como Ouro.");
                break;
            case (xp >= 7001 && xp <= 8000):
                console.log("O herói de nome " + nomeHeroi + " está no nível " + xp + " e é classificado como Platina.");
                break;
            case (xp >= 8001 && xp <= 9000):
                console.log("O herói de nome " + nomeHeroi + " está no nível " + xp + " e é classificado como Ascendente.");
                break;
            case (xp >= 9001 && xp <= 10000):
                console.log("O herói de nome " + nomeHeroi + " está no nível " + xp + " e é classificado como Imortal.");
                break;
            case (xp >= 10001):
                console.log("O herói de nome " + nomeHeroi + " está no nível " + xp + " e é classificado como Radiante.");
                break;
        }
}