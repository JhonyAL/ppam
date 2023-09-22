import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Box from './Box'

const Container = props => {
  return (
    <ScrollView>
        <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Image source={props.console} style={styles.imgConsole} resizeMode="cover"/>
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
                        color={props.color}
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
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35
    },
    titulo: {
        fontWeight: 700,
        fontSize: 17
    },
    imgConsole: {
      width: 250,
      height: 150
    }
  });
  

export default Container;