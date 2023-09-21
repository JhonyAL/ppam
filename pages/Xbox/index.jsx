import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import xboxConsole from '../../assets/historia/console-xbox.png'
import { FlatList } from 'react-native-web';
import Box from '../../components/Box'

const dataEsp = [
    {
        img: require('../../assets/especificacoes/cpu.png'),
        text1: 'Intel Pentium 3',
        text2: '733 MHz'
    },
    {
        img: require('../../assets/especificacoes/gpu.png'),
        text1: 'nVidia NV2A',
        text2: '233 MHz'
    },
    {
        img: require('../../assets/especificacoes/ram.png'),
        text1: '64 MB DDR SDRAM',
        text2: '200 MHz'
    },
    {
        img: require('../../assets/especificacoes/hdd.png'),
        text1: 'HD 8GB',
        text2: '5400 RPM'
    }
];

const dataFen = [
    {
        img: require('../../assets/jogo/sales.png'),
        text1: '4.7 milhões de cópias',
        text2: 'Até Julho de 2006'
    },
    {
        img: require('../../assets/jogo/money.png'),
        text1: 'US$ 170 milhões',
        text2: 'Apenas nos EUA'
    },
    {
        img: require('../../assets/jogo/ranking.png'),
        text1: '97% de Aprovação',
        text2: 'Metacritic'
    },
    {
        img: require('../../assets/jogo/disc.png'),
        text1: 'Remake em 2014',
        text2: 'Para o Xbox One'
    }
];

const historia = "A Microsoft começou sua história com o público gamer em 2001, com o lançamento do Xbox. Lançado na época para concorrer com o PS2 da Sony e o Game Cube da Nintendo. O Xbox oferecia um hardware mais poderoso que o dos seus concorrentes. \n\nE para mostrar a capacidade desse novo console super poderoso a Microsoft precisava de um jogo que usasse todo esse potencial, e foi aí que surgiu Halo, que fez um enorme sucesso atingindo uma imensa base de fãs, principalmente nos Estados Unidos."

export default function Xbox () {
  return (
    <ScrollView>
        <View>
            <Text>História do Xbox</Text>
            <Image source={xboxConsole} style={styles.imgConsole} />
            <Text>
                {historia}
            </Text>
        </View>
        <Box    
            titulo="Especificações Técnicas"   
            descricao="Confira a seguir as especificações técnicas do Xbox de 2001" 
            data={dataEsp}
        />
        <Box 
            titulo="O fenômeno Halo" 
            descricao={'Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% da base de consoles Xbox. \n\nHalo é até hoje um dos jogos mais importantes do Xbox e da indústria como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.'} 
            data={dataFen}
        />
        <Box 
            titulo="Conclusão"
            descricao="A Microsoft conseguiu criar com o Xbox uma grande base de fãs em todo mundo que jogam suas franquias diariamente. O que começou como uma tentativa de defender o territórios dos PCs nas salas se tornou um dos produtos mais vendidos da companhia e parte de um dos setores mais lucrativos da industria do entretenimento."
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgConsole: {
    width: 150,
    height: 150
  }
});
