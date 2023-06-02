import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Primefaces
import { Button } from 'primereact/button';

// Icons
import {
    DiJava,
    DiReact,
    DiDatabase,
    DiMongodb,
    DiDocker,
} from "react-icons/di";

export default function Home() {

    const language = useSelector(state => state.ConfigController.language)   

    return (
        <>
            <div>
                <span className="block text-6xl font-bold mb-1">
                    {language === 'EN' && "Welcome! Let's work together?"}
                    {language === 'PT' && "Bem vindo! Vamos trabalhar juntos?"}
                </span>
                <div className="text-6xl text-primary font-bold mb-3">
                    {language === 'EN' && "I'm a Software Developer"}
                    {language === 'PT' && "Eu sou um Desenvolvedor de Software"}                    
                </div>              
                <p className="mt-0 mb-4 text-700 line-height-3">
                    {language === 'EN' && "SINCE 2018"}                    
                    {language === 'PT' && "DESDE 2018"} 
                </p>  

                <div className='flex flex-wrap justify-content-center card-container gap-3'>
                    <Button
                        tooltip='React'
                        tooltipOptions={{ position: 'bottom' }}
                        text raised outlined rounded
                        severity='primary'>
                        <DiReact style={{ fontSize: '50px' }} />
                    </Button>
                    <Button
                        tooltip='Java'
                        tooltipOptions={{ position: 'bottom' }}
                        text raised outlined rounded
                        severity='primary'>
                        <DiJava style={{ fontSize: '50px' }} />
                    </Button>
                    <Button
                        tooltip='SQL'
                        tooltipOptions={{ position: 'bottom' }}
                        text raised outlined rounded
                        severity='primary'>
                        <DiDatabase style={{ fontSize: '50px' }} />
                    </Button>
                    <Button
                        tooltip='NoSQL'
                        tooltipOptions={{ position: 'bottom' }}
                        text raised outlined rounded
                        severity='primary'>
                        <DiMongodb style={{ fontSize: '50px' }} />
                    </Button>
                    <Button
                        tooltip='DevOps'
                        tooltipOptions={{ position: 'bottom' }}
                        text raised outlined rounded
                        severity='primary'>
                        <DiDocker style={{ fontSize: '50px' }} />
                    </Button>
                </div>
            </div>
        </>
    )
}