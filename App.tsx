import React from "react";
import { useState } from "react"; // Hook para controlar estado
import EntradaDeTexto from "./components/EntradaDeTexto"; // Componente de input personalizado
import "./styles/global.css" // Estilos globais (NativeWind)
import { Text, View, TouchableOpacity, Image, Switch } from "react-native";

export default function App() {

  // Estado que controla o valor do switch (ligado/desligado)
  const [isEnabled, setIsEnabled] = useState(false);

  // Função que alterna o valor do switch
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    // Container principal (centraliza tudo na tela + estilos de fundo)
    <View className="flex-1 items-center justify-center bg-[#ffe] first:bg-[url('./assets/fade.png')] bg-top bg-repeat-x px-4">

      {/* Imagem/logo do app */}
      <Image
        source={require("./assets/4CHAN da sala.png")}
        className="w-44 h-40 mb-10 rounded-full"
      />

      {/* Texto de boas-vindas */}
      <Text className="text-4xl text-black font-extrabold m-1 text-center">
        Bem vindo ao Chan da 3ESPV
      </Text>

      {/* Container do switch + input */}
      <View>

        {/* Switch para alternar entre email e número */}
        <Switch
          className="flex flex-row-reverse"
          onValueChange={toggleSwitch} // Chama a função ao mudar
          value={isEnabled} // Valor atual do estado
          thumbColor="#991b1b"
          trackColor={{ false: '#8a8a8a', true: '#111111' }}
        />

        {/* Input muda dependendo do estado do switch */}
        <EntradaDeTexto 
          login={isEnabled ? 'Seu Numero' : 'Seu Email'}
        />
      </View>

      {/* Botão de "esqueci minha senha" */}
      <TouchableOpacity className="">
        <Text className="text-black font-normal underline m-1 text-center">
          Descobrir minha senha
        </Text>
      </TouchableOpacity>

      {/* Botão de cadastro */}
      <TouchableOpacity className="bg-red-800 rounded-lg px-6 py-3 m-4">
        <Text className="text-[#fafafa] text-2xl font-semibold m-1 text-center">
          SING UP
        </Text>
      </TouchableOpacity>

    </View>
  );
}