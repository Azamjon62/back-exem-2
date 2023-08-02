const teacher = document.getElementById('teacher');
const student = document.getElementById('student');
const group = document.getElementById('group');
const course = document.getElementById('course');
const newButtons = document.querySelectorAll('.new');
const closeButtons = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');


newButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  });
});

closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    const modal = closeButton.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
    }
  });
});

teacher.addEventListener('click', () => {
  teachermodal1.style.display = 'block';
  studentmodal2.style.display = 'none';
  groupmodal3.style.display = 'none';
  coursemodal4.style.display = 'none';
});

student.addEventListener('click', () => {
  groupmodal3.style.display = 'none';
  studentmodal2.style.display = 'block';
  teachermodal1.style.display = 'none';
  coursemodal4.style.display = 'none';
});

group.addEventListener('click', () => {
  groupmodal3.style.display = 'block';
  studentmodal2.style.display = 'none';
  teachermodal1.style.display = 'none';
  coursemodal4.style.display = 'none';
});

course.addEventListener('click', () => {
  coursemodal4.style.display = 'block';
  studentmodal2.style.display = 'none';
  teachermodal1.style.display = 'none';
  groupmodal3.style.display = 'none';
});