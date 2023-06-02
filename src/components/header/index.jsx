import React from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { showRightSidebar } from '../../redux/reducers/components/overlays/sidebar/right'
import { setPage } from '../../redux/reducers/components/pages';
import { setLanguage } from '../../redux/reducers/configs'

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
            <div className='header-right' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{ marginRight: '15px' }}>
                    <Button
                        tooltip='Português'
                        tooltipOptions={{ position: 'bottom' }}
                        label='PT'
                        severity="info"
                        rounded outlined text
                        onClick={() => dispatch(setLanguage('PT'))} />

                    <Button
                        tooltip='English'
                        tooltipOptions={{ position: 'bottom' }}
                        label='EN'
                        severity="info"
                        rounded outlined text
                        onClick={() => dispatch(setLanguage('EN'))} />
                </div>

                <Button icon="pi pi-bars" onClick={() => dispatch(showRightSidebar())} />
            </div>
        </>
    )
}