import { Disciplina } from "./disciplina";

export class Curso {
  private nome: string;
  private disciplinas: Disciplina[];
  constructor(nome: string) {
    this.nome = nome;
    this.disciplinas = [];
  }

  getNome() {
    return this.nome;
  }

  getDisciplinas() {
    return this.disciplinas;
  }

  removerDisciplina(disciplinaName: String) {
    const indexDisciplina = this.disciplinas.findIndex(
      (disciplina) => disciplina.getNome() === disciplinaName
    );
    if (indexDisciplina < 0) {
      return console.log("Disciplina Não cadastrada!");
    }
    this.disciplinas.splice(indexDisciplina, 1);
    return this.disciplinas;
  }
  adicionarDisciplina(disciplina: Disciplina) {
    this.disciplinas.push(disciplina);
  }
}
