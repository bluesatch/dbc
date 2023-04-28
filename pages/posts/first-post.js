import Link from 'next/Link'
import Head from 'next/head'
// import Script from 'next/script'
import Layout from '../../components/layout'

const FirstPost  =()=> {
    return(
        <Layout>
            <Head>
                <title>Satch's First Post</title>
            </Head>
            {/* <Script 
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={()=>
                    console.log(`script loaded directly, window.FB has been populated`)
                }
            /> */}
            <h1 className="h1">First post</h1>
            <h2>
                <Link href='/' className="home-link">Back to home</Link>
            </h2>
        </Layout>
    ) 
}

export default FirstPost