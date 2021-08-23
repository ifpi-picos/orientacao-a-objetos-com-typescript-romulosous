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
    // const index = this.disciplinas.findIndex(
    //   (disciplina) => disciplina.name === disciplinaName
    // );
  }
  adicionarDisciplina(disciplina: Disciplina) {
    this.disciplinas.push(disciplina);
  }
}
