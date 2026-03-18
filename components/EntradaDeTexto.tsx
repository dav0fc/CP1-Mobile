import { TextInput } from "react-native"
import "./styles/global.css"

export default function EntradaDeTexto(){
  return(    
    <>
          <TextInput
            className="w-full border border-green-200 rounded-lg px-4 py-8 mb-4 bg-white text-red-800"
            placeholder="Digite algo..."
          />
    </>
  )
}