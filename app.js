// ==========================================
// DATOS DE LA MALLA (Estructura clara con objetos nombrados)
// ==========================================

const datosMalla = {
    semestres: {
        s1: [
            { nombre: "Introducción a la Microeconomía", codigo: "INTMIC",  creditos: 10, categoria: "PC",     preReqs: [],                          semestre: "I" },
            { nombre: "Matemática I",                    codigo: "MAT-I",   creditos: 12, categoria: "PC",     preReqs: [],                          semestre: "A" },
            { nombre: "Introducción a la Administración I", codigo: "INAD-I", creditos: 10, categoria: "PC",   preReqs: [],                          semestre: "I" },
            { nombre: "Habilidades de Aprendizaje I",    codigo: "HAB-I",   creditos: 5,  categoria: "PC",     preReqs: [],                          semestre: "I" },
            { nombre: "Ética General",                   codigo: "ETICG",   creditos: 5,  categoria: "PC",     preReqs: [],                          semestre: "I" },
            { nombre: "Habilidades de Aprendizaje II",   codigo: "HAB-II",  creditos: 3,  categoria: "PC",     preReqs: [],                          semestre: "I" }
        ],
        s2: [
            { nombre: "Introducción a la Macroeconomía", codigo: "INTMAC",  creditos: 10, categoria: "PC",     preReqs: [],                          semestre: "P" },
            { nombre: "Matemática II",                   codigo: "MAT-II",  creditos: 8,  categoria: "PC",     preReqs: ["MAT-I"],                   semestre: "A" },
            { nombre: "Introducción a la Administración II", codigo: "INAD-II", creditos: 8, categoria: "PC",  preReqs: ["INAD-I"],                  semestre: "P" },
            { nombre: "Contabilidad I",                  codigo: "CON-I",   creditos: 8,  categoria: "PC",     preReqs: [],                          semestre: "P" },
            { nombre: "Habilidades de Aprendizaje III",  codigo: "HAB-III", creditos: 3,  categoria: "PC",     preReqs: [],                          semestre: "P" },
            { nombre: "Optativo Formación General",      codigo: "OFG-1",   creditos: 5,  categoria: "OFC",    preReqs: [],                          semestre: "I" },
            { nombre: "Inglés I",                        codigo: "ING-I",   creditos: 10, categoria: "PC",     preReqs: [],                          semestre: "I" }
        ],
        s3: [
            { nombre: "Microeconomía I",                 codigo: "MICRO-I",  creditos: 8, categoria: "PC",     preReqs: ["MAT-II", "INTMIC"],        semestre: "I" },
            { nombre: "Matemática III",                  codigo: "MAT-III", creditos: 8,  categoria: "PC",     preReqs: ["MAT-II"],                  semestre: "A" },
            { nombre: "Pensamiento Estratégico",         codigo: "PENEST",  creditos: 7,  categoria: "PC",     preReqs: ["INAD-II"],                 semestre: "I" },
            { nombre: "Contabilidad II",                 codigo: "CON-II",  creditos: 8,  categoria: "PC",     preReqs: ["CON-I"],                   semestre: "I" },
            { nombre: "Tecnología de la Información",    codigo: "TEC",     creditos: 3,  categoria: "PC",     preReqs: [],                          semestre: "I" },
            { nombre: "Optativo Formación Teológica",    codigo: "OFT-1",   creditos: 5,  categoria: "OFC",    preReqs: [],                          semestre: "I" },
            { nombre: "Inglés II",                       codigo: "ING-II",  creditos: 10, categoria: "PC",     preReqs: ["ING-I"],                   semestre: "I" }
        ],
        s4: [
            { nombre: "Macroeconomía I",                 codigo: "MACRO-I", creditos: 8,  categoria: "PC",     preReqs: ["MAT-II", "INTMAC"],        semestre: "P" },
            { nombre: "Matemática IV",                   codigo: "MAT-IV",  creditos: 8,  categoria: "PC",     preReqs: ["MAT-III"],                 semestre: "P" },
            { nombre: "Personas y Organizaciones",       codigo: "PYO",     creditos: 7,  categoria: "PC",     preReqs: ["PENEST"],                  semestre: "P" },
            { nombre: "Estadística I",                   codigo: "EST-I",   creditos: 8,  categoria: "PC",     preReqs: ["MAT-II", "TEC"],           semestre: "P" },
            { nombre: "Marketing I",                     codigo: "MARK-I",  creditos: 8,  categoria: "PC",     preReqs: ["PENEST"],                  semestre: "P" },
            { nombre: "Optativo Formación General",      codigo: "OFG-2",   creditos: 5,  categoria: "OFC",    preReqs: [],                          semestre: "P" },
            { nombre: "Optativo Formación Teológica",    codigo: "OFT-2",   creditos: 5,  categoria: "OFC",    preReqs: [],                          semestre: "P" },
            { nombre: "Práctica Básica",                 codigo: "PB",      creditos: 13, categoria: "PB",     preReqs: ["INTMIC", "PENEST"],        semestre: "" }
        ],
        s5: [
            { nombre: "Microeconomía II",                codigo: "MICRO-II",  creditos: 10, categoria: "PC",   preReqs: ["MICRO-I"],                 semestre: "I" },
            { nombre: "Matemáticas para la Economía",    codigo: "MATPARECO", creditos: 8,  categoria: "ECONOM", preReqs: ["MAT-IV"],                semestre: "I" },
            { nombre: "Estadística II",                  codigo: "EST-II",  creditos: 8,  categoria: "PC",     preReqs: ["EST-I"],                   semestre: "I" },
            { nombre: "Gestión de Personas I",           codigo: "GESTPER-I", creditos: 8, categoria: "ADMIN", preReqs: ["PYO"],                     semestre: "I" },
            { nombre: "Finanzas I",                      codigo: "FIN-I",   creditos: 8,  categoria: "PC",     preReqs: ["MAT-II"],                  semestre: "I" },
            { nombre: "Habilidades de Aprendizaje IV",   codigo: "HAB-IV",  creditos: 5,  categoria: "PC",     preReqs: [],                          semestre: "I" },
            { nombre: "Inglés III",                      codigo: "ING-III", creditos: 10, categoria: "PC",     preReqs: ["ING-II"],                  semestre: "I" }
        ],
        s6: [
            { nombre: "Microeconomía III",               codigo: "MICRO-III",  creditos: 10, categoria: "ECONOM", preReqs: ["MICRO-II", "MATPARECO"], semestre: "P" },
            { nombre: "Macroeconomía II",                codigo: "MACRO-II",   creditos: 10, categoria: "PC",     preReqs: ["MACRO-I", "MAT-III"],    semestre: "P" },
            { nombre: "Econometría",                     codigo: "ECON",       creditos: 10, categoria: "ECONOM", preReqs: ["EST-II", "MAT-III"],     semestre: "P" },
            { nombre: "Finanzas Públicas",               codigo: "FINPUB",     creditos: 10, categoria: "ECONOM", preReqs: ["MICRO-I"],               semestre: "P" },
            { nombre: "Habilidades Profesionales I",     codigo: "HABPROF-I",  creditos: 5,  categoria: "PC",     preReqs: ["HAB-IV"],                semestre: "P" },
            { nombre: "Habilidades Profesionales II",    codigo: "HABPROF-II", creditos: 5,  categoria: "PC",     preReqs: ["HAB-IV"],                semestre: "P" },
            { nombre: "Contabilidad para la Gestión",    codigo: "CONPARGE",   creditos: 10, categoria: "ADMIN",  preReqs: ["CON-II"],                semestre: "P" },
            { nombre: "Econometría para la Gestión",     codigo: "ECONPARGE",  creditos: 10, categoria: "ADMIN",  preReqs: ["MAT-III", "EST-II"],     semestre: "P" },
            { nombre: "Marketing II",                    codigo: "MARK-II",    creditos: 10, categoria: "ADMIN",  preReqs: ["MARK-I"],                semestre: "P" }
        ],
        s7: [
            { nombre: "Organización Industrial",         codigo: "ORGAIN",     creditos: 10, categoria: "PC",     preReqs: ["MICRO-II"],              semestre: "I" },
            { nombre: "Macroeconomía III",               codigo: "MACRO-III",  creditos: 10, categoria: "ECONOM", preReqs: ["MACRO-II"],              semestre: "I" },
            { nombre: "Microeconometría",                codigo: "MIC-ECON",   creditos: 12, categoria: "ECONOM", preReqs: ["ECON"],                  semestre: "I" },
            { nombre: "Finanzas II",                     codigo: "FIN-II",     creditos: 12, categoria: "PC",     preReqs: ["FIN-I"],                 semestre: "I" },
            { nombre: "Habilidades Profesionales III",   codigo: "HABPROF-III",creditos: 5,  categoria: "PC",     preReqs: ["HAB-IV"],                semestre: "I" },
            { nombre: "Gestión de la Innovación",        codigo: "GESTIN",     creditos: 12, categoria: "ADMIN",  preReqs: ["PYO"],                   semestre: "" },
            { nombre: "Gestión de Personas II",          codigo: "GESTPER-II", creditos: 10, categoria: "ADMIN",  preReqs: ["GESTPER-I"],             semestre: "" }
        ],
        s8: [
            { nombre: "Teoría de Juegos",                codigo: "TEODJ",      creditos: 10, categoria: "ECONOM", preReqs: ["MICRO-II"],              semestre: "" },
            { nombre: "Economía Internacional",          codigo: "ECONO-INT",  creditos: 10, categoria: "ECONOM", preReqs: ["MACRO-II"],              semestre: "" },
            { nombre: "Macroeconometría",                codigo: "MAC-ECON",   creditos: 10, categoria: "ECONOM", preReqs: ["ECON"],                  semestre: "" },
            { nombre: "Evaluación de Proyectos",         codigo: "EVALDPR",    creditos: 10, categoria: "PC",     preReqs: ["PB", "FIN-II"],          semestre: "" },
            { nombre: "Optativo Formación Complementaria", codigo: "OFC-I",    creditos: 10, categoria: "OFC",    preReqs: [],                        semestre: "" },
            { nombre: "Gestión de Personas III",         codigo: "GESTPER-III",creditos: 10, categoria: "ADMIN",  preReqs: ["GESTPER-II"],            semestre: "" },
            { nombre: "Gestión de Operaciones",          codigo: "GESTOP",     creditos: 10, categoria: "ADMIN",  preReqs: ["EST-II"],                semestre: "" },
            { nombre: "Estrategia",                      codigo: "ESTRAT",     creditos: 12, categoria: "ADMIN",  preReqs: ["MARK-I"],                semestre: "" }
        ],
        s9: [
            { nombre: "Práctica Profesional",            codigo: "PP",         creditos: 18, categoria: "PP",     preReqs: ["PB", "HABPROF-III"],     semestre: "" },
            { nombre: "Regulación y Competencia",        codigo: "REYCO",      creditos: 12, categoria: "ECONOM", preReqs: [["ORGAIN", "TEODJ"]],     semestre: "" },
            { nombre: "Política Económica",              codigo: "POLECON",    creditos: 10, categoria: "ECONOM", preReqs: ["MACRO-II"],              semestre: "" },
            { nombre: "Desarrollo Económico",            codigo: "DECON",      creditos: 12, categoria: "ECONOM", preReqs: ["MIC-ECON"],              semestre: "" },
            { nombre: "Ética en los Negocios y la Economía", codigo: "ETICNYE",creditos: 8,  categoria: "PC",     preReqs: ["ETICG", "PB"],           semestre: "" },
            { nombre: "Emprendimiento",                  codigo: "EMP",        creditos: 12, categoria: "ADMIN",  preReqs: ["GESTIN"],                semestre: "" },
            { nombre: "Consultoría",                     codigo: "CONSULT",    creditos: 12, categoria: "ADMIN",  preReqs: ["GESTPER-II"],            semestre: "" },
            { nombre: "Juego de Negocios",               codigo: "JUEGDNEG",   creditos: 10, categoria: "ADMIN",  preReqs: ["ESTRAT"],                semestre: "" },
            { nombre: "Optativo Formación Complementaria",      codigo: "OFC-II",     creditos: 10, categoria: "OFC",    preReqs: [],                        semestre: "" }
        ],
        s10: [
            { nombre: "Taller de Titulación",            codigo: "TATITUT",    creditos: 20, categoria: "PC",     preReqs: [],                        semestre: "" },
            { nombre: "Habilidades Profesionales IV",    codigo: "HABPROF-IV",  creditos: 8,  categoria: "PC",     preReqs: ["HAB-IV"],                semestre: "" },
            { nombre: "Optativo Formación Complementaria", codigo: "OFC-III",  creditos: 10, categoria: "OFC",    preReqs: [],                        semestre: "" },
            { nombre: "Optativo Formación Complementaria", codigo: "OFC-IV",   creditos: 10, categoria: "OFC",    preReqs: [],                        semestre: "" }
        ]
    },

    categorias: {
        "PC":     { color: "var(--color-gris-pc)",      label: "Plan Común",              textColor: "#FFFFFF" },
        "PB":     { color: "var(--color-naranjo)",      label: "Práctica Básica",         textColor: "#FFFFFF" },
        "ECONOM": { color: "var(--color-morado-eco)",   label: "Mención Economía",        textColor: "#FFFFFF" },
        "ADMIN":  { color: "var(--color-amarillo-adm)", label: "Mención Administración",  textColor: "#000000" },
        "OFC":    { color: "var(--color-verde-opt)",    label: "Optativo",                textColor: "#000000" },
        "PP":     { color: "var(--color-naranjo)",      label: "Práctica Profesional",    textColor: "#FFFFFF" }
    }
};

