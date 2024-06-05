interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any 
}

interface Directors  extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
 (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firtName, lastName) => {
  const fchar = firtName.charAt(0).toUpperCase();
  return `${fchar}. ${lastName}`;
}

interface constructorClass {
    firstName: string,
    lastName: string
}

interface StudentClassInter {
    workOnHomework(): string,
    displayName(): string
}

class StudentClass implements StudentClassInter {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: constructorClass) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
      return 'Currently working';
  }

  displayName(): string {
      return this.firstName;
  }
}

const studentone = new StudentClass({ firstName: 'tarek', lastName: 'gamal' });
console.log(studentone.displayName());
console.log(studentone.workOnHomework());