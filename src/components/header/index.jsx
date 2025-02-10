import React from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { showRightSidebar } from '../../redux/reducers/components/overlays/sidebar/right'
import { setPage } from '../../redux/reducers/components/pages';
import { setLanguage } from '../../redux/reducers/configs'

// Primefaces
import { Button } from 'primereact/button';

// Icons
import { DiCode } from "react-icons/di";

// Components
import Home from '../../pages/home';

export default function Header() {

    const language = useSelector(state => state.ConfigController.language)
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
                        tooltip={language === 'PT' ? 'English' : 'Português'}
                        tooltipOptions={{ position: 'bottom' }}
                        label={
                            <>
                                {language === 'PT' && 'EN'}
                                {language === 'EN' && 'PT'}
                            </>
                        }
                        severity="info"
                        rounded outlined text
                        onClick={() => {
                            if (language === 'EN'){
                                dispatch(setLanguage('PT'))
                            }

                            if (language === 'PT'){
                                dispatch(setLanguage('EN'))
                            }                            
                        }} />
                </div>

                <Button icon="pi pi-bars" onClick={() => dispatch(showRightSidebar())} />
            </div>
        </>
    )
}