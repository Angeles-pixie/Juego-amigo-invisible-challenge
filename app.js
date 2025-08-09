// Lista para ir guardando los nombres ingresados
let listaAmigos = [];

// Función para agregar un nombre nuevo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Si se deja en blanco avisa de ingresar un nombre
    if (nombre === "") {
        alert("Por favor, ingresa un nombre");
        return;
    }

    // Si el nombre ya fue ingresado también sale un aviso.
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    listaAmigos.push(nombre); //para agregar el amigo a la lista.
    mostrarLista(); //para mostrar en la pantalla cada nombre ingresado.
    input.value = ""; //vuelve la caja a ceero para ingresar mas nombres
}

// Función para mostrar la lista en el HTML
function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        ul.innerHTML += "<li>" + listaAmigos[i] + "</li>";
    }
}

// Función para sortear los amigos secretos.
// Para que se pueda hacer el sorteo pedir al menos 3 nombres..
function sortearAmigo() {
    if (listaAmigos.length < 3) {
        alert("Agrega al menos 3 personas para hacer el sorteo.");
        return;
    }

    // Creamos un duplicado de la lista para sortearla.
    let copia = listaAmigos.slice();

    // Aqui se mezclan los valores de la copia
    // No sé si este bien, pero probe con muchos nobres y al parecer los sortea bien.
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = copia[i];
        copia[i] = copia[j];
        copia[j] = temp;
    }

    // Para que nadie se toque a si mismo, hay que verificar que los valores sorteados no sean iguales
    for (let i = 0; i < listaAmigos.length; i++) {
        if (listaAmigos[i] === copia[i]) {
            return sortearAmigo(); //Reintenta si alguien se toca a sí mismo
        }
    }

    // El resultado se muestra en modo de lista con el participante y al lado quien le toca.
    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        ulResultado.innerHTML += "<li>" + listaAmigos[i] + " te toca: " + copia[i] + "</li>";
    }
    // El problema que veo, es que se muestran todos los resultados a la vez.
}