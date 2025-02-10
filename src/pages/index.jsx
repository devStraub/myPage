import React from 'react'

//Redux
import { useSelector } from 'react-redux'

// CSS
import './page.css'

// Bootstrap
import Card from 'react-bootstrap/Card';

// Components
import Header from '../components/header'
import Footer from '../components/footer'

// Routes
import { RouteList } from '../routes';
import Overlay from '../components/overlay';

export default function Pages() {

    const page = useSelector(state => state.pageView.value)
    const navigationMode = useSelector(state => state.ConfigController.navigationMode)

    return (
        <>
            <header style={{ backgroundColor: 'var(--surface-0)'}}>
                <Header />
            </header>
            <main style={{ backgroundColor: 'var(--bluegray-900)'}}>
                <div style={{ padding: '5rem'}}>
                    {navigationMode === 'monopage'
                        ?
                        page
                        :
                        <RouteList />
                    }
                </div>
            </main>
            <footer style={{ backgroundColor: 'var(--surface-0)'}}>
                <Footer />
            </footer>
            <Overlay />
        </>
    )
}