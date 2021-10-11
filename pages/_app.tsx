import Nav from "../components/Nav"

const MyApp = ({ Component, pageProps }) => {
  return <div>
    <style jsx global>{`body { display: block !important }`}</style>
    <Nav />
    <Component {...pageProps} />
  </div>
}

export default MyApp