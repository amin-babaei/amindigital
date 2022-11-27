import type { AppProps } from 'next/app'
import '../styles/theme.scss'
import '../styles/globals.css'
import { SSRProvider } from 'react-bootstrap'
import MainLayout from "../layouts/MainLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from "framer-motion"
import NextNProgress from "nextjs-progressbar";
import Head from 'next/head';

function MyApp({ Component, router, pageProps }: AppProps) {

    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }
    return (
        <motion.div
            variants={variants}
            key={router.pathname}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear', duration: 0.6 }}
        >
            <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="فروشگاه امین دیجیتال اولین و اخرین فروشگاه دیجیتالی است که خدمات و سخت افزار های کامپیوتر را می توانید از آن خریداری کنید"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>
            <ErrorBoundary>
                <SSRProvider>
                    <NextNProgress
                        color="rgb(233, 69, 96)"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={3}
                        showOnShallow={true}
                    />
                    <Toaster />
                    <Provider store={store}>
                        <MainLayout>
                            <Component {...pageProps} />
                        </MainLayout>
                    </Provider>
                </SSRProvider>
            </ErrorBoundary>
        </motion.div>
    )
}

export default MyApp
