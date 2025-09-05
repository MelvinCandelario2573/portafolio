document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('open-modal');
  const closeModalBtn = document.getElementById('close-modal');

  openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('fecha').setAttribute('min', today);
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    resetAppointmentForm();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      resetAppointmentForm();
    }
  });

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('form-message');
    message.classList.remove('hidden');
    this.reset();
    setTimeout(() => {
      message.classList.add('hidden');
    }, 5000);
  });

  const appointmentForm = document.getElementById('appointment-form');
  const appointmentMessage = document.getElementById('appointment-message');

  appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    appointmentMessage.classList.remove('hidden');
    appointmentForm.reset();
    setTimeout(() => {
      appointmentMessage.classList.add('hidden');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }, 4000);
  });

  function resetAppointmentForm() {
    appointmentForm.reset();
    appointmentMessage.classList.add('hidden');
  }
});