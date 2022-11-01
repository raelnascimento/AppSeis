import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';




import Cadastro  from './src/pages/Cadastro';
import Home  from './src/pages/Home';



function Feed({ navigation }) {
  return (


    <View style={{ flex: 1, color: 'white', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>


      <View style={{
        backgroundColor: "white", width: 100,
        height: 40, borderRadius:20, top:-55,
      }} >
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return(
    <Drawer.Navigator useLegacyImplementation> 
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>

      <MyDrawer/>

    </NavigationContainer>
  );
}