"use client"
import React, { Suspense } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuMobile from "../components/navbars/MenuMobile";

type Props = {
    children: JSX.Element,
};
const MainLayout = ({ children }: Props) => {
    return (
        <>
            <Suspense fallback={<p>loading ...</p>}>
                <Header />
            </Suspense>
            {children}
            <MenuMobile />
            <Footer />
        </>
    )
}
export default MainLayout