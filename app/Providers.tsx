"use client"
import { motion } from "framer-motion"
import ErrorBoundary from '../components/ErrorBoundary';
import { SSRProvider } from "react-bootstrap";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from '../store/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import MainLayout from "../layouts/MainLayout";
import { usePathname } from "next/navigation";

interface Props {
    children: React.ReactNode;
  }
  
export default function Providers({ children }:Props) {
    const pathname = usePathname()
    let persistor = persistStore(store);
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }
    return (
        <motion.div
            variants={variants}
            key={pathname}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear', duration: 0.6 }}
        >
            <ErrorBoundary>
                <SSRProvider>
                    <NextTopLoader
                        color="rgb(233, 69, 96)"
                        initialPosition={0.3}
                        height={3}
                        easing="ease"
                        speed={200}
                        crawl={true}
                    />
                    <Toaster />
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor} />
                        <MainLayout>
                            <>
                                {children}
                            </>
                        </MainLayout>
                    </Provider>
                </SSRProvider>
            </ErrorBoundary>
        </motion.div>
    );
}