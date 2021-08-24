import { Curso } from "../src/curso";
import { Disciplina } from "../src/disciplina";
import { Professor } from "../src/professor";

describe("teste curso", () => {
  const NOME_CURSO_ADS = "ADS";
  const NOME_DISCIPLINA_WEB = "Web";
  const NOME_DISCIPLINA_ES = "Engenharia de Software";
  const NOME_PROFESSOR = "Jesiel Viana";
  const NOME_PROFESSOR2 = "Ainslan Rafael";
  const CH = 200;
  it("deve criar um curso com o nome ADS", () => {
    const curso = new Curso(NOME_CURSO_ADS);
    expect(curso.getNome()).toBe(NOME_CURSO_ADS);
  });

  it("deve adicionar uma disciplina ao curso", () => {
    const curso = new Curso(NOME_CURSO_ADS);
    const jesiel = new Professor(NOME_PROFESSOR);
    const web = new Disciplina(NOME_DISCIPLINA_WEB, CH, jesiel);
    curso.adicionarDisciplina(web);
    expect(curso.getDisciplinas().length).toBe(1);
    expect(curso.getDisciplinas()[0].getNome()).toBe(NOME_DISCIPLINA_WEB);
  });
  it("deve adicionar duas disciplinas ao curso", () => {
    const curso = new Curso(NOME_CURSO_ADS);
    const jesiel = new Professor(NOME_PROFESSOR);
    const ainslan = new Professor(NOME_PROFESSOR2);

    const web = new Disciplina(NOME_DISCIPLINA_WEB, CH, jesiel);
    const es = new Disciplina(NOME_DISCIPLINA_ES, CH, ainslan);

    curso.adicionarDisciplina(web);
    curso.adicionarDisciplina(es);
    expect(curso.getDisciplinas()[0].getNome()).toBe(NOME_DISCIPLINA_WEB);
    expect(curso.getDisciplinas()[1].getNome()).toBe(NOME_DISCIPLINA_ES);
    expect(curso.getDisciplinas().length).toBe(2);
  });
  it("Deve remover uma disciplina do curso", () => {
    const curso = new Curso(NOME_CURSO_ADS);
    const jesiel = new Professor(NOME_PROFESSOR);
    const web = new Disciplina(NOME_DISCIPLINA_WEB, CH, jesiel);

    curso.adicionarDisciplina(web);
    expect(curso.getDisciplinas().length).toBe(1);
    curso.removerDisciplina(web.getNome());
    expect(curso.getDisciplinas().length).toBe(0);
  });
});
