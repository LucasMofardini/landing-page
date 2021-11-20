import fArrayDocs from '../../controller/controleDosDados';

const arrayDocs = [
    {
        nome: 'Feira de Santana',
        valor: 'https://drive.google.com/drive/folders/19c_gG8POBMXP3LTTcpTgjgJthPk40r8p?usp=sharing'
    },
    {
        nome: 'Florianópolis',
        valor: 'https://drive.google.com/drive/folders/1q7mVD_YHQsZi3Hie_EfIc1JlWDQUB0db?usp=sharing'
    },
    {
        nome: 'Guarujá',
        valor: 'https://drive.google.com/drive/folders/1OzlBeGhPSpGHfmNTuu5wbsx1omFRkDDn?usp=sharing'
    },
    {
        nome: 'Itanhaém',
        valor: 'https://drive.google.com/drive/folders/19uhhHCThKliXN5Jq7KIVuLEm7Kg6KZiq?usp=sharing'
    }, {
        nome: 'Maceió',
        valor: 'https://drive.google.com/drive/folders/1mqaBHcxH1agZQGJJkhXNux9whNIUOq-5?usp=sharing'
    }, {
        nome: 'Porto Alegre',
        valor: 'https://drive.google.com/drive/folders/1yqWUj3YAyRZeOJ5YNg9wrDviq-UazaWx?usp=sharing'
    }, {
        nome: 'Salvador',
        valor: 'https://drive.google.com/drive/folders/1Pxat59Iqr-CDsHtBl8mMOIVyJScvSRN6?usp=sharing'
    }, {
        nome: 'Vespasiano',
        valor: 'https://drive.google.com/drive/folders/1pxiXaKyvbD54orPxV3i46HvGo53PAYfO?usp=sharing'
    },


];


const retornoMapDocs = fArrayDocs(arrayDocs)

export default retornoMapDocs;