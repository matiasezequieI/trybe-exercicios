import Person from './Person';

export default class Student extends Person {
  private _enrollment: string = String();
  private _examsGrades: number[] = Array();
  private _assignmentsGrades: number[] = Array();

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    if (value.length < 16)
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if (value.length > 4)
      throw new Error(
        'A pessoa estudante deve possuir no máximo 4 notas de provas.'
      );
    this._examsGrades = value;
  }

  public get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }
  set assignmentsGrades(value: number[]) {
    if (value.length > 2)
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.'
      );

    this._assignmentsGrades = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );
    return `STU${randomStr}`;
  }

  sumGrades(): number {
    return [...this._assignmentsGrades, ...this._examsGrades].reduce(
      (previousGrade, grade) => {
        const sum = previousGrade + grade;
        return sum;
      }
    );
  }

  sumAverageGrades(): number {
    const totalOfGrades =
      this._assignmentsGrades.length + this._examsGrades.length;
    const sum = this.sumGrades();
    const average = sum / totalOfGrades;
    return average;
  }
}
