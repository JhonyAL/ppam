import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';

const Box = props => {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text>{props.descricao}</Text>
        {props.data ? 
            <SafeAreaView>
              <FlatList data={props.data} renderItem={({ item }) => (
                  <View style={styles.card}>
                      <Image source={item.img} style={styles.imgConsole}/>
                      <Text>{item.text1}</Text>
                      <Text>{item.text2}</Text>
                  </View>
              )} numColumns={2}/>
        </SafeAreaView>
        : <></>
    }
        
    </View>
  );
}

export default Box;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    gap: 20
  },
  imgConsole: {
    width: 50,
    height: 50
  },
  titulo: {
    fontWeight: 700,
    fontSize: 18
  },
  card: {
    backgroundColor: '#14870c',
    marginTop: 10,
    marginLeft: 20,
    width: 150,
    height: 100
  },
});
