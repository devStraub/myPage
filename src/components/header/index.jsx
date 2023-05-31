import React from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { showRightSidebar } from '../../redux/reducers/components/overlays/sidebar/right'
import { setPage } from '../../redux/reducers/components/pages';

// Primefaces
import { Button } from 'primereact/button';

// Icons
import { DiCode } from "react-icons/di";

// Components
import Home from '../pages/home';

export default function Header() {

    const dispatch = useDispatch()

    return (
        <>
            <div className='header-left'>
                <Button rounded text onClick={() => dispatch(setPage(<Home />))}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <DiCode style={{ fontSize: '30px' }} />
                        <strong>DevStraub</strong>
                    </div>
                </Button>
            </div>
            <div className='header-right'>
                <Button icon="pi pi-bars" onClick={() => dispatch(showRightSidebar())} />
            </div>
        </>
    )
}