// Desplazamiento suave para navegación (simulado si hay enlaces internos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Manejo de envío de formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const nombre = formData.get('nombre');
  const email = formData.get('email');
  const mensaje = formData.get('mensaje');

  // En un proyecto real, aquí enviarías los datos a un servidor
  alert(`Gracias, ${nombre}! Tu mensaje ha sido enviado desde ${email}. Mensaje: ${mensaje}`);

  // Limpiar el formulario
  this.reset();
});