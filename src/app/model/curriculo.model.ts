export class Curriculo {
  // 1. Atributos
  id: number = 0;
  nome: string = '';
  telefone: number = 0;
  email: string = '';
  experiencia: string = '';
  formacao: string = '';
  skills: string = '';

  // 2. Construtor
  constructor(
    id: number,
    nome: string,
    telefone: number,
    email: string,
    experiencia: string,
    formacao: string,
    skills: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.experiencia = experiencia;
    this.formacao = formacao;
    this.skills = skills;
  }

  // 3. métodos
  // Mapamento de Dados da AP (toMap e fromMap)
  // toMap: OBJ -> API´
  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      telefone: this.telefone,
      email: this.email,
      experiencia: this.experiencia,
      formacao: this.formacao,
      skills: this.skills,
    };
  }

  // FromMap : API -> OBJ
  fromMap(map: any): Curriculo {
    return new Curriculo(map.id,map.nome, map.telefone, map.email, map.experiencia, map.formacao, map.skills,
    );
  }
}
