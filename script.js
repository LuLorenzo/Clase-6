const yerbas = [{ id: 1,  yerba: "rosamonte", precio: 154},
                {  id: 2,  yerba: "amanda", precio: 173},
                {  id: 3,  yerba: "chamigo"  , precio: 194},
                {  id: 4,  yerba: "cruz de malta" , precio: 212}];

const buscarAmanda = yerbas.find(yerba => yerba.id === 2); 
console.log(buscarAmanda);

const baratos = yerbas.filter(producto => producto.precio < 200); 
console.log(baratos);

const aumentos = yerbas.map(yerba => yerba.precio += 45);
console.log(aumentos);