// ==========================================
// ESTADO GLOBAL
// ==========================================

const estadoRamos = {};
let mencionSeleccionada = 'ADMIN';

// Diccionarios de búsqueda rápida: se construyen una sola vez
const diccionarioPreReqs = {};
const diccionarioNombres = {};

for (const ramos of Object.values(datosMalla.semestres)) {
    ramos.forEach(({ nombre, codigo, preReqs }) => {
        diccionarioPreReqs[codigo] = preReqs;
        diccionarioNombres[codigo] = nombre;
    });
}

// Créditos totales por mención (calculados una sola vez)
const totalCreditosPorMencion = {
    ADMIN:  calcularTotalCreditos('ADMIN'),
    ECONOM: calcularTotalCreditos('ECONOM')
};

function calcularTotalCreditos(mencion) {
    let total = 0;
    for (const ramos of Object.values(datosMalla.semestres)) {
        ramos.forEach(({ creditos, categoria }) => {
            if (categoria !== 'ECONOM' && categoria !== 'ADMIN') total += creditos;
            else if (categoria === mencion) total += creditos;
        });
    }
    return total;
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

function init() {
    cargarProgreso();
    renderLeyenda();
    renderMalla();
    
    document.getElementById('btn-admin').classList.toggle('activo', mencionSeleccionada === 'ADMIN');
    document.getElementById('btn-eco').classList.toggle('activo', mencionSeleccionada === 'ECONOM');

    actualizarEstados();
    actualizarContadorCreditos();
}


function renderLeyenda() {
    const contenedor = document.getElementById('leyenda');
    contenedor.innerHTML = ''; // Limpieza preventiva

    for (const [, cat] of Object.entries(datosMalla.categorias)) {
        const item = document.createElement('div');
        item.className = 'leyenda-item';
        item.innerHTML = `<div class="leyenda-color" style="background-color: ${cat.color};"></div> ${cat.label}`;
        contenedor.appendChild(item);
    }
}


function renderMalla() {
    const contenedor = document.getElementById('malla');
    contenedor.innerHTML = '';

    let numSemestre = 1;

    for (const [, ramos] of Object.entries(datosMalla.semestres)) {
        const col = document.createElement('div');
        col.className = 'semestre-col';

        const titulo = document.createElement('div');
        titulo.className = 'semestre-titulo';
        titulo.textContent = `Semestre ${numSemestre}`;
        titulo.style.cursor = 'pointer';
        titulo.title = 'Click para aprobar/desaprobar todos los ramos disponibles';
        titulo.addEventListener('click', () => aprobarSemestreMalla(ramos));
        col.appendChild(titulo);

        ramos.forEach(ramo => {
            const { nombre, codigo, creditos, categoria, preReqs } = ramo;

            // Inicializar estado si no existe
            if (estadoRamos[codigo] === undefined) {
                estadoRamos[codigo] = false;
            }

            const divRamo = crearElementoRamo(nombre, codigo, creditos, categoria, preReqs);

            // Ocultar ramos de la mención contraria con clase CSS (no eliminarlos del DOM)
            if (categoria === 'ECONOM') divRamo.classList.add('solo-econom');
            if (categoria === 'ADMIN')  divRamo.classList.add('solo-admin');

            col.appendChild(divRamo);
        });

        contenedor.appendChild(col);
        numSemestre++;
    }

    aplicarVisibilidadMencion();
}

function crearElementoRamo(nombre, codigo, creditos, categoria, preReqs) {
    const cat = datosMalla.categorias[categoria];
    const bgCreditos = cat.textColor === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';

    const div = document.createElement('div');
    div.className = 'ramo';
    div.id = `ramo-${codigo}`;
    div.style.backgroundColor = cat.color;
    div.style.color = cat.textColor;

    div.innerHTML = `
        <div class="ramo-creditos" style="background-color: ${bgCreditos}">${creditos} CR</div>
        <div class="ramo-nombre">${nombre}</div>
        <div class="ramo-codigo">${codigo}</div>
    `;

    div.addEventListener('click', () => toggleRamo(codigo, preReqs));
    return div;
}


function aplicarVisibilidadMencion() {
    document.querySelectorAll('.solo-econom').forEach(el => {
        el.style.display = mencionSeleccionada === 'ECONOM' ? '' : 'none';
    });
    document.querySelectorAll('.solo-admin').forEach(el => {
        el.style.display = mencionSeleccionada === 'ADMIN' ? '' : 'none';
    });
}

// ==========================================
// PREREQUISITOS
// ==========================================

function verificarPreReqs(reqs) {
    return reqs.every(req => {
        if (Array.isArray(req)) {
            return req.some(r => estadoRamos[r]); // Condición OR
        }
        return estadoRamos[req];
    });
}

function obtenerTextoFaltantes(preReqs) {
    const faltantes = [];
    preReqs.forEach(req => {
        if (Array.isArray(req)) {
            const algunAprobado = req.some(r => estadoRamos[r]);
            if (!algunAprobado) {
                faltantes.push(`(${req.map(r => diccionarioNombres[r]).join(' o ')})`);
            }
        } else {
            if (!estadoRamos[req]) {
                faltantes.push(diccionarioNombres[req]);
            }
        }
    });
    return faltantes;
}

// =============
// INTERACCIÓN
// =============

function toggleRamo(codigo, preReqs) {
    if (!estadoRamos[codigo] && !verificarPreReqs(preReqs)) {
        const faltantes = obtenerTextoFaltantes(preReqs);
        mostrarNotificacion(`Para tomar este curso necesitas aprobar:\n• ${faltantes.join('\n• ')}`);
        return;
    }

    estadoRamos[codigo] = !estadoRamos[codigo];

    if (!estadoRamos[codigo]) {
        desaprobarDependientes();
    }

    actualizarEstados();
    actualizarContadorCreditos();
    guardarProgreso();
}

function desaprobarDependientes() {
    let huboCambios;
    do {
        huboCambios = false;
        for (const codigo in estadoRamos) {
            if (estadoRamos[codigo] && !verificarPreReqs(diccionarioPreReqs[codigo])) {
                estadoRamos[codigo] = false;
                huboCambios = true;
            }
        }
    } while (huboCambios);
}

function actualizarEstados() {
    document.querySelectorAll('.ramo').forEach(el => {
        const codigo = el.id.replace('ramo-', '');

        el.classList.remove('estado-bloqueado', 'estado-disponible', 'estado-aprobado');

        if (estadoRamos[codigo]) {
            el.classList.add('estado-aprobado');
        } else if (verificarPreReqs(diccionarioPreReqs[codigo])) {
            el.classList.add('estado-disponible');
        } else {
            el.classList.add('estado-bloqueado');
        }
    });
}

// =====================
// CONTADOR DE CRÉDITOS 
// =====================

function actualizarContadorCreditos() {
    const contadorEl = document.getElementById('contador-creditos');
    if (!contadorEl) return;

    let creditosAprobados = 0;
    const total = totalCreditosPorMencion[mencionSeleccionada];

    for (const ramos of Object.values(datosMalla.semestres)) {
        ramos.forEach(({ codigo, creditos, categoria }) => {
            if (!estadoRamos[codigo]) return;
            // Contar solo ramos visibles en la mención activa
            if (categoria === 'ECONOM' && mencionSeleccionada !== 'ECONOM') return;
            if (categoria === 'ADMIN'  && mencionSeleccionada !== 'ADMIN')  return;
            creditosAprobados += creditos;
        });
    }

    const porcentaje = Math.round((creditosAprobados / total) * 100);
    contadorEl.innerHTML = `<span>${creditosAprobados} / ${total} créditos</span><span class="creditos-pct">${porcentaje}%</span>`;

    const barra = document.getElementById('barra-progreso');
    if (barra) barra.style.width = `${porcentaje}%`;
}

// ===================
// CAMBIO DE MENCIÓN 
// ===================

function cambiarMencion(nuevaMencion) {
    if (mencionSeleccionada === nuevaMencion) return;

    mencionSeleccionada = nuevaMencion;

    document.getElementById('btn-admin').classList.toggle('activo', nuevaMencion === 'ADMIN');
    document.getElementById('btn-eco').classList.toggle('activo', nuevaMencion === 'ECONOM');

    // No re-renderizamos — solo mostramos/ocultamos
    aplicarVisibilidadMencion();
    desaprobarDependientes();
    actualizarEstados();
    actualizarContadorCreditos();
    guardarProgreso();
}

// =====================
// TOAST NOTIFICACIONES
// =====================

let toastTimeout;

function mostrarNotificacion(mensaje) {
    const toast = document.getElementById('toast-notificacion');
    if (!toast) return;

    toast.innerText = mensaje;
    toast.classList.add('mostrar');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('mostrar'), 4000);
}

