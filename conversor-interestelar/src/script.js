var nome = "Clara";
var nomeEstrela = "Sirius";
var distanciaAnosLuz = 8.611;
var trilhoesDeQuilometros = 9.461;

// a variavel trilhoesDeQuilometros faz parte da fórmula para converter anos-luz para quilômetros

var conversaoQuilometros = (distanciaAnosLuz * trilhoesDeQuilometros).toFixed(2);

alert("Olá " + nome + "! " + nomeEstrela + " está a " + conversaoQuilometros + " trilhões de quilômetros de distância da terra. ");