import { Curso } from "./curso";
import { Disciplina } from "./disciplina";
import { Professor } from "./professor";

const ads = new Curso("ADS");

const jesiel = new Professor("Jesiel Viana");
const ainslan = new Professor("Ainslan Rafael");

const web = new Disciplina("Programação para web", 80, jesiel);
const es = new Disciplina("Engenharia de Software I", 60, jesiel);

ads.adicionarDisciplina(web);
ads.adicionarDisciplina(es);

console.log("Curso ", ads.getNome());
console.log("Disciplinas ", ads.getDisciplinas());