// ================
// (localStorage)
// ================

function guardarProgreso() {
    localStorage.setItem('mallaUAH_estadoRamos', JSON.stringify(estadoRamos));
    localStorage.setItem('mallaUAH_mencion', mencionSeleccionada);
}

function cargarProgreso() {
    const ramosGuardados  = localStorage.getItem('mallaUAH_estadoRamos');
    const mencionGuardada = localStorage.getItem('mallaUAH_mencion');
    const temaOscuro      = localStorage.getItem('mallaUAH_temaOscuro');

    if (ramosGuardados)  Object.assign(estadoRamos, JSON.parse(ramosGuardados));
    if (mencionGuardada) mencionSeleccionada = mencionGuardada;

    if (temaOscuro === 'true') {
        document.body.classList.add('dark-mode');
        const btn = document.getElementById('btn-dark');
        if (btn) btn.innerText = '☀️ Modo Claro';
    }
}

function toggleDarkMode() {
    const esDark = document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('btn-dark');
    btn.innerText = esDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    localStorage.setItem('mallaUAH_temaOscuro', esDark);
}

// ===============
// MENÚ LATERAL
// ===============

function toggleSidebar() {
    document.getElementById('sidebar-left').classList.toggle('activo');
    document.getElementById('sidebar-overlay').classList.toggle('activo');
}

