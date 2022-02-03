import '../styles/globals.css'
import {ThirdwebWeb3Provider} from "@3rdweb/hooks"
import "../node_modules/react-loader-spinner"

const supportedChainIds = [4] //RinkebyNetwork
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return(
  <ThirdwebWeb3Provider
     supportedChainIds={supportedChainIds}
     connectors={connectors}
     >
    <Component {...pageProps} />
  </ThirdwebWeb3Provider>
  )
}

export default MyApp
