const inicio = () =>{
    const titulo = document.createElement('h2');
    const resumen = document.createElement('p');
    titulo.innerText= "Introducción";
    resumen.innerText = "NIA solo es una union de todo lo que se haga en el parcial referente a las inteligencias artificiales. Creada el 26/05/2024";

    document.querySelector('#con h2').replaceWith(titulo);
    document.querySelector('#con p').replaceWith(resumen);
}

const IA1 = () =>{
    const titulo = document.createElement('h2');
    const resumen = document.createElement('p');
    titulo.innerText= "Colores";
    resumen.innerText = "En este ejemplo, la inteligencia gracias a un pequeño entrenamineto de machine learning podra decirte si un color es oscuro o claro";

    document.querySelector('#con h2').replaceWith(titulo);
    document.querySelector('#con p').replaceWith(resumen);
}

const IA2 = () =>{
    const titulo = document.createElement('h2');
    const resumen = document.createElement('p');
    titulo.innerText= "Peso";
    resumen.innerText = "En este caso, la inteligencia te dira a partir de un peso dado por el usuario si tiene sobre peso, o si es un peso normal";

    document.querySelector('#con h2').replaceWith(titulo);
    document.querySelector('#con p').replaceWith(resumen);
}

const IA3 = () =>{
    const titulo = document.createElement('h2');
    const resumen = document.createElement('p');
    titulo.innerText= "Musica";
    resumen.innerText = "Con esta otra inteligencia podras saber que tipo de genero es la musica que el usuario coloque";

    document.querySelector('#con h2').replaceWith(titulo);
    document.querySelector('#con p').replaceWith(resumen);
}