function cambiarVista(vista) {
    toggleSidebar();
    document.querySelectorAll('.btn-nav').forEach(btn => btn.classList.remove('activo'));

    const vistas = ['malla', 'simulador', 'calendario', 'calculadora'];
    vistas.forEach(v => {
        document.getElementById(`vista-${v}`).style.display = 'none';
    });

    const indice = vistas.indexOf(vista);
    if (indice !== -1) {
        document.getElementById(`vista-${vista}`).style.display = 'block';
        document.querySelectorAll('.btn-nav')[indice].classList.add('activo');
    }

    if (vista === 'calculadora') {
        inicializarCalculadora();
    }

    if (vista === 'calendario') {
        inicializarCalendario();
    }
}

// =============
// CALCULADORA
// =============

let perfilesCalc = JSON.parse(localStorage.getItem('mallaUAH_calcPerfiles')) || {
    "Ramo General": { meta: 4.0, pesoExamen: 30, evaluaciones: [] }
};
let perfilActualCalc = localStorage.getItem('mallaUAH_calcPerfilActual') || "Ramo General";
let modoModalPerfil = 'crear';

// Sanity check
if (!perfilesCalc[perfilActualCalc]) {
    perfilActualCalc = Object.keys(perfilesCalc)[0];
}

function inicializarCalculadora() {
    renderizarTabs();
    renderizarPerfilCalc();
}


function renderizarTabs() {
    const contenedor = document.getElementById('calc-tabs');
    contenedor.innerHTML = '';

    Object.keys(perfilesCalc).forEach(nombre => {
        // Cambiamos 'button' por 'div' para evitar conflictos
        const tab = document.createElement('div');
        tab.className = 'calc-tab' + (nombre === perfilActualCalc ? ' activo' : '');
        tab.dataset.nombre = nombre;

        const labelSpan = document.createElement('span');
        labelSpan.textContent = nombre;
        labelSpan.style.flex = "1"; 
        labelSpan.style.marginRight = "10px";
        tab.appendChild(labelSpan);

        // Solo dejamos el botón de eliminar
        const acciones = document.createElement('span');
        acciones.className = 'calc-tab-acciones';
        acciones.innerHTML = `
            <button class="calc-tab-btn peligro" title="Eliminar" onclick="event.stopPropagation(); abrirModalEliminarPerfil()">✕</button>
        `;
        tab.appendChild(acciones);

        tab.addEventListener('click', () => {
            if (perfilActualCalc !== nombre) {
                perfilActualCalc = nombre;
                localStorage.setItem('mallaUAH_calcPerfilActual', perfilActualCalc);
                renderizarTabs();
                renderizarPerfilCalc();
            }
        });

        contenedor.appendChild(tab);
    });
}

// Mantener compatibilidad 
function actualizarSelectorPerfiles() {
    renderizarTabs();
}

// ---- MODALES DE PERFIL ----

function abrirModalCrearPerfil() {
    modoModalPerfil = 'crear';
    document.getElementById('modal-perfil-titulo').textContent = "Nuevo Curso";
    document.getElementById('input-nombre-perfil').value = "";
    document.getElementById('modal-perfil-calc').style.display = 'flex';
    document.getElementById('input-nombre-perfil').focus();
}

function abrirModalRenombrarPerfil() {
    modoModalPerfil = 'renombrar';
    document.getElementById('modal-perfil-titulo').textContent = "Renombrar Curso";
    document.getElementById('input-nombre-perfil').value = perfilActualCalc;
    document.getElementById('modal-perfil-calc').style.display = 'flex';
    document.getElementById('input-nombre-perfil').select();
}

function cerrarModalPerfil() {
    document.getElementById('modal-perfil-calc').style.display = 'none';
}

function guardarModalPerfil() {
    const nombreNuevo = document.getElementById('input-nombre-perfil').value.trim();

    if (!nombreNuevo) {
        mostrarNotificacion("⚠️ Debes ingresar un nombre.");
        return;
    }

    if (perfilesCalc[nombreNuevo] && nombreNuevo !== perfilActualCalc) {
        mostrarNotificacion("⚠️ Ya existe un Curso con ese nombre.");
        return;
    }

    if (modoModalPerfil === 'crear') {
        perfilesCalc[nombreNuevo] = { meta: 4.0, pesoExamen: 30, evaluaciones: [] };
        perfilActualCalc = nombreNuevo;
        mostrarNotificacion(`✅ Curso "${nombreNuevo}" creado.`);
    } else if (modoModalPerfil === 'renombrar' && nombreNuevo !== perfilActualCalc) {
        perfilesCalc[nombreNuevo] = perfilesCalc[perfilActualCalc];
        delete perfilesCalc[perfilActualCalc];
        perfilActualCalc = nombreNuevo;
        mostrarNotificacion("✅ Curso renombrado.");
    }

    guardarEnMemoriaCalc();
    actualizarSelectorPerfiles();
    renderizarPerfilCalc();
    cerrarModalPerfil();
}

function abrirModalEliminarPerfil() {
    document.getElementById('nombre-ramo-borrar').textContent = perfilActualCalc;
    document.getElementById('modal-eliminar-perfil').style.display = 'flex';
    }


function cerrarModalEliminarPerfil() {
    document.getElementById('modal-eliminar-perfil').style.display = 'none';
}

function confirmarEliminarPerfil() {
    delete perfilesCalc[perfilActualCalc];
    if (Object.keys(perfilesCalc).length === 0) {
        perfilesCalc = { "Ramo General": { meta: 4.0, pesoExamen: 30, evaluaciones: [] } };
    }
    perfilActualCalc = Object.keys(perfilesCalc)[0];

    guardarEnMemoriaCalc();
    actualizarSelectorPerfiles();
    renderizarPerfilCalc();
    cerrarModalEliminarPerfil();
    mostrarNotificacion("🗑️ Curso eliminado.");
}

function eliminarTodosLosCursos() {
    document.getElementById('modal-eliminar-todo').style.display = 'flex';
}

function cerrarModalEliminarTodo() {
    document.getElementById('modal-eliminar-todo').style.display = 'none';
}

function confirmarEliminarTodo() {
       
        perfilesCalc = {
            "Ramo General": { meta: 4.0, pesoExamen: 30, evaluaciones: [] }
        };
        
        perfilActualCalc = "Ramo General";
        guardarEnMemoriaCalc();
        actualizarSelectorPerfiles();
        renderizarPerfilCalc();
        cerrarModalEliminarTodo()
        mostrarNotificacion("🗑️ Todos los cursos han sido eliminados.");
        
    }


// ---- LÓGICA INTERNA DE CÁLCULO ----

function guardarEnMemoriaCalc() {
    localStorage.setItem('mallaUAH_calcPerfiles', JSON.stringify(perfilesCalc));
    localStorage.setItem('mallaUAH_calcPerfilActual', perfilActualCalc);
}

function guardarEstadoCalc() {
    if (!perfilesCalc[perfilActualCalc]) return;

    perfilesCalc[perfilActualCalc].meta        = parseFloat(document.getElementById('calc-meta').value)         || 4.0;
    perfilesCalc[perfilActualCalc].pesoExamen  = parseFloat(document.getElementById('calc-peso-examen').value)  || 0;

    const evaluaciones = [];
    document.querySelectorAll('.calc-fila').forEach(fila => {
        evaluaciones.push({
            id:     fila.id.replace('calc-fila-', ''),
            nombre: fila.querySelector('.val-nombre').value,
            nota:   fila.querySelector('.val-nota').value,
            peso:   fila.querySelector('.val-peso').value
        });
    });

    perfilesCalc[perfilActualCalc].evaluaciones = evaluaciones;
    guardarEnMemoriaCalc();
    calcularNotas();
}

function renderizarPerfilCalc() {
    const data = perfilesCalc[perfilActualCalc];
    document.getElementById('calc-meta').value         = data.meta;
    document.getElementById('calc-peso-examen').value  = data.pesoExamen;

    const contenedor = document.getElementById('calc-filas');
    contenedor.innerHTML = '';

    data.evaluaciones.forEach(ev => dibujarFilaEnPantalla(ev.id, ev.nombre, ev.nota, ev.peso));
    calcularNotas();
}

