
const alumnos = [
    { nombre: "Ana", notas: [18, 15, 17] },
    { nombre: "Luis", notas: [14, 16, 13] },
    { nombre: "Carlos", notas: [20, 19, 18] },
    { nombre: "María", notas: [12, 14, 16] },
    { nombre: "Sofía", notas: [17, 18, 19] },
    { nombre: "Pedro", notas: [10, 11, 13] },
    { nombre: "Lucía", notas: [15, 17, 16] }
];


for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];

    console.log(`Alumno: ${alumno.nombre}; promedios: ${(alumno.notas[0]+alumno.notas[1]+alumno.notas[2]) / 3}`);
}