import { TextInput } from "react-native"
import "../styles/global.css"

export default function EntradaDeTexto(props){
  return(    
    <>
      <TextInput
        className="w-96 border text-xl border-black rounded-lg px-4 py-5 mb-4 bg-[#fafafa] text-black"
        placeholder={props.login} 
      />  

      <TextInput
        className="w-96 border text-xl border-black rounded-lg px-4 py-4 mb-4 bg-[#fafafa] text-black"
        placeholder="Sua Senha"
        secureTextEntry 
      />
    </>
  )
}