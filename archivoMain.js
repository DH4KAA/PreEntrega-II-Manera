let carrito = []
let precios = []
let games = [

    {
        game_name: 'Resident Evil',
        id: 1,
        genre: 'Survival Horror',
        price: 250,
    },
    {
        game_name: "Uncharted 3: Drake's deception",
        id: 2,
        genre: 'Accion-aventura',
        price: 1200,
    },
    {
        game_name: 'Devil May Cry 3',
        id: 3,
        genre: 'Hack n slash',
        price: 1300,
    },
    {
        game_name: 'Resident Evil 4',
        id: 4,
        genre: 'Survival Horror' + ', ' + 'Accion',
        price: 650,
    },
    {
        game_name: "God Of War",
        id: 5,
        genre: 'Hack n Slash' + ', ' + 'Puzzles',
        price: 6200,
    },
    {
        game_name: 'Call Of Dute: Modern Warfare 2',
        id: 6,
        genre: 'fps',
        price: 4500,
    },
    {
        game_name: 'The Witcher 3: Wild Hunt',
        id: 7,
        genre: 'Mundo abierto' + ', ' + 'Rpg',
        price: 950,
    },
    {
        game_name: "The Elders Scrolls V: Skyrim",
        id: 8,
        genre: 'Mundo abierto' + ', ' + 'Rpg',
        price: 1200,
    },
    {
        game_name: 'Hollow Knight',
        id: 9,
        genre: 'Metroidvania',
        price: 400,
    },
    {
        game_name: 'The Forest',
        id: 10,
        genre: 'Terror' + ', ' + 'Supervivencia',
        price: 600,
    },


]

let menu = [{
    id: 1,
    descripcion: 'Ver catalogo',



},
{
    id: 2,
    descripcion: 'Ver carrito',


},
{
    id: 3,
    descripcion: 'Comprar',


},
{
    id: 4,
    descripcion: 'Busqueda',


},
{
    id: 0,
    descripcion: 'Salir',


},

]

let menuBusqueda = [{
    id: 1,
    descripcion: 'Buscar por genero',
},
{
    id: 2,
    descripcion: 'Buscar por nombre'

},
{
    id: 0,
    descripcion: 'Salir'
},


]

function comprar() {
    // let sumaTotal = 0
    // sumaTotal = carrito.map(reduce(price));
    // alert('Su total a pagar es de $' + sumaTotal)
    let precios = carrito.map(x => x.price)
    let sumaTotal = 0
    for (let i = 0; i < precios.length; i++) {
        sumaTotal += precios[i]
    }
    alert('Usted debera abonar un total de $' + sumaTotal)


}


function verMenu() {
    let opcion = 1
    do {
        opcion = Number(prompt(menu.map(x => x.id + ' - ' + x.descripcion + '\n')))
        switch (opcion) {
            case 1:
                verCatalogo()

                break;
            case 2:
                verCarrito()

                break;
            case 3:
                comprar()

                break;
            case 4:
                busqueda()

                break;

            default:
                break;
        }


    } while (opcion != 0);

}

function busqueda() {
    let opcion = 1
    let busqueda = ''
    do {
        opcion = Number(prompt(menuBusqueda.map(x => x.id + ' - ' + x.descripcion + '\n')))
        let resultado = ''
        switch (opcion) {
            case 1:
                busqueda = prompt()
                resultado = games.filter(x => x.genre.toLowerCase().includes(busqueda.toLowerCase())).map(x => x.game_name + ', $' + x.price + ', Id:' + x.id)

                if (resultado.length > 0) {

                    alert(JSON.stringify(resultado + ' '))
                }

                else {
                    alert('El genero no se encuentra en el catalogo.')
                }
                break;
            case 2:
                busqueda = prompt()

                resultado = games.filter(x => x.game_name.toLowerCase().includes(busqueda.toLowerCase())).map(x => x.game_name + ', $' + x.price + ', id:' + x.id)

                if (resultado.length > 0) {

                    alert(JSON.stringify(resultado + ' '))
                }

                else {
                    alert('El juego no se encuentra en el catalogo.')
                }


                break;

            default:
                break;
        }

    } while (opcion != 0);
}

function verCarrito() {
    if (carrito.length < 1) {
        alert('El carrito se encuentra vacio')

    }
    else {
        alert(carrito.map(x => x.game_name + ', ' + '$' + x.price + '\n'))
    }

}

function agregarAlCarrito(id) {
    let juego = games.find(x => x.id === id)
    if (juego != undefined) {
        carrito.push(juego)
        alert('El juego se agrego correctamente.')
    }
    else if (id == 0) { return }
    else {
        alert('El juego no se encuentra en el catalogo.')
    }
}

function verCatalogo() {
    let opcion = 1
    do {
        opcion = Number(prompt(games.map(x => `${x.game_name}, Id: ${x.id}, -Genero: ${x.genre}, $${x.price}-\n`) + 'Seleccione la Id del producto que desee agregar al carrito o presione "0" para volver atras.'))
        agregarAlCarrito(opcion)



    } while (opcion != 0);
}
