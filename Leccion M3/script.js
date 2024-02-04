let CoupleNicolásAlejandra = {
    nicolas: { name: "Nicolás II" },
    alejandra: { name: "Alejandra" },
    Children: {
        Child1: { name: "Olga" },
        Child2: { name: "Tatiana" },
        Child3: { name: "María" }
    },
    pet: { name: "Joy" }
};

let subobjetosEliminados = [];

function startGame() {
    alert("¡Bienvenido al juego de Nicolás II y Alejandra!");

    let respuestasIncorrectas = 0;

    for (let i = 1; i <= 4; i++) {
        const pregunta = getQuestion(i);
        const opciones = getOptions(i);
        const respuesta = prompt(`${pregunta}\n${opciones.join('\n')}`);

        if (!checkAnswer(i, respuesta)) {
            alert("Respuesta incorrecta. Se mostrará la respuesta al final del juego.");
            deleteIncorrectAnswer(i);
            respuestasIncorrectas++;
        }
    }

    // Mostrar resultados al final del juego
    alert("Resultados del juego:\n" +
        `Respuestas incorrectas: ${respuestasIncorrectas}\n` +
        `Subobjetos eliminados: ${JSON.stringify(subobjetosEliminados, null, 2)}`);
}

function getQuestion(index) {
    switch (index) {
        case 1: return `¿Cuál fue el título oficial de Nicolás II? (Opciones: ${Object.values(CoupleNicolásAlejandra.Children.Child1).map(val => val.name).join(', ')})`;
        case 2: return `¿Cuál era el nombre completo de Alejandra? (Opciones: ${Object.values(CoupleNicolásAlejandra.Children.Child2).map(val => val.name).join(', ')})`;
        case 3: return `¿En qué año tuvo lugar la Revolución Rusa? (Opciones: ${Object.values(CoupleNicolásAlejandra.Children.Child3).map(val => val.name).join(', ')})`;
        case 4: return `¿Cuál fue el destino final de Nicolás II y su familia? (Opciones: ${Object.values(CoupleNicolásAlejandra.pet).map(val => val.name)})`;
    }
}

function getOptions(index) {
    switch (index) {
        case 1: return ['Emperador', 'Rey', 'Presidente'];
        case 2: return ['Alexandra Feodorovna', 'Anastasia Nikolaevna', 'Olga Nikolaevna'];
        case 3: return ['1917', '1905', '1921'];
        case 4: return ['Exilio en Europa', 'Fusilados en 1918', 'Huida a América'];
    }
}

function checkAnswer(index, respuesta) {
    switch (index) {
        case 1: return respuesta.toLowerCase() === 'emperador';
        case 2: return respuesta.toLowerCase() === 'alexandra feodorovna';
        case 3: return respuesta === '1917';
        case 4: return respuesta.toLowerCase() === 'fusilados en 1918';
    }
}

function deleteIncorrectAnswer(index) {
    switch (index) {
        case 1: subobjetosEliminados.push({ child1: CoupleNicolásAlejandra.Children.Child1 }); delete CoupleNicolásAlejandra.Children.Child1; break;
        case 2: subobjetosEliminados.push({ child2: CoupleNicolásAlejandra.Children.Child2 }); delete CoupleNicolásAlejandra.Children.Child2; break;
        case 3: subobjetosEliminados.push({ child3: CoupleNicolásAlejandra.Children.Child3 }); delete CoupleNicolásAlejandra.Children.Child3; break;
        case 4: subobjetosEliminados.push({ pet: CoupleNicolásAlejandra.pet }); delete CoupleNicolásAlejandra.pet; break;
    }
}

startGame(); // Iniciar el juego
