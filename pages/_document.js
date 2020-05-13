import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <link rel="shortcut icon" href="/static/logo.svg" />
          <meta name="google-site-verification" content="UIS7gGN8FWnRSoEpV1BJbq029rCRJjVWnnCeMWShhqk" />
          <meta property="og:title" content="Aimoponic Farm" key="aimoponic farm" />
          <meta property="og:description" content="Aimoponic is the leading farmer in Indonesia"/>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument