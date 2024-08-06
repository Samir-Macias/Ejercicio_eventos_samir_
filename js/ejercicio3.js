// a. Crear un array donde vamos a guardar las notas
let notas = [
    { id: 1, titulo: 'Sacar la basura', texto: 'Mi mamá me va a retar si no lo hago', realizada: false },
    { id: 2, titulo: 'Comer', texto: 'Quedó comida de ayer', realizada: true }
  ];
  
  // c. Crear una variable idGlobal e inicializarla en el mismo valor del último id que creaste manualmente
  let idGlobal = 2;
  
  // Referencias a elementos del DOM
  let tituloInput = document.getElementById('tituloInput');
  let textoInput = document.getElementById('textoInput');
  let guardarNotaBtn = document.getElementById('guardarNotaBtn');
  let limpiarCamposBtn = document.getElementById('limpiarCamposBtn');
  let buscarInput = document.getElementById('buscarInput');
  let realizadasCheckbox = document.getElementById('realizadasCheckbox');
  let contenedorNotas = document.getElementById('contenedorNotas');
  
  // e. Crear una función que pinte las notas en forma de tarjetas dentro del div contenedor
  let pintarNotas = (notasFiltradas) => {
    contenedorNotas.innerHTML = '';
  
    if (notasFiltradas.length === 0) {
      contenedorNotas.innerHTML = '<p>No hay notas para mostrar</p>';
      return;
    }
  
    notasFiltradas.forEach(nota => {
      let notaDiv = document.createElement('div');
      notaDiv.classList.add('col-md-4', 'mb-3');
      notaDiv.innerHTML = `
        <div class="nota card">
          <div class="card-body">
            <h3 class="card-title">${nota.titulo}</h3>
            <p class="card-text">${nota.texto}</p>
            <button class="btn btn-danger btn-borrar" onclick="borrarNota(${nota.id})">Borrar nota</button>
            <div class="form-check mt-2">
              <input class="form-check-input" type="checkbox" onclick="marcarRealizada(${nota.id})" ${nota.realizada ? 'checked' : ''}>
              <label class="form-check-label">
                Realizada
              </label>
            </div>
          </div>
        </div>
      `;
      contenedorNotas.appendChild(notaDiv);
    });
  };
  
  // g. Crear una función agregarNota
  let agregarNota = (titulo, texto) => {
    idGlobal++;
    let nuevaNota = { id: idGlobal, titulo, texto, realizada: false };
    notas.push(nuevaNota);
    pintarNotas(notas);
  };
  
  // i. Crear la función borrarNota
  let borrarNota = (id) => {
    let index = notas.findIndex(nota => nota.id === id);
    if (index !== -1) {
      notas.splice(index, 1);
      pintarNotas(notas);
    }
  };
  
  // m. Crear la función marcarRealizada
  let marcarRealizada = (id) => {
    let nota = notas.find(nota => nota.id === id);
    if (nota) {
      nota.realizada = !nota.realizada;
      pintarNotas(notas);
    }
  };
  
  // p. Crear una función que filtre por el estado realizada
  let filtrarPorRealizadas = (notasArray) => {
    return notasArray.filter(nota => nota.realizada);
  };
  
  // q. Crear una función que filtre por texto
  let filtrarPorTexto = (notasArray, texto) => {
    return notasArray.filter(nota => 
      nota.titulo.toLowerCase().includes(texto.toLowerCase()) || 
      nota.texto.toLowerCase().includes(texto.toLowerCase())
    );
  };
  
  // Event listeners
  guardarNotaBtn.addEventListener('click', () => {
    let titulo = tituloInput.value.trim();
    let texto = textoInput.value.trim();
  
    if (titulo && texto) {
      agregarNota(titulo, texto);
      tituloInput.value = '';
      textoInput.value = '';
    }
  });
  
  limpiarCamposBtn.addEventListener('click', () => {
    tituloInput.value = '';
    textoInput.value = '';
  });
  
  buscarInput.addEventListener('input', () => {
    aplicarFiltros();
  });
  
  realizadasCheckbox.addEventListener('change', () => {
    aplicarFiltros();
  });
  
  let aplicarFiltros = () => {
    let notasFiltradas = [...notas];
  
    let texto = buscarInput.value.trim();
    if (texto) {
      notasFiltradas = filtrarPorTexto(notasFiltradas, texto);
    }
  
    if (realizadasCheckbox.checked) {
      notasFiltradas = filtrarPorRealizadas(notasFiltradas);
    }
  
    pintarNotas(notasFiltradas);
  };
  
  // Inicializar
  pintarNotas(notas);
  