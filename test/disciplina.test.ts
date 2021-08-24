import { Disciplina } from "../src/disciplina";
import { Professor } from "../src/professor";

describe("teste disciplina", () => {
  const NOME_DISCIPLINA = "web";
  const CH = 200;
  const NOME_PROFESSOR = "Jesiel Viana";
  it("deve criar uma disciplina com o nome web", () => {
    const jesiel = new Professor(NOME_PROFESSOR);
    const disciplina = new Disciplina(NOME_DISCIPLINA, CH, jesiel);
    expect(disciplina.getNome()).toBe(NOME_DISCIPLINA);
    expect(disciplina.getProfessor()).toBe(jesiel);
  });
});
