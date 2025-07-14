
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
  {
    trimestre: "Tercer Trimestre",
    materias: [
      { nombre: "Inglés Instrumental I", codigo: "INI0304335" },
      { nombre: "Neuroanatomía I", codigo: "NEA0304335" },
      { nombre: "Psicología Social I", codigo: "PSS0304335", prelacion: "PSG0204335, TDS0204335" },
      { nombre: "Psicología General II", codigo: "PSG0304335", prelacion: "PSG0204335" },
      { nombre: "Estadística II", codigo: "EST0305335", prelacion: "EST0205335" }
    ]
  },
  {
    trimestre: "Cuarto Trimestre",
    materias: [
      { nombre: "Inglés Instrumental II", codigo: "INI0404335", prelacion: "INI0304335" },
      { nombre: "Neurofisiología", codigo: "NEF0404335", prelacion: "NEA0304335" },
      { nombre: "Psicología Social II", codigo: "PSS0404335", prelacion: "PSS0304335" },
      { nombre: "Psicología General III", codigo: "PSG0404335", prelacion: "PSG0304335" },
      { nombre: "Dinámica del Desarrollo", codigo: "DDD0402200", prelacion: "TDS0204335" },
      { nombre: "Bioestadística", codigo: "BIO0404335", prelacion: "EST0305335" }
    ]
  },
  {
    trimestre: "Quinto Trimestre",
    materias: [
      { nombre: "Inglés Instrumental III", codigo: "INI0504335", prelacion: "INI0404335" },
      { nombre: "Neurofisiopatología", codigo: "NFP0504335", prelacion: "NEF0404335" },
      { nombre: "Psicología del Desarrollo Humano I", codigo: "PDH0504335", prelacion: "PSS0404335" },
      { nombre: "Psicología de la Personalidad I", codigo: "PSP0504335", prelacion: "PSG0404335" },
      { nombre: "Psicología de Intervención Comunitaria", codigo: "PIC0504335", prelacion: "DDD0402200" },
      { nombre: "Electiva Socio Humanística", codigo: "ELECTIVA" }
    ]
  },
  {
    trimestre: "Sexto Trimestre",
    materias: [
      { nombre: "Psicopatología", codigo: "PSI0604335", prelacion: "NFP0504335" },
      { nombre: "Psicología del Desarrollo Humano II", codigo: "PDH0604335", prelacion: "PDH0504335" },
      { nombre: "Psicología de la Personalidad II", codigo: "PSP0604335", prelacion: "PSP0504335" },
      { nombre: "Psicometría I", codigo: "PSM0604335", prelacion: "BIO0404335" },
      { nombre: "Psicología del Aprendizaje", codigo: "PSA0604335", prelacion: "PSG0404335" }
    ]
  },
  {
    trimestre: "Séptimo Trimestre",
    materias: [
      { nombre: "Psicología del Deporte", codigo: "PSD0704335", prelacion: "NEF0404335" },
      { nombre: "Psicología Clínica", codigo: "PSC0704335", prelacion: "PSI0604335, PSP0604335" },
      { nombre: "Psicología Socioeducativa", codigo: "PSS0704335", prelacion: "PDH0604335" },
      { nombre: "Psicología Experimental I", codigo: "PEX0704335", prelacion: "BIO0404335" },
      { nombre: "Psicometría II", codigo: "PSM0704335", prelacion: "PSM0604335" },
      { nombre: "Electiva Socio Humanística", codigo: "ELECTIVA" }
    ]
  },
  {
    trimestre: "Octavo Trimestre",
    materias: [
      { nombre: "Salud Laboral", codigo: "SAL0804335", prelacion: "PSC0704335" },
      { nombre: "Desarrollo Social Contemporáneo", codigo: "DSC0804335", prelacion: "PSS0404335" },
      { nombre: "Criminología", codigo: "CRI0803335", prelacion: "PSC0704335" },
      { nombre: "Psicología Experimental II", codigo: "PEX0804335", prelacion: "PEX0704335" },
      { nombre: "Técnicas de Entrevistas", codigo: "TEE0804335", prelacion: "PSC0704335" },
      { nombre: "Psicología Clínica Infanto-Juvenil", codigo: "PCI0804335", prelacion: "PSC0704335" },
      { nombre: "Electiva Socio Humanística", codigo: "ELECTIVA" }
    ]
  },
  {
    trimestre: "Noveno Trimestre",
    materias: [
      { nombre: "Psicología Clínica del Adulto", codigo: "PCA0904335", prelacion: "PCI0804335" },
      { nombre: "Psicología Jurídica", codigo: "PSI0903335", prelacion: "CRI0803335" },
      { nombre: "Metodología de la Investigación", codigo: "MEI0904335", prelacion: "PEX0804335" },
      { nombre: "Teoría y Técnicas de Grupo I", codigo: "TTG0904335", prelacion: "TEE0804335" },
      { nombre: "Evaluación Psicológica I", codigo: "EVP0904335", prelacion: "PSM0704335" },
      { nombre: "Telepsicología", codigo: "TEL0904335", prelacion: "TEE0804335" }
    ]
  },
  {
    trimestre: "Décimo Trimestre",
    materias: [
      { nombre: "Desarrollo Comunitario", codigo: "DEC1004335", prelacion: "DSC0804335" },
      { nombre: "Primeros Auxilios Psicológicos", codigo: "PAP1004335", prelacion: "TEL0904335" },
      { nombre: "Teoría y Técnicas de Grupo II", codigo: "TTG1004335", prelacion: "TTG0904335" },
      { nombre: "Seminario Metodológico de Investigación", codigo: "SMI1004335", prelacion: "MEI0904335" },
      { nombre: "Práctica Profesional Infanto Juvenil", codigo: "PPI1007435", prelacion: "PCA0904335, TEE0804335" }
    ]
  },
  {
    trimestre: "Décimo Primer Trimestre",
    materias: [
      { nombre: "Práctica Profesional Adulto", codigo: "PPA1107435", prelacion: "PPI1007435" },
      { nombre: "Evaluación Psicológica II", codigo: "EVP1104335", prelacion: "EVP0904335" },
      { nombre: "Electiva Profesional", codigo: "ELECTIVA", prelacion: "153 U.C. aprobadas" },
      { nombre: "Trabajo de Investigación I", codigo: "TRI1106335", prelacion: "SMI1004335" }
    ]
  },
  {
    trimestre: "Décimo Segundo Trimestre",
    materias: [
      { nombre: "Trabajo de Investigación II", codigo: "TRI1208435", prelacion: "TRI1106335" },
      { nombre: "Práctica Profesional Comunitaria", codigo: "PPC1207435", prelacion: "PPA1107435, DEC1004335" },
      { nombre: "Electiva Profesional", codigo: "ELECTIVA", prelacion: "169 U.C. aprobadas" },
      { nombre: "Ética y Deontología Profesional", codigo: "EDP1203335", prelacion: "169 U.C. aprobadas" }
    ]
  }
];

