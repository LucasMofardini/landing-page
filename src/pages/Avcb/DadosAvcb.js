import fArrayDocs from '../../controller/controleDosDados';

const arrayDocs = [

    {
        nome: 'Araçatuba',
        valor: 'https://drive.google.com/file/d/1RWHSfcMLVQGp5m30qLY9GZ9iwg9JkWsq/view?usp=sharing'
    }, {
        nome: 'Barueri',
        valor: 'https://drive.google.com/file/d/1W7IrR-_v1nY99cj8SD0BrrAn7tZIexF2/view?usp=sharing'
    }, {
        nome: 'Florianópolis',
        valor: 'https://drive.google.com/file/d/1phU22tbuIouAkI_-xLX1fYpwe7fgL__s/view?usp=sharing'
    }, {
        nome: 'Guarujá',
        valor: 'https://drive.google.com/file/d/1uS32A--Xg4ecUdf_kSw_z3PCnN3iRK8q/view?usp=sharing'
    }, {
        nome: 'Guarulhos',
        valor: 'https://drive.google.com/file/d/1PuVFI87NpKdnuxNRPL-40LP2Ru8el3Ur/view?usp=sharing'
    }, {
        nome: 'Itaquera',
        valor: 'https://drive.google.com/file/d/1mmMequsdiv1xeXRVTA4pr0xlI0397q5A/view?usp=sharing'
    }, {
        nome: 'Jaguaré',
        valor: 'https://drive.google.com/file/d/1ScslsXcKQwTwAsUgkuz2L5xJo6h3vvEB/view?usp=sharing'
    }, {
        nome: 'Marília',
        valor: 'https://drive.google.com/file/d/1lE5jdrO2ErFoJ3XErUAWZLr0OomlltjK/view?usp=sharing'
    }, {
        nome: 'Passo Fundo',
        valor: 'https://drive.google.com/file/d/1ryZdR9UVkYtu0I6irk6VUUXNM0Z_k1Gh/view?usp=sharing'
    }, {
        nome: "Santa Bárbara D' Oeste",
        valor: 'https://drive.google.com/file/d/1eOJhfDXrawSREnmSXHmqVqEB0MwL6V1j/view?usp=sharing'
    }, {
        nome: 'Santo Amaro',
        valor: 'https://drive.google.com/file/d/1Gi0IgOm54vVVe-2SbVb5i01QkZJnR62M/view?usp=sharing'
    }, {
        nome: 'Sbc',
        valor: 'https://drive.google.com/file/d/1yReV26Aa8RwO-uD1ws_E0Z5F7oUtNCq0/view?usp=sharing'
    },
];


const retornoMapDocs = fArrayDocs(arrayDocs)

console.log(fArrayDocs);
export default retornoMapDocs;