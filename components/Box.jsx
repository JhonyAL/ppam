import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';

const Box = props => {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text>{props.descricao}</Text>
        {props.data ? 
            <SafeAreaView style={styles.container}>
              <FlatList style={{marginRight: 20}} data={props.data} ItemSeparatorComponent={() => <View style={{height: 20}} />} renderItem={({ item }) => (
                  <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: props.color ?? '#000',
                    color: 'white',
                    marginRight: 20,
                    // marginTop: 10,
                    // marginLeft: 20,
                    width: 140,
                    height: 130,
                    borderRadius: 5
                  }}>
                      <Image source={item.img} style={styles.imgConsole}/>
                      <Text style={styles.text1}>{item.text1}</Text>
                      <Text style={styles.text1}>{item.text2}</Text>
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
    marginRight: -20,
    gap: 30
  },
  imgConsole: {
    width: 50,
    height: 50,
    tintColor: '#fff',
    marginBottom: 10
  },
  titulo: {
    fontWeight: 700,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008000',
    color: 'white',
    marginRight: 20,
    // marginTop: 10,
    // marginLeft: 20,
    width: 140,
    height: 130,
    borderRadius: 5
  },
  text1: {
    color: '#fff'
  }
});