function agregarFilaCalc() {
    dibujarFilaEnPantalla(Date.now().toString(), "", "", "");
    guardarEstadoCalc();
}

function eliminarFilaCalc(id) {
    document.getElementById(`calc-fila-${id}`)?.remove();
    guardarEstadoCalc();
}

function dibujarFilaEnPantalla(id, nombre, nota, peso) {
    const contenedor = document.getElementById('calc-filas');
    const fila = document.createElement('div');
    fila.className = 'calc-fila';
    fila.id = `calc-fila-${id}`;
    fila.draggable = true;

    fila.innerHTML = `
        <span class="drag-handle" title="Arrastrar para reordenar">⠿</span>
        <input type="text"   class="input-calc val-nombre" placeholder="Evaluación (opcional)" maxlength="30" value="${nombre}" oninput="guardarEstadoCalc()">
        <input type="text"   class="input-calc val-nota"   placeholder="1.0–7.0" value="${nota}" oninput="formatearNota(event, this)">
        <input type="number" class="input-calc val-peso"   placeholder="%" step="1" min="0" max="100" value="${peso}" oninput="formatearPeso(this)">
        <button onclick="eliminarFilaCalc('${id}')" class="btn-eliminar-fila" title="Eliminar fila">✖</button>
    `;


    fila.querySelectorAll('input').forEach(input => {
        input.addEventListener('mousedown', e => e.stopPropagation());
    });

    const handle = fila.querySelector('.drag-handle');
    handle.addEventListener('mousedown', () => { fila.draggable = true; });

    fila.addEventListener('dragstart', e => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', fila.id);
        setTimeout(() => fila.classList.add('dragging'), 0);
    });

    fila.addEventListener('dragend', () => {
        fila.classList.remove('dragging');
        document.querySelectorAll('.calc-fila').forEach(f => f.classList.remove('drag-over'));
        guardarEstadoCalc();
    });

    fila.addEventListener('dragover', e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        document.querySelectorAll('.calc-fila').forEach(f => f.classList.remove('drag-over'));
        fila.classList.add('drag-over');
    });

    fila.addEventListener('drop', e => {
        e.preventDefault();
        const origenId = e.dataTransfer.getData('text/plain');
        const origen = document.getElementById(origenId);
        if (origen && origen !== fila) {
            contenedor.insertBefore(origen, fila);
        }
        fila.classList.remove('drag-over');
    });

    contenedor.appendChild(fila);
}

function formatearNota(e, input) {
    if (e.inputType === 'deleteContentBackward') {
        guardarEstadoCalc();
        return;
    }

    let val = input.value.replace(/[^0-9]/g, '');
    if (val.length > 2) val = val.substring(0, 2);
    if (val.length === 2) val = val.charAt(0) + '.' + val.charAt(1);

    input.value = val;
    guardarEstadoCalc();
}

function formatearPeso(input) {
    let val = input.value.replace(/[^0-9]/g, '');
    if (input.value !== "") {
        let val = parseFloat(input.value);
        if (val>100) input.value = 100
        if (val<0) input.value = 0
    }
}

function calcularNotas() {
    let sumaPesos = 0;
    let sumaPonderada = 0;
    const meta       = parseFloat(document.getElementById('calc-meta').value)        || 4.0;
    const pesoExamen = parseFloat(document.getElementById('calc-peso-examen').value) || 0;

    document.querySelectorAll('.calc-fila').forEach(fila => {
        const notaStr = fila.querySelector('.val-nota').value;
        const pesoStr = fila.querySelector('.val-peso').value;

        if (pesoStr !== "") {
            const peso = parseFloat(pesoStr);
            sumaPesos += peso;
            if (notaStr !== "" && peso > 0) {
                sumaPonderada += parseFloat(notaStr) * (peso / 100);
            }
        }
    });

    const elPeso    = document.getElementById('calc-suma-peso');
    const elProm    = document.getElementById('calc-promedio');
    const elMensaje = document.getElementById('calc-mensaje-final');

    elPeso.textContent = `${sumaPesos}%`;
    elPeso.style.color = (sumaPesos + pesoExamen) > 100 ? '#d9534f' : 'inherit';

    const promedioActual = sumaPesos > 0 ? sumaPonderada / (sumaPesos / 100) : 0;
    elProm.textContent = sumaPesos > 0 ? promedioActual.toFixed(2) : '-';
    
    elMensaje.className = '';
    elMensaje.style.cssText = '';

    if (sumaPesos === 0) {
        elMensaje.innerHTML = "Ingresa tus calificaciones y sus ponderaciones.";
        elMensaje.style.background = 'var(--bg-bloqueado)';
        return;
    }

    if ((sumaPesos + pesoExamen) > 100) {
        elMensaje.className = 'calc-alerta-roja';
        elMensaje.innerHTML = "⚠️ La suma de ponderaciones + examen supera el 100%.";
        return;
    }

    if ((sumaPesos + pesoExamen) < 100) {
        elMensaje.className = 'calc-alerta-naranja';
        const faltante = 100 - sumaPesos - pesoExamen;
        elMensaje.innerHTML = `Falta un <strong>${faltante}%</strong> de evaluaciones por registrar para calcular el examen.`;
        return;
    }

    if (pesoExamen === 0) {
        if (sumaPonderada >= meta) {
            elMensaje.className = 'calc-alerta-verde';
            elMensaje.innerHTML = `✅ Curso aprobado. Promedio final: <strong>${sumaPonderada.toFixed(2)}</strong>.`;
        } else {
            elMensaje.className = 'calc-alerta-roja';
            elMensaje.innerHTML = `❌ Curso reprobado. Promedio final: <strong>${sumaPonderada.toFixed(2)}</strong>.`;
        }
        return;
    }

    const notaNecesaria = (meta - sumaPonderada) / (pesoExamen / 100);

    if (notaNecesaria > 7.0) {
        elMensaje.className = 'calc-alerta-roja';
        elMensaje.innerHTML = `❌ Imposible. Necesitarías un <strong>${notaNecesaria.toFixed(2)}</strong> en el examen.`;
    } else if (notaNecesaria <= 1.0) {
        elMensaje.className = 'calc-alerta-verde';
        elMensaje.innerHTML = `✅ Aprobado asegurado. Con cualquier nota en el examen, pasas el curso.`;
    } else {
        elMensaje.className = 'calc-alerta-naranja';
        elMensaje.innerHTML = `Necesitas un <strong>${notaNecesaria.toFixed(2)}</strong> en el examen para aprobar.`;
    }
}

////////////////////////////////////////////////////
// simulador de créditos
///////////////////////////////////////////////////


let simFase = 1; // 1: Aprobados, 2: Cursando
let simAprobados = new Set();
let simCursando = new Set();

function inicializarSimulador() {
    if (simAprobados.size === 0 && simFase === 1) {
        for (const codigo in estadoRamos) {
            if (estadoRamos[codigo]) simAprobados.add(codigo);
        }
    }
    renderMallaSimulador();
    actualizarPanelCreditosSim();
}


function reiniciarSimulador() {
    const modal = document.getElementById('modal-reiniciar-simulador');
    if (modal) modal.style.display = 'flex';
}

function cerrarModalReiniciarSim() {
    const modal = document.getElementById('modal-reiniciar-simulador');
    if (modal) modal.style.display = 'none';
}

function confirmarReiniciarSim() {
    simFase = 1;
    simAprobados.clear();
    simCursando.clear();

    document.getElementById('sim-fase-1').classList.add('activa');
    document.getElementById('sim-fase-2').classList.remove('activa');
    document.getElementById('sim-panel-creditos').style.display = 'none';
    document.getElementById('sim-btn-fase').innerText = "Siguiente";

    renderMallaSimulador();
    actualizarPanelCreditosSim();
    cerrarModalReiniciarSim();
    mostrarNotificacion("🔄 Simulador restablecido.");
}


