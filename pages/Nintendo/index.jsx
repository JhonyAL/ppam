import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Container from '../../components/Container';

const data = [
  {
    titulo: 'Especificações Técnicas',
    descricao: 'Confira a seguir as especificações técnicas do NES, lançado em 1983',
    dataEsp: [
      {
        img: require('../../assets/especificacoes/cpu.png'),
        text1: 'Ricoh 2A03',
        text2: 'Processador 8-bit'
      },
      {
          img: require('../../assets/especificacoes/gpu.png'),
          text1: '52 Cores',
          text2: '256 x 240'
      },
      {
          img: require('../../assets/especificacoes/ram.png'),
          text1: '2KB RAM',
          text2: 'Memória'
      },
      {
          img: require('../../assets/especificacoes/hdd.png'),
          text1: 'Cartucho',
          text2: 'Proprietário'
      }
    ]
  },
  {
    titulo: 'Super Mario bros',
    descricao: 'Apesar de não estar disponível no lançamento do console, Super Mario Bros foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje. \n\nA franquia foi tão popular na época, que 3 jogos da série Super Mario ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto lugar. Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:',
    dataEsp: [
        {
            img: require('../../assets/jogo/sales.png'),
            text1: '40 milhões de cópias',
            text2: 'Até 1994'
        },
        {
            img: require('../../assets/jogo/money.png'),
            text1: 'US$ 72 milhões',
            text2: 'Primeiros 4 meses'
        },
        {
            img: require('../../assets/jogo/ranking.png'),
            text1: '95% de Aprovação',
            text2: 'Revista CVG'
        },
        {
            img: require('../../assets/jogo/disc.png'),
            text1: 'Remake em 1993',
            text2: 'Para o SNES'
        }
    ]
},
{
    titulo: 'Conclusão',
    descricao: 'A Nintendo é uma das empresas mais icônicas da indústria de jogos eletrônicos e até hoje atrai milhares de fãs com seus consoles e franquias como Super Mario, The Legend of Zelda, Pokémon, dentre muitas outras séries adoradas pelos fãs. A Nintendo conseguiu crescer em meio a crise dos vídeo games de 1983 e transformar o que parecia ser o fim da indústria em um recomeço extremamente lucrativo.'
}
]

export default function Nintendo () {
  return (
    <Container 
      titulo="História do Nintendo Entertainment System" 
      console={require('../../assets/historia/console-nintendo.jpg')}
      historia={'Um dos consoles mais emblemáticos da Nintendo até hoje foi lançado em 1983 no Japão com o nome de Famicom (Family Computer), mas só em 1985 o console chegou aos Estados Unidos, com um visual totalmente reformulado e um novo nome, Nintendo Entertainment System (NES). \n\nO NES ajudou a revitalizar a indústria de vídeo games após a quebra da mesma devido a uma saturação de mercado com diversos consoles de baixa qualidade disponíveis. A nintendo mirou e acertou em cheio, trazendo com o NES um console barato, simples e de alta qualidade para as mãos dos consumidores. \n\nO console foi lançado no dia 15 de Julho de 1983 no japão, juntamente com os jogos Donkey Kong, Donkey Kong Jr. e Popey, todos feitos pela Nintendo para arcade. Ao final de 1984 o Famicom já era console mais vendido do país. O console chegou em Nova York, nos Estados Unidos, em 1985 mas o lançamento a nível nacional só ocorreu em Fevereiro de 1986, contando com 17 jogos disponíveis no lançamento.'}
      data={data}
      color={'#FD0000'}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
