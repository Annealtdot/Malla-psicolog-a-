const malla = [
  {
    trimestre: "Primer Trimestre",
    materias: [
      { nombre: "Gramática y Lectura", codigo: "GRL0104300" },
      { nombre: "Formación Ciudadana", codigo: "FOC0104300" },
      { nombre: "Técnicas de Estudio", codigo: "TEE0104300" },
      { nombre: "Introducción a la Psicología", codigo: "INP0103335" },
      { nombre: "Introducción a la Matemática", codigo: "INM0104300" },
      { nombre: "Introducción a la Tecnología de la Información", codigo: "ITI0104300" },
      { nombre: "Actividades Deportivas y Recreativas", codigo: "ADR0102100" }
    ]
  },
  {
    trimestre: "Segundo Trimestre",
    materias: [
      { nombre: "Identidad Regional", codigo: "IDR0204300" },
      { nombre: "Ambiente Sostenible", codigo: "AMS0204300" },
      { nombre: "Psicología General I", codigo: "PSG0204335", prelacion: "INP0103335" },
      { nombre: "Estadística I", codigo: "EST0205335", prelacion: "INM0104300" },
      { nombre: "Teoría del Desarrollo Social", codigo: "TDS0204335" }
    ]
  },
  // Puedes seguir agregando los demás trimestres aquí...
];

const container = document.getElementById("malla-container");

malla.forEach((trimestre) => {
  const div = document.createElement("div");
  div.className = "trimestre";
  div.innerHTML = `<h2>${trimestre.trimestre}</h2>`;
  
  trimestre.materias.forEach((materia) => {
    const matDiv = document.createElement("div");
    matDiv.className = "materia";
    matDiv.innerHTML = `<strong>${materia.nombre}</strong><br><span class="prelacion">Código: ${materia.codigo}</span>${
      materia.prelacion ? `<br><span class="prelacion">Prelación: ${materia.prelacion}</span>` : ""
    }`;
    div.appendChild(matDiv);
  });

  container.appendChild(div);
});
