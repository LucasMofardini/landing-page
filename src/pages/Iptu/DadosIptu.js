import fArrayDocs from '../../controller/controleDosDados';

const arrayDocs = [

    {
        nome: 'Curitiba ',
        valor: 'https://drive.google.com/file/d/1-KG89uCjCrxAtY5nmREXp5ib7vWVyppp/view?usp=sharing'
    },
    {
        nome: 'Guarujá',
        valor: 'https://drive.google.com/file/d/17W52olMWiSu0g7fpblrTJY-tLrKLw-kU/view?usp=sharing'
    },
    {
        nome: 'Itanhaém',
        valor: 'https://drive.google.com/file/d/1HA09IVYJwadrhHMLUQr98P-shgnE63xy/view?usp=sharing'
    },
    {
        nome: 'Santa Barbara do oeste',
        valor: 'https://drive.google.com/file/d/11DpLtxmZMjJCJ39NG2dn60BzfOOSpyUU/view?usp=sharing'
    },
    {
        nome: 'Porto Alegre',
        valor: 'https://drive.google.com/file/d/1sXlsmXOSfVeSqCFz6Wvyk3M0O9hwnJCv/view?usp=sharing'
    },
    {
        nome: 'Feira de Santana - venc 03-11-2021 - Parc 5',
        valor: 'https://drive.google.com/file/d/1a4Ex2LWZiwjO-5lEQXmAHBFCaRxOslmv/view?usp=sharing'
    },
    {
        nome: 'Feira de Santana - venc 09-11-2021',
        valor: 'https://drive.google.com/file/d/1nXOJUGYzzOx-KoWuvNn-l4BINq0YG-1p/view?usp=sharing'
    },
    {
        nome: 'Feira de Santana - venc 28-10-2021 - Parc 7',
        valor: 'https://drive.google.com/file/d/1PCeMXtziUQgiuPWXUX1dSSOaqfa9dLox/view?usp=sharing'
    },
    {
        nome: 'Feira de Santana - venc 30-07-2021 - Parc 3',
        valor: 'https://drive.google.com/file/d/1ewu85yInSQPPPS97KE2xfR_eWZFioFSx/view?usp=sharing'
    },
    {
        nome: 'Florianopolis - venc 05-11-2021 - Parc 9',
        valor: 'https://drive.google.com/file/d/121pE60SM2zfT_2Pac6hqkeFtSwty3xMx/view?usp=sharing'
    },
    {
        nome: 'Florianopolis - venc 05-08-2021 - Parc 6',
        valor: 'https://drive.google.com/file/d/12oPqdRZG0kSUgLpyT_ei0w9bv15wodVQ/view?usp=sharing'
    },
    {
        nome: 'Florianopolis - venc 05-10-2021 - Parc 8',
        valor: 'https://drive.google.com/file/d/14D9pf8EFZSHAx9URyJ6l_vZTr_HbTXSx/view?usp=sharing'
    },
    {
        nome: 'Florianopolis - venc 06-09-2021 - Parc 7',
        valor: 'https://drive.google.com/file/d/19mKVnytbIErVgQlONfXJMKg1mAMtNQxl/view?usp=sharing'
    },
    {
        nome: 'Florianopolis - venc 07-06-2021 - Parc 4',
        valor: 'https://drive.google.com/file/d/1g1y7Hx8gGCOs4Qq_quRsTN70WySBmUkD/view?usp=sharing'
    },
    {
        nome: 'Guaruja - venc 23-09-2021 - Parc 9',
        valor: 'https://drive.google.com/file/d/1vF06klgxVz7729Wrcfzn6RX0LUC3amci/view?usp=sharing'
    },
    {
        nome: 'Guaruja - venc 24-06-2021 - Parc 6',
        valor: 'https://drive.google.com/file/d/1FKJbKMg3sUCqn9auptDq9l7eoYMjUK0o/view?usp=sharing'
    },
    {
        nome: 'Guaruja - venc 25-11-2021 - Parc 11',
        valor: 'https://drive.google.com/file/d/1rjwwbhzlbyQu6pA06NR3A9zD9qbCpfjC/view?usp=sharing'
    },
    {
        nome: 'Guaruja - venc 26-08-2021 - Parc 8',
        valor: 'https://drive.google.com/file/d/1DuIeqWcMid23M0eJC4EN3CY7t0UxXG5l/view?usp=sharing'
    },
    {
        nome: 'Guaruja - venc 27-10-2021 - Parc 10',
        valor: 'https://drive.google.com/file/d/1_02AsJz513krVEPZuKnL75fQzwhZKfuu/view?usp=sharing'
    },
    {
        nome: 'Guaruja - venc 28-07-2021 - Parc 7',
        valor: 'https://drive.google.com/file/d/1P7zirUSdHHVKNuFAioZyrzdpMACfqebM/view?usp=sharing'
    },
    {
        nome: 'Guaruja - venc- 27-05-21 - Parc 5',
        valor: 'https://drive.google.com/file/d/1F0i_YwKa1AU_mx2rwrdsIfJKwdfQIIpA/view?usp=sharing'
    },
    {
        nome: 'Maceio -  venc 30-07-2021 - Parc 5',
        valor: 'https://drive.google.com/file/d/1rPOwc2kv_Cyss3dHpUT1X2qqoT9jzNSi/view?usp=sharing'
    },
    {
        nome: 'Maceio - venc  30-06-2021 - Parc 4',
        valor: 'https://drive.google.com/file/d/1WY62xSGE2PWGqZVpTAM5G2jabMx_xoIB/view?usp=sharing'
    },
    {
        nome: 'Maceio - venc 06-09-2021 - Parc 6',
        valor: 'https://drive.google.com/file/d/1IgHdbuWJdI2Bz8Lhlyi20qZ8L2aY5dew/view?usp=sharing'
    },
    {
        nome: 'Maceio - venc 30-09-2021 - Parc 7',
        valor: 'https://drive.google.com/file/d/152xPFURgjAYLJ4SKhX_ciqPNWjUgXK26/view?usp=sharing'
    },
    {
        nome: 'Maceio - venc 31-05-201 - Parc 3',
        valor: 'https://drive.google.com/file/d/1zneLklo1dANVv2euT-0qv9Mc2CXrSzMe/view?usp=sharing'
    },
    {
        nome: 'Vespasiano - venc 10-08-2021 - Parc 4',
        valor: 'https://drive.google.com/file/d/1v_fSZlNv3byt4i5qPtQq_TvLaWyUnBbH/view?usp=sharing'
    },
    {
        nome: 'Vespasiano - venc 10-09-21 - Parc 5',
        valor: 'https://drive.google.com/file/d/1Wrm7_kJqHm_PjzzIu8EJ7LPcKW8PzOK4/view?usp=sharing'
    }
];


const retornoMapDocs = fArrayDocs(arrayDocs)

console.log(fArrayDocs);
export default retornoMapDocs;