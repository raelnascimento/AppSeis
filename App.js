import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://images.pexels.com/photos/5025517/pexels-photo-5025517.jpeg?auto=compress&cs=tinysrgb&w=1600' }} style={styles.imageBackground}>


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> CADASTRO </Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F4284',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18
  },
  title: {
    fontSize: 34,
    marginBottom: 34,
    color: '#121212',
    fontWeight: 'bold'
  },
  button: {
    width: '50%',
    height: 30,
    backgroundColor: '#0F4284',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 20,
    bor
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5
  },
  imageBackground: {
    justifyContent: 'center',
    width: 400,
    height: 400,
    resizeMode: "cover",
    alignItems: "center"
  },

});

