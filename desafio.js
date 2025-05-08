const PrecoCombustivel = 6.12;
const GastoCombustivelPorKm = 1;
const DistanciaKmViagem = 100;

const LitrosConsumidos = DistanciaKmViagem / GastoCombustivelPorKm;
const ValorGasto = LitrosConsumidos * PrecoCombustivel;



console.log(ValorGasto.toFixed(2));