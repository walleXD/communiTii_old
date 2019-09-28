import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ApolloProvider } from '@apollo/react-hooks'
import {
  ApolloClient,
  NormalizedCacheObject
} from 'apollo-boost'

import theme from '../lib/theme'

interface Props {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

export default class AppEntry extends App<Props> {
  componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(
      '#jss-server-side'
    )
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render(): JSX.Element {
    const {
      Component,
      pageProps,
      apolloClient
    } = this.props

    return (
      <>
        <Head>
          <title>CommuniTii</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </>
    )
  }
}
