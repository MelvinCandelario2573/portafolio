document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('open-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const appointmentForm = document.getElementById('appointment-form');
  const appointmentMessage = document.getElementById('appointment-message');
  const fechaInput = document.getElementById('fecha');

  // Establecer fecha mínima hoy
  const today = new Date().toISOString().split('T')[0];
  fechaInput.setAttribute('min', today);

  // Ocultar mensaje inicialmente
  appointmentMessage.style.display = 'none';

  openModalBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    resetForm();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      resetForm();
    }
  });

  appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    appointmentMessage.style.display = 'block';
    appointmentForm.reset();
    setTimeout(() => {
      appointmentMessage.style.display = 'none';
      modal.classList.remove('active');
    }, 4000);
  });

  function resetForm() {
    appointmentForm.reset();
    appointmentMessage.style.display = 'none';
  }
});
