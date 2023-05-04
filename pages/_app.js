import { OpenSans } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { useEffect } from 'react'


const openSans = OpenSans({
    weight: ['400', '600'],
    style: ['normal', 'italic'],
    subsets: ['latin']
})

const App =({ Component, pageProps })=> {

    useEffect(()=> {
        require('bootstrap/dist/js/bootstrap.bundle')
    }, [])

    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${openSans.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}

export default App

