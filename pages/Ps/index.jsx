import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Container from '../../components/Container';

const data = [
  {
    titulo: 'Especificações Técnicas',
    descricao: 'Confira a seguir as especificações técnicas do PlayStation, lançado em 1994',
    dataEsp: [
      {
        img: require('../../assets/especificacoes/cpu.png'),
        text1: 'Sony CXD8530BQ',
        text2: '33.8688 MHz'
      },
      {
          img: require('../../assets/especificacoes/gpu.png'),
          text1: 'Sony CXD8514Q',
          text2: '1MB VRAM'
      },
      {
          img: require('../../assets/especificacoes/ram.png'),
          text1: '2 MB EDO DRAM',
          text2: '33 MHz'
      },
      {
          img: require('../../assets/especificacoes/hdd.png'),
          text1: 'Drive de CD-ROM',
          text2: '660 MB / disco'
      }
    ]
  },
  {}
]

export default function Ps () {
  return (
    <Container 
      titulo="História do PlayStation" 
      console={require('../../assets/historia/console-playstation.jpg')}
      historia={'A Sony iniciou sua jornada no mundo dos consoles de vídeo games em 1994, com a chegada do PS1 ao Japão. A expansão não demorou e em Setembro de 1995 o aparelho chegou aos Estados Unidos. Naquela época, duas outras gigantes japonesas, Sega e Nintendo, dominavam o mercado de jogos eletrônicos, e ninguém esperava que um terceiro player pudesse mudar isso. \n\nQuando o PS1 foi anunciado nos Estados Unidos por U$$ 299, isso mexeu com o mercado já que alguns dias antes a sega havia anunciado o Saturn por $399, o que somado com os diversos problemas causados pelo lançamento as pressas do Saturn, consolidaram a posição do PlayStation no mercado de jogos. \n\nIsso tudo foi somado com o fato do Saturn ser focado em jogos 2D, enquanto o PS1 chegou com a proposta de ser um console totalmente em 3D, o que o tornava ainda mais interessante, por ser um console mais poderoso e mais barato que o seu concorrente.'}
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
