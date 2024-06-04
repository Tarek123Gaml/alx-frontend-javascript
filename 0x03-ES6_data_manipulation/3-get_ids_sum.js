export default function getStudentIdsSum(students) {
  return students.reduce(
    (prev, cur) => prev.id || prev + cur.id,
    0
    );
}
