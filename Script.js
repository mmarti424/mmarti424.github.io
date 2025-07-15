function aprobar(boton) {
  if (boton.classList.contains("aprobado")) return;
  
  boton.classList.add("aprobado");
  boton.disabled = true;

  // Buscar todos los botones que dependen de este
  document.querySelectorAll("button[data-req]").forEach(b => {
    const requisitos = b.getAttribute("data-req").split(",");
    const todosCumplidos = requisitos.every(id => {
      const prereq = document.getElementById(id);
      return prereq && prereq.classList.contains("aprobado");
    });

    if (todosCumplidos) {
      b.disabled = false;
    }
  });
}
