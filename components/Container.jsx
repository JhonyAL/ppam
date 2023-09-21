import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Box from './Box'

const Container = props => {
  return (
    <ScrollView>
        <View style={styles.container}>
        <View style={styles.center}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Image source={props.console} style={styles.imgConsole} />
            <Text>
                {props.historia}
            </Text>
        </View>
        {
            props.data.map((e, i) => {
                return (
                    <Box
                        key={i}    
                        titulo={e.titulo}  
                        descricao={e.descricao}
                        data={e.dataEsp ?? false}
                    />
                )
            })
        }
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontWeight: 700,
    },
    imgConsole: {
      width: 250,
      height: 150
    }
  });
  

export default Container;