function avanzarFaseSimulador() {
    if (simFase === 1) {
        simFase = 2;
        document.getElementById('sim-fase-1').classList.remove('activa');
        document.getElementById('sim-fase-2').classList.add('activa');
        document.getElementById('sim-panel-creditos').style.display = 'block';
        document.getElementById('sim-btn-fase').innerText = "Volver";
    } else {
        simFase = 1;
        simCursando.clear(); 
        document.getElementById('sim-fase-2').classList.remove('activa');
        document.getElementById('sim-fase-1').classList.add('activa');
        document.getElementById('sim-panel-creditos').style.display = 'none';
        document.getElementById('sim-btn-fase').innerText = "Siguiente";
    }
    renderMallaSimulador();
    actualizarPanelCreditosSim();
}

function renderMallaSimulador() {
    const contenedor = document.getElementById('malla-simulador');
    contenedor.innerHTML = '';
    let numSemestre = 1;

    for (const [, ramos] of Object.entries(datosMalla.semestres)) {
        const col = document.createElement('div');
        col.className = 'semestre-col';
        const tituloSim = document.createElement('div');
        tituloSim.className = 'semestre-titulo';
        tituloSim.textContent = `Semestre ${numSemestre}`;
        tituloSim.style.cursor = 'pointer';
        tituloSim.title = 'Click para seleccionar todos los ramos disponibles';
        tituloSim.addEventListener('click', () => aprobarSemestreSimulador(ramos));
        col.appendChild(tituloSim);

        ramos.forEach(ramo => {
            const divRamo = crearElementoRamo(ramo.nombre, ramo.codigo, ramo.creditos, ramo.categoria, ramo.preReqs);
            divRamo.onclick = () => clickRamoSimulador(ramo.codigo, ramo.preReqs);
            col.appendChild(divRamo);
        });

        contenedor.appendChild(col);
        numSemestre++;
    }

    // Una vez construido el DOM, aplicar los estados con animación
    actualizarEstadosSim();
}

function actualizarEstadosSim() {
    document.querySelectorAll('#malla-simulador .ramo').forEach(el => {
        const codigo = el.id.replace('ramo-', '');

        el.classList.remove('estado-bloqueado', 'estado-disponible', 'estado-aprobado', 'estado-cursando');

        if (simAprobados.has(codigo)) {
            el.classList.add('estado-aprobado');
        } else if (simCursando.has(codigo)) {
            el.classList.add('estado-cursando');
        } else {
            const reqs = diccionarioPreReqs[codigo] || [];
            const cumple = reqs.every(req => {
                if (Array.isArray(req)) return req.some(r => simAprobados.has(r));
                return simAprobados.has(req);
            });
            el.classList.add(cumple ? 'estado-disponible' : 'estado-bloqueado');
        }
    });
}

function clickRamoSimulador(codigo, preReqs) {
    if (simFase === 1) {
        if (simAprobados.has(codigo)) {
            // Al desmarcar, hay que cascadear dependientes igual que en la malla
            simAprobados.delete(codigo);
            // Desaprobar dependientes que ya no cumplen prereqs
            let huboCambios;
            do {
                huboCambios = false;
                for (const cod of simAprobados) {
                    const reqs = diccionarioPreReqs[cod] || [];
                    const cumple = reqs.every(req => {
                        if (Array.isArray(req)) return req.some(r => simAprobados.has(r));
                        return simAprobados.has(req);
                    });
                    if (!cumple) {
                        simAprobados.delete(cod);
                        huboCambios = true;
                    }
                }
            } while (huboCambios);
        } else {
            // Verificar prereqs antes de aprobar
            const cumplePreReqs = preReqs.every(req => {
                if (Array.isArray(req)) return req.some(r => simAprobados.has(r));
                return simAprobados.has(req);
            });
            if (!cumplePreReqs) {
                mostrarNotificacion("No puedes marcar este curso como aprobado sin sus pre-requisitos.");
                return;
            }
            simAprobados.add(codigo);
        }
    } else if (simFase === 2) {
        if (simAprobados.has(codigo)) {
            mostrarNotificacion("Ya marcaste este curso como aprobado.");
            return;
        }

        const cumplePreReqs = preReqs.every(req => {
            if (Array.isArray(req)) return req.some(r => simAprobados.has(r));
            return simAprobados.has(req);
        });

        if (!cumplePreReqs) {
            mostrarNotificacion("No cumples los pre-requisitos según tus cursos aprobados.");
            return;
        }

        if (simCursando.has(codigo)) {
            simCursando.delete(codigo);
        } else {
            simCursando.add(codigo);
        }
        actualizarPanelCreditosSim();
    }
    actualizarEstadosSim();
    if (simFase === 2) actualizarPanelCreditosSim();
}

function actualizarPanelCreditosSim() {
    if (simFase !== 2) return;
    let creditosTotal = 0;

    simCursando.forEach(codigo => {
        for (const ramos of Object.values(datosMalla.semestres)) {
            const ramoObj = ramos.find(r => r.codigo === codigo);
            if (ramoObj) creditosTotal += ramoObj.creditos;
        }
    });

    document.getElementById('sim-total-creditos').innerText = creditosTotal;
    const msgBox = document.getElementById('sim-alerta-msg');

    msgBox.className = 'sim-alerta'; 

    if (creditosTotal === 0) {
        msgBox.innerHTML = "Selecciona ramos para armar tu semestre.";
        msgBox.classList.add('neutral');
    } else if (creditosTotal < 30) {
        msgBox.innerHTML = `⚠️ Tienes ${creditosTotal} créditos. El mínimo es 30. <br><span style="font-size:0.85em; font-weight:normal;">Te recomendamos tomar un OFG u OFT para rellenar.</span>`;
        msgBox.classList.add('peligro');
        msgBox.style.borderColor = "#E8B135";
        msgBox.style.color = "#E8B135";
    } else if (creditosTotal > 60) {
        msgBox.innerHTML = `🚨 Límite excedido (${creditosTotal}/60). <br><span style="font-size:0.85em; font-weight:normal;">Debes hacer una solicitud especial. Contacto: minostroza@uahurtado.cl</span>`;
        msgBox.classList.add('peligro');
    } else {
        msgBox.innerHTML = "✅ ¡Carga académica válida!";
        msgBox.classList.add('exito');
    }
}


const btnSimulador = document.querySelector('button[onclick="cambiarVista(\'simulador\')"]');
if (btnSimulador) {
    btnSimulador.addEventListener('click', inicializarSimulador);
}



async function exportarMalla() {
    const vista = document.getElementById('vista-malla');
    const contenedorScroll = document.getElementById('malla');
    const boton = document.getElementById('btn-exportar-malla');
    const textoOriginal = boton.innerText;
    boton.innerText = "⏳ Generando...";
    boton.disabled = true;

    const overflowOriginal = contenedorScroll.style.overflowX;
    contenedorScroll.style.overflowX = 'visible';

    try {
        const canvas = await html2canvas(vista, {
            scale: 2, 
            useCORS: true,
            backgroundColor: getComputedStyle(document.body).getPropertyValue('--bg-principal'),
            width: vista.scrollWidth,
            windowWidth: vista.scrollWidth,
            scrollX: 0
        });

        const link = document.createElement('a');
        link.download = `Mi-Malla-UAH-${mencionSeleccionada}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        
        mostrarNotificacion("✅ Malla guardada");
    } catch (err) {
        console.error("Error al exportar:", err);
        mostrarNotificacion("❌ Hubo un error al generar la imagen");
    } finally {
        // Devolver el scroll a la normalidad y restaurar el botón
        contenedorScroll.style.overflowX = overflowOriginal;
        boton.innerText = textoOriginal;
        boton.disabled = false;
    }
}

// ==========================================
// CALENDARIO Y PLANIFICADOR DE ESTUDIO
// ==========================================

let calEventos = JSON.parse(localStorage.getItem('mallaUAH_calEventos')) || [];
let calMetas = JSON.parse(localStorage.getItem('mallaUAH_calMetas')) || [];
let fechaVisualizacionCal = new Date(); // Fecha para controlar el mes que se está mirando

function inicializarCalendario() {
    renderizarCalendario();
    renderizarMetasCal();
}

// --- RENDERIZADO DEL CALENDARIO ---

function renderizarCalendario() {
    const grid = document.getElementById('cal-grid');
    grid.innerHTML = '';
    // Ahora siempre renderiza el mes completo, tanto en PC como en celular
    renderizarVistaMensual(grid); 
}

// --- VISTA MENSUAL ---
function renderizarVistaMensual(grid) {
    const mes = fechaVisualizacionCal.getMonth();
    const anio = fechaVisualizacionCal.getFullYear();
    const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    document.getElementById('cal-mes-anio-texto').textContent = `${mesesNombres[mes]} ${anio}`;

    let primerDia = new Date(anio, mes, 1).getDay() - 1;
    if (primerDia === -1) primerDia = 6; 
    const diasEnMes = new Date(anio, mes + 1, 0).getDate();
    const hoy = new Date();
    const esMesActual = hoy.getMonth() === mes && hoy.getFullYear() === anio;

    for (let i = 0; i < primerDia; i++) {
        const divVacio = document.createElement('div');
        divVacio.className = 'cal-dia vacio';
        grid.appendChild(divVacio);
    }

    for (let dia = 1; dia <= diasEnMes; dia++) {
        const fechaStr = `${anio}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
        const divDia = crearCeldaDia(dia, fechaStr, esMesActual && dia === hoy.getDate(), false);
        grid.appendChild(divDia);
    }
}

