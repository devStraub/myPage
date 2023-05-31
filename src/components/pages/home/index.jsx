import React from 'react'


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

    return (
        <>
            <div>
                <span className="block text-6xl font-bold mb-1">
                    Welcome! Let's work together?
                </span>
                <div className="text-6xl text-primary font-bold mb-3">
                    I'm a Software Developer since 2018
                </div>                

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