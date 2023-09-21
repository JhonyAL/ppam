import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';

const Box = props => {
  return (
    <View>
        <Text>{props.titulo}</Text>
        <Text>{props.descricao}</Text>
        {props.data ? 
            <SafeAreaView>
            <FlatList data={props.data} renderItem={({ item }) => (
                <View>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgConsole: {
    width: 150,
    height: 150
  }
});