// --- CREADOR DE DÍAS (Unificado) ---
function crearCeldaDia(numero, fechaStr, esHoy, esMobile, nombreDia = "") {
    const div = document.createElement('div');
    div.className = 'cal-dia' + (esHoy ? ' hoy' : '');
    
    // Al presionar el día completo en móvil, abrimos el modal
    div.onclick = () => {
        const isMobile = window.innerWidth < 768;
        const eventosDia = calEventos.filter(e => e.fecha === fechaStr);
        if (isMobile && eventosDia.length > 0) {
            abrirModalDiaMobile(fechaStr, eventosDia);
        }
    };

    const headerHtml = esMobile 
        ? `<div style="display:flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: bold; color: var(--color-naranjo); font-size: 0.95em;">${nombreDia}</span>
            <span class="cal-numero" style="margin:0;">${numero}</span>
           </div>`
        : `<div class="cal-numero">${numero}</div>`;
        
    div.innerHTML = headerHtml;

    // Cargar los eventos
    const eventosDia = calEventos.filter(e => e.fecha === fechaStr);
    eventosDia.forEach(ev => {
        const evDiv = document.createElement('div');
        evDiv.className = `cal-evento ${ev.tipo}`;
        evDiv.textContent = ev.titulo;
        
        // En PC, presionar el evento dispara el borrado directamente.
        // Evitamos que se propague el clic hacia el día.
        evDiv.onclick = (e) => { 
            const isMobile = window.innerWidth < 768;
            if (!isMobile) {
                e.stopPropagation(); 
                eliminarEventoCal(ev.id); 
            }
        };
        div.appendChild(evDiv);
    });
    return div;
}

// --- NAVEGACIÓN ---
function cambiarMesCal(delta) {
    // Solo avanzamos o retrocedemos un mes, sin lógica extra
    fechaVisualizacionCal.setMonth(fechaVisualizacionCal.getMonth() + delta); 
    renderizarCalendario();
}

let idEventoABorrar = null;
let idMetaABorrar = null;

// --- GESTIÓN DE EVENTOS ---

function abrirModalEventoCal() {
    document.getElementById('input-cal-titulo').value = '';
    document.getElementById('input-cal-fecha').value = '';
    document.getElementById('modal-evento-cal').style.display = 'flex';
}

function cerrarModalEventoCal() {
    document.getElementById('modal-evento-cal').style.display = 'none';
}

function guardarEventoCal() {
    const titulo = document.getElementById('input-cal-titulo').value.trim();
    const fecha = document.getElementById('input-cal-fecha').value;
    const tipo = document.getElementById('input-cal-tipo').value;

    if (!titulo || !fecha) {
        mostrarNotificacion("⚠️ Debes ingresar un título y una fecha.");
        return;
    }

    const nuevoEvento = { id: Date.now().toString(), titulo, fecha, tipo };
    calEventos.push(nuevoEvento);
    
    localStorage.setItem('mallaUAH_calEventos', JSON.stringify(calEventos));
    renderizarCalendario();
    cerrarModalEventoCal();
    mostrarNotificacion("✅ Evento agregado al calendario.");
}

function eliminarEventoCal(id) {
    idEventoABorrar = id;
    document.getElementById('modal-confirmar-evento').style.display = 'flex';
}

function cerrarModalConfirmarEvento() {
    document.getElementById('modal-confirmar-evento').style.display = 'none';
    idEventoABorrar = null;
}

function confirmarBorradoEvento() {
    if (idEventoABorrar) {
        calEventos = calEventos.filter(e => e.id !== idEventoABorrar);
        localStorage.setItem('mallaUAH_calEventos', JSON.stringify(calEventos));
        renderizarCalendario();
        mostrarNotificacion("🗑️ Evento eliminado.");
    }
    cerrarModalConfirmarEvento();
}


// --- GESTIÓN DE METAS ---

function renderizarMetasCal() {
    const contenedor = document.getElementById('cal-lista-metas');
    contenedor.innerHTML = '';

    if (calMetas.length === 0) {
        contenedor.innerHTML = '<div style="font-size: 0.9em; color: var(--texto-bloqueado); text-align: center; padding: 20px;">No has definido metas aún.</div>';
        return;
    }

    calMetas.forEach(meta => {
        const div = document.createElement('div');
        div.className = `cal-meta-item ${meta.completada === true ? 'completada' : ''}`;
        
        div.innerHTML = `
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <input type="checkbox" class="check-meta" 
                    ${meta.completada === true ? 'checked' : ''} 
                    onclick="toggleMetaCompletada('${meta.id}')">
                <div style="flex: 1;">
                    <div class="cal-meta-horas">⏱️ ${meta.horas} hrs objetivo</div>
                    <div class="cal-meta-desc"><strong>Meta:</strong> ${meta.descripcion}</div>
                </div>
                <button class="btn-eliminar-meta" style="position: static;" onclick="eliminarMetaCal('${meta.id}')">✖</button>
            </div>
        `;
        contenedor.appendChild(div);
    });
}

function toggleMetaCompletada(id) {
    const meta = calMetas.find(m => m.id === id);
    if (meta) {
        meta.completada = !meta.completada;
        localStorage.setItem('mallaUAH_calMetas', JSON.stringify(calMetas));
        renderizarMetasCal(); 
        
        if (meta.completada) {
            mostrarNotificacion("🌟 ¡Objetivo cumplido! Sigue así!");
        }
    }
}

function abrirModalMetaCal() {
    document.getElementById('input-meta-horas').value = '';
    document.getElementById('input-meta-descripcion').value = '';
    document.getElementById('modal-meta-cal').style.display = 'flex';
}

function cerrarModalMetaCal() {
    document.getElementById('modal-meta-cal').style.display = 'none';
}

function guardarMetaCal() {
    const horas = document.getElementById('input-meta-horas').value;
    const descripcion = document.getElementById('input-meta-descripcion').value.trim();

    if (!horas || !descripcion) {
        mostrarNotificacion("⚠️ Completa los campos para establecer tu meta.");
        return;
    }

    const nuevaMeta = { 
        id: Date.now().toString(), 
        horas, 
        descripcion, 
        completada: false
    };
    
    calMetas.push(nuevaMeta);
    localStorage.setItem('mallaUAH_calMetas', JSON.stringify(calMetas));
    
    renderizarMetasCal();
    cerrarModalMetaCal();
    mostrarNotificacion("🎯 Meta de estudio guardada.");
}

function eliminarMetaCal(id) {
    idMetaABorrar = id;
    document.getElementById('modal-confirmar-meta').style.display = 'flex';
}

function cerrarModalConfirmarMeta() {
    document.getElementById('modal-confirmar-meta').style.display = 'none';
    idMetaABorrar = null;
}

