import React from "react" // Importa o React para criação do componente
import { TextInput } from "react-native" // Importa o componente de input de texto
import "../styles/global.css" // Importa os estilos globais

export default function EntradaDeTexto(props){
  return(    
    <>
      {/* Campo de texto para login */}
      <TextInput
        className="w-96 border text-xl border-black rounded-lg px-4 py-5 mb-4 bg-[#fafafa] text-black"
        placeholder={props.login} 
        // Placeholder definido via props para reutilização do componente
      />  

      {/* Campo de texto para senha */}
      <TextInput
        className="w-96 border text-xl border-black rounded-lg px-4 py-4 mb-4 bg-[#fafafa] text-black"
        placeholder="Sua Senha"
        // Texto padrão indicando campo de senha
        secureTextEntry 
      />
    </>
  )
}