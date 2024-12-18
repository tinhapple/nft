import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

// px-[115px] max-md:px-[72px] max-sm:px-[30px]

export default function DefaultLayout({ children }) {
    return (
        <div className="bg-black flex flex-col items-center">
            <div className="max-w-[1280px] w-full">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
}
