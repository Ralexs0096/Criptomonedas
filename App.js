import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import Cotizacion from './components/Cotizacion'
import Formulario from './components/Formulario.js'
import Header from './components/Header.js'
import axios from 'axios'

const App = () => {
  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptomoneda] = useState('')
  const [consultarApi, setConsultarApi] = useState(false)
  const [resultado, setResultado] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const cotizarCripto = async () => {
      if (consultarApi) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const result = await axios.get(url)

        setLoading(true)

        setTimeout(() => {
          setResultado(result.data.DISPLAY[criptomoneda][moneda])
          setConsultarApi(false)
          setLoading(false)
        }, 2000)
      }
    }
    cotizarCripto()
  }, [consultarApi])

  const componente = loading ? (
    <ActivityIndicator size="large" color="#5e49e2" />
  ) : (
    <Cotizacion resultado={resultado} />
  )

  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            setMoneda={setMoneda}
            setCriptomoneda={setCriptomoneda}
            setConsultarApi={setConsultarApi}
          />
        </View>
        <View style={{ marginTop: 40 }}>{componente}</View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
})

export default App
