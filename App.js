import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const app = () => {
  return(
    <View style={styles.container}> 
      <Text style={styles.titulo} >Hola mundo</Text>
      <Text style={styles.parrafo}>Soy Mauricio Morales Gonzalez</Text>
      <Text style={styles.parrafo2}>Y estoy haciendo mi primer App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#FFFFFF",
    fontFamily: 'Arial',
  },  
  parrafo: {
    fontSize: 25,
    fontWeight: '300',
    color: "white",
  },
  parrafo2: {
    fontSize: 25,
    fontWeight: '300',
    color: "red",
  },
});

export default app;