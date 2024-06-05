/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

var student1 = {
    firstName: 'Ahmed',
    lastName: 'Mohamed',
    age: 22,
    location: 'Cairo'
};
var student2 = {
    firstName: 'Mohamed',
    lastName: 'Ahmed',
    age: 25,
    location: 'Giza'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var fnameCell = document.createElement('td');
    var locCell = document.createElement('td');
    fnameCell.textContent = student.firstName;
    locCell.textContent = student.location;
    row.appendChild(fnameCell);
    row.appendChild(locCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXZhbmlsbGEtanMvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBzdHVkZW50MSA9IHtcbiAgICBmaXJzdE5hbWU6ICdBaG1lZCcsXG4gICAgbGFzdE5hbWU6ICdNb2hhbWVkJyxcbiAgICBhZ2U6IDIyLFxuICAgIGxvY2F0aW9uOiAnQ2Fpcm8nXG59O1xudmFyIHN0dWRlbnQyID0ge1xuICAgIGZpcnN0TmFtZTogJ01vaGFtZWQnLFxuICAgIGxhc3ROYW1lOiAnQWhtZWQnLFxuICAgIGFnZTogMjUsXG4gICAgbG9jYXRpb246ICdHaXphJ1xufTtcbnZhciBzdHVkZW50c0xpc3QgPSBbc3R1ZGVudDEsIHN0dWRlbnQyXTtcbnZhciB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG52YXIgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuc3R1ZGVudHNMaXN0LmZvckVhY2goZnVuY3Rpb24gKHN0dWRlbnQpIHtcbiAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICB2YXIgZm5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB2YXIgbG9jQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgZm5hbWVDZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5maXJzdE5hbWU7XG4gICAgbG9jQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQubG9jYXRpb247XG4gICAgcm93LmFwcGVuZENoaWxkKGZuYW1lQ2VsbCk7XG4gICAgcm93LmFwcGVuZENoaWxkKGxvY0NlbGwpO1xuICAgIHRib2R5LmFwcGVuZENoaWxkKHJvdyk7XG59KTtcbnRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9