function confirmarBorradoMeta() {
    if (idMetaABorrar) {
        calMetas = calMetas.filter(m => m.id !== idMetaABorrar);
        localStorage.setItem('mallaUAH_calMetas', JSON.stringify(calMetas));
        renderizarMetasCal();
        mostrarNotificacion("🗑️ Meta eliminada.");
    }
    cerrarModalConfirmarMeta();
}

/* BORRAR TODAS LAS METAS */

function abrirModalEliminarTodasMetas() {
    if (calMetas.length === 0) {
        mostrarNotificacion("⚠️ No tienes metas para eliminar.");
        return;
    }
    document.getElementById('modal-eliminar-todas-metas').style.display = 'flex';
}

function cerrarModalEliminarTodasMetas() {
    document.getElementById('modal-eliminar-todas-metas').style.display = 'none';
}

function confirmarEliminarTodasMetas() {
    calMetas = []; 
    localStorage.setItem('mallaUAH_calMetas', JSON.stringify(calMetas));
    renderizarMetasCal();
    cerrarModalEliminarTodasMetas();
    mostrarNotificacion("🗑️ Se han eliminado todas las metas.");
}

/* --- MODAL TELÉFONO --- */

function abrirModalDiaMobile(fechaStr, eventos) {
    const lista = document.getElementById('modal-dia-lista');
    lista.innerHTML = '';
    
    const [anio, mes, dia] = fechaStr.split('-');
    document.getElementById('modal-dia-titulo').textContent = `Eventos del ${dia}/${mes}`;

    eventos.forEach(ev => {
        let colorHex = '#ccc';
        if (ev.tipo === 'evaluacion') colorHex = '#d9534f'; 
        if (ev.tipo === 'estudio') colorHex = '#4a90e2';    
        if (ev.tipo === 'receso') colorHex = 'var(--color-verde-opt)'; 

        const item = document.createElement('div');
        item.className = 'modal-evento-item';
        item.innerHTML = `
            <div style="display: flex; align-items: center; overflow: hidden;">
                <div class="modal-evento-color" style="background-color: ${colorHex};"></div>
                <span style="font-size: 1em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: bold;">${ev.titulo}</span>
            </div>
            <button class="btn-eliminar-fila" style="width: auto; height: auto; padding: 5px 10px; margin-left: 10px;" onclick="eliminarEventoCal('${ev.id}'); cerrarModalDiaMobile();">✖</button>
        `;
        lista.appendChild(item);
    });

    document.getElementById('modal-dia-mobile').style.display = 'flex';
}

function cerrarModalDiaMobile() {
    document.getElementById('modal-dia-mobile').style.display = 'none';
}

/* ---------------------------------------------------------------*/

cargarColorPreferido();

function cambiarColorTema(nuevoColor) {
    if (!nuevoColor) return;
    document.documentElement.style.setProperty('--color-naranjo', nuevoColor);
    localStorage.setItem('colorPreferido', nuevoColor);
}

function cargarColorPreferido() {
    const colorGuardado = localStorage.getItem('colorPreferido');
    if (colorGuardado) {
        document.documentElement.style.setProperty('--color-naranjo', colorGuardado);
        
        
        const picker = document.getElementById('colorPicker');
        if (picker) picker.value = colorGuardado;
    }
}

/* ---------------------------------------------------------------*/

function aprobarSemestreMalla(ramos) {
    const ramosMencion = ramos.filter(r => {
        if (r.categoria === 'ECONOM' && mencionSeleccionada !== 'ECONOM') return false;
        if (r.categoria === 'ADMIN'  && mencionSeleccionada !== 'ADMIN')  return false;
        return true;
    });

    // Si todos los disponibles ya están aprobados, desaprobarlos todos
    const todosAprobados = ramosMencion.every(r => estadoRamos[r.codigo]);

    if (todosAprobados) {
        ramosMencion.forEach(r => {
            estadoRamos[r.codigo] = false;
        });
        desaprobarDependientes();
    } else {
        ramosMencion.forEach(r => {
            if (!estadoRamos[r.codigo] && verificarPreReqs(diccionarioPreReqs[r.codigo])) {
                estadoRamos[r.codigo] = true;
            }
        });
    }

    actualizarEstados();
    actualizarContadorCreditos();
    guardarProgreso();
}

function aprobarSemestreSimulador(ramos) {
    if (simFase === 1) {
        const todosAprobados = ramos.every(r => simAprobados.has(r.codigo));

        if (todosAprobados) {
            ramos.forEach(r => {
                simAprobados.delete(r.codigo);
            });
            // Cascada de dependientes
            let huboCambios;
            do {
                huboCambios = false;
                for (const cod of simAprobados) {
                    const reqs = diccionarioPreReqs[cod] || [];
                    const cumple = reqs.every(req => {
                        if (Array.isArray(req)) return req.some(r => simAprobados.has(r));
                        return simAprobados.has(req);
                    });
                    if (!cumple) { simAprobados.delete(cod); huboCambios = true; }
                }
            } while (huboCambios);
        } else {
            ramos.forEach(r => {
                const reqs = diccionarioPreReqs[r.codigo] || [];
                const cumple = reqs.every(req => {
                    if (Array.isArray(req)) return req.some(c => simAprobados.has(c));
                    return simAprobados.has(req);
                });
                if (cumple) simAprobados.add(r.codigo);
            });
        }
    } else if (simFase === 2) {
        const disponibles = ramos.filter(r => {
            if (simAprobados.has(r.codigo)) return false;
            const reqs = diccionarioPreReqs[r.codigo] || [];
            return reqs.every(req => {
                if (Array.isArray(req)) return req.some(c => simAprobados.has(c));
                return simAprobados.has(req);
            });
        });

        const todosCursando = disponibles.every(r => simCursando.has(r.codigo));
        disponibles.forEach(r => {
            todosCursando ? simCursando.delete(r.codigo) : simCursando.add(r.codigo);
        });
        actualizarPanelCreditosSim();
    }

    actualizarEstadosSim();
}


/*-----------------------------*/

const FORMSPREE_URL = 'https://formspree.io/f/mvzdplay'; // 👈 Reemplaza esto

function abrirModalBug() {
    document.getElementById('modal-bug').style.display = 'flex';
}

function cerrarModalBug() {
    document.getElementById('modal-bug').style.display = 'none';
    document.getElementById('bug-seccion').value = '';
    document.getElementById('bug-descripcion').value = '';
    document.getElementById('bug-email').value = '';
    document.getElementById('bug-mensaje').style.display = 'none';
}

async function enviarReporteBug() {
    const seccion = document.getElementById('bug-seccion').value;
    const descripcion = document.getElementById('bug-descripcion').value.trim();
    const email = document.getElementById('bug-email').value.trim();
    const msgEl = document.getElementById('bug-mensaje');

    if (!seccion || !descripcion) {
        msgEl.style.display = 'block';
        msgEl.style.background = '#fdecea';
        msgEl.style.color = '#d9534f';
        msgEl.textContent = 'Por favor completa la sección y la descripción.';
        return;
    }

    const btn = document.querySelector('#modal-bug .btn-accion:last-child');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    try {
        const res = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                seccion,
                descripcion,
                _replyto: email || 'Sin correo',
                _subject: `[Bug] ${seccion} - Portal UAH`
            })
        });

        if (res.ok) {
            msgEl.style.display = 'block';
            msgEl.style.background = '#eafaf1';
            msgEl.style.color = '#27ae60';
            msgEl.textContent = '✅ Reporte enviado. ¡Gracias!';
            btn.textContent = '¡Enviado!';
            setTimeout(cerrarModalBug, 2000);
        } else {
            throw new Error();
        }
    } catch {
        msgEl.style.display = 'block';
        msgEl.style.background = '#fdecea';
        msgEl.style.color = '#d9534f';
        msgEl.textContent = 'Error al enviar. Intenta de nuevo.';
        btn.textContent = 'Enviar Reporte';
        btn.disabled = false;
    }
}


window.addEventListener('DOMContentLoaded', init);
