import React from 'react'

//Redux
import { useSelector } from 'react-redux'

// CSS
import './page.css'

// Bootstrap
import Card from 'react-bootstrap/Card';

// Components
import Header from '../header'
import Footer from '../footer'

// Routes
import { RouteList } from '../../routes';
import Overlay from '../overlay';

export default function Pages() {

    const page = useSelector(state => state.pageView.value)
    const navigationMode = useSelector(state => state.ConfigController.navigationMode)

    return (
        <>
            <main>
                <Card className="text-center" bg='dark' text='white' style={{ width: '100%', minHeight: '100vh' }}>
                    <Card.Header>
                        <header>
                            <Header />
                        </header>
                    </Card.Header>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        {navigationMode === 'monopage'
                            ?
                            page
                            :
                            <RouteList />
                        }

                    </Card.Body>
                    <Card.Footer>
                        <Footer />
                    </Card.Footer>
                </Card>
            </main>
            <Overlay />
        </>
    )
}