let aprobadas = JSON.parse(localStorage.getItem("materiasAprobadas")) || [];

function guardarProgreso() {
  localStorage.setItem("materiasAprobadas", JSON.stringify(aprobadas));
}

function render() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";
  malla.forEach((trimestre) => {
    const div = document.createElement("div");
    div.className = "trimestre";
    div.innerHTML = `<h2>${trimestre.trimestre}</h2>`;
    trimestre.materias.forEach((materia) => {
      const matDiv = document.createElement("div");
      matDiv.className = "materia";
      const estaAprobada = aprobadas.includes(materia.codigo);
      const tienePrelaciones = materia.prelacion;
      const desbloqueada = !tienePrelaciones || materia.prelacion.split(", ").every(pre => aprobadas.includes(pre));
      if (estaAprobada) matDiv.classList.add("aprobada");
      else if (!desbloqueada) matDiv.classList.add("bloqueada");
      matDiv.innerHTML = `
        <strong>${materia.nombre}</strong><br>
        <span class="prelacion">Código: ${materia.codigo}</span>
        ${tienePrelaciones ? `<br><span class="prelacion">Prelación: ${materia.prelacion}</span>` : ""}
      `;
      if (desbloqueada) {
        matDiv.addEventListener("click", () => {
          if (aprobadas.includes(materia.codigo)) {
            aprobadas = aprobadas.filter(cod => cod !== materia.codigo);
          } else {
            aprobadas.push(materia.codigo);
          }
          guardarProgreso();
          render();
        });
      }
      div.appendChild(matDiv);
    });
    container.appendChild(div);
  });
}

render();
