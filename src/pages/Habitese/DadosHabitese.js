import fArrayDocs from '../../controller/controleDosDados';

const arrayDocs = [

    {
        nome: ' Alagoinhas',
        valor: 'https://drive.google.com/file/d/1ifXFa2Iq21dREdH3tNHUewoFTVAWBE6B/view?usp=sharing'
    },
    {
        nome: '  Embu',
        valor: 'https://drive.google.com/file/d/1beeC6ihZljKMBblxd7JBD47pJV-9YEjS/view?usp=sharing'
    },
    {
        nome: '  Jacareí',
        valor: 'https://drive.google.com/file/d/1aV3qNbZrXa3jEy5Yt6XjvZa7alzK0xTr/view?usp=sharing'
    },
    {
        nome: '  Salvador',
        valor: 'https://drive.google.com/file/d/1EaBPIUBPMYCCJKsbOstGGeqvXDBp8iWN/view?usp=sharing'
    }
];


const retornoMapDocs = fArrayDocs(arrayDocs)

console.log(fArrayDocs);
export default retornoMapDocs;