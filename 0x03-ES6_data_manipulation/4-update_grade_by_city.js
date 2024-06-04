export default function updateStudentGradeByCity(students, city, newgrades) {
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    const studentng = newgrades.filter((grade) => grade.studentId === student.id);
	  if (studentng.length > 0) {
	    return {
	      ...student,
	      grade: studentng[0].grade,
	    };
	  }
	  return {
	    ...student,
	    grade: 'N/A',
	  };
  });
}
