import '../styles/global.css'
import Index from "./index";

export default function MyApp({component, pageProps}) {
    return <Index {...pageProps}/>
}