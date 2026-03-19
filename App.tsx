import { useState } from "react";
import EntradaDeTexto from "./components/EntradaDeTexto";
import Input from "./components/EntradaDeTexto";
import "./styles/global.css"
import { Text, View, TextInput, TouchableOpacity, Image, Pressable, Switch } from "react-native";





export default function App() {
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
 
    <View className="flex-1 items-center justify-center bg-[#ffe] first:bg-[url('./assets/fade.png')] bg-top bg-repeat-x px-4">

     <Image
        source={require("./assets/react-icon.png")}
        className="w-40 h-40 rounded-full border-4 border-white opacity-70 mb-10"
      />
      <Text className="text-4xl text-red-800 font-extrabold m-1 text-center">
      Bem vindo ao Chan da 3ESPV
      </Text>
    <View>
     <Switch
     className="flex flex-row-reverse"
     onValueChange={toggleSwitch}
     value={isEnabled}
     thumbColor="#991b1b"
     trackColor = {{false: '#8a8a8a', true: '#111111'}}
     />
      <EntradaDeTexto login={isEnabled ? 'Seu Numero' : 'Seu Email'}/>
    </View>
      <Pressable className="bg-transparent">
        <Text className="text-red-800 font-normal text-2xl underline m-1 text-center">Esqueci minha senha</Text>
      </Pressable>

      <Pressable className="bg-red-800 rounded-lg  px-6 py-3 m-4">
        <Text className="text-[#fafafa] text-2xl font-semibold m-1 text-center">SING UP</Text>
      </Pressable>
    </View>
  );
}