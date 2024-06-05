interface Student {
  firstName: string,
  lastName: string, 
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Ahmed',
  lastName: 'Mohamed',
  age: 22,
  location: 'Cairo'
}

const student2: Student = {
  firstName: 'Mohamed',
  lastName: 'Ahmed',
  age: 25,
  location: 'Giza'
}

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
  const row = document.createElement('tr');
  const fnameCell = document.createElement('td');
  const locCell = document.createElement('td');

  fnameCell.textContent = student.firstName;
  locCell.textContent = student.location;

  row.appendChild(fnameCell);
  row.appendChild(locCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
