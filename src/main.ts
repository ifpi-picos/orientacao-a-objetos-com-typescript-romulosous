import { Curso } from "./curso";
import { Disciplina } from "./disciplina";

const web = new Disciplina("Programação para web", 80);
const es = new Disciplina("Engenharia de Software I", 60);
const ads = new Curso("ADS");

ads.adicionarDisciplina(web);
ads.adicionarDisciplina(es);

console.log("Curso ", ads.getNome());
console.log("Disciplinas ", ads.getDisciplinas());
