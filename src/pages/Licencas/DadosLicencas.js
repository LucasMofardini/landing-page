import fArrayDocs from '../../controller/controleDosDados';

const arrayDocs = [

    {
        nome: 'Praia Grande',
        valor: 'https://drive.google.com/file/d/1P01BZiLXVFfDyJqyLU7SQouLT3AmL0lp/view'
    },
    {
        nome: ' Alagoinha',
        valor: 'https://drive.google.com/file/d/1gpzsbMPE9szsI584IvcghgHKpilAZkgr/view'
    },
    {
        nome: ' Araçatuba',
        valor: 'https://drive.google.com/drive/folders/14ReZAwNwvFpVicpwyg_wQShyTkH0PJrk'
    }
];


const retornoMapDocs = fArrayDocs(arrayDocs)

console.log(fArrayDocs);
export default retornoMapDocs;