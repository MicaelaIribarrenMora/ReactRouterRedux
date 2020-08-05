import React from 'react';
import Home from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
    <div className="App">
        <Header />
        <Footer />
    </div>
);

export default Layout;