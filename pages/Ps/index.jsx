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
  {
      titulo: 'Final Fantasy VII',
      descricao: 'Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido muito bem recebido pelo público e pela crítica especializada. \n\nFinal Fantasy VII foi um lançamento muito importante para a Sony, isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas a seguir:',
      dataEsp: [
          {
              img: require('../../assets/jogo/sales.png'),
              text1: '2 milhões de cópias',
              text2: 'Em 2 dias no Japão'
          },
          {
              img: require('../../assets/jogo/money.png'),
              text1: 'US$ 115 milhões',
              text2: 'Em 2 dias no Japão'
          },
          {
              img: require('../../assets/jogo/ranking.png'),
              text1: '92% de Aprovação',
              text2: 'Metacritic'
          },
          {
              img: require('../../assets/jogo/disc.png'),
              text1: 'Remake em 2020',
              text2: 'Para o PS4'
          }
      ]
  },
  {
      titulo: 'Conclusão',
      descricao: 'A Sony construiu com o PlayStation algo que para muita gente era impensável, não apenas por mostrar que era possível construir um produto barato e de qualidade, mas também por ter conseguido vencer uma das líderes de mercado na época de seu lançamento na briga pela fidelidade dos consumidores.'
  }
]

export default function Ps () {
  return (
    <Container 
      titulo="História do PlayStation" 
      console={require('../../assets/historia/console-playstation.jpg')}
      historia={'A Sony iniciou sua jornada no mundo dos consoles de vídeo games em 1994, com a chegada do PS1 ao Japão. A expansão não demorou e em Setembro de 1995 o aparelho chegou aos Estados Unidos. Naquela época, duas outras gigantes japonesas, Sega e Nintendo, dominavam o mercado de jogos eletrônicos, e ninguém esperava que um terceiro player pudesse mudar isso. \n\nQuando o PS1 foi anunciado nos Estados Unidos por U$$ 299, isso mexeu com o mercado já que alguns dias antes a sega havia anunciado o Saturn por $399, o que somado com os diversos problemas causados pelo lançamento as pressas do Saturn, consolidaram a posição do PlayStation no mercado de jogos. \n\nIsso tudo foi somado com o fato do Saturn ser focado em jogos 2D, enquanto o PS1 chegou com a proposta de ser um console totalmente em 3D, o que o tornava ainda mais interessante, por ser um console mais poderoso e mais barato que o seu concorrente.'}
      data={data}
      color={'#0100FD'}
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
