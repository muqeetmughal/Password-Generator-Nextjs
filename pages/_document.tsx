import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>
                    Free Password Generator Tool Online
                </title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}