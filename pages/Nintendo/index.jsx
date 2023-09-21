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
  }
]

export default function Nintendo () {
  return (
    <Container 
      titulo="História do Nintendo Entertainment System" 
      console={require('../../assets/historia/console-nintendo.jpg')}
      historia={'Um dos consoles mais emblemáticos da Nintendo até hoje foi lançado em 1983 no Japão com o nome de Famicom (Family Computer), mas só em 1985 o console chegou aos Estados Unidos, com um visual totalmente reformulado e um novo nome, Nintendo Entertainment System (NES). \n\nO NES ajudou a revitalizar a indústria de vídeo games após a quebra da mesma devido a uma saturação de mercado com diversos consoles de baixa qualidade disponíveis. A nintendo mirou e acertou em cheio, trazendo com o NES um console barato, simples e de alta qualidade para as mãos dos consumidores. \n\nO console foi lançado no dia 15 de Julho de 1983 no japão, juntamente com os jogos Donkey Kong, Donkey Kong Jr. e Popey, todos feitos pela Nintendo para arcade. Ao final de 1984 o Famicom já era console mais vendido do país. O console chegou em Nova York, nos Estados Unidos, em 1985 mas o lançamento a nível nacional só ocorreu em Fevereiro de 1986, contando com 17 jogos disponíveis no lançamento.'}
      data={data}
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
