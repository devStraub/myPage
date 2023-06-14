import React from 'react'

// Primefaces
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

//Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Icons
import {
    DiJava,
    DiReact,
    DiDatabase,
    DiMongodb,
    DiDocker
} from "react-icons/di";

export default function Projects() {

    const projects = [
        {
            language: <DiReact style={{ fontSize: '50px' }} />,
            githubLink: 'https://github.com/devStraub/myPage',
            description: 'description',
            name: 'DevStraub Page',
        },          
        {
            language: <DiJava style={{ fontSize: '50px' }} />,
            githubLink: 'https://github.com/devStraub/BirtAPI',
            description: 'description',
            name: 'Birt Report API',
        },
        {
            language: <DiJava style={{ fontSize: '50px' }} />,
            githubLink: 'https://github.com/devStraub/JapserAPI',
            description: 'description',
            name: 'Jasper Report API',
        },
        {
            language: <DiJava style={{ fontSize: '50px' }} />,
            githubLink: 'https://github.com/devStraub/TokenAPI',
            description: 'description',
            name: 'Token API',
        },            
        {
            language: <DiJava style={{ fontSize: '50px' }} />,
            githubLink: 'https://github.com/devStraub/emailSenderAPI',
            description: 'description',
            name: 'Email Sender API',
        },           
    ]

    const header = (project) => (
        <div className="flex flex-wrap justify-content-center gap-2">
            <Button
                label={project.language}
                text raised outlined rounded
                severity="primary"
                style={{ margin: '10px' }} />
        </div>
    );
    const footer = (project) => (
        <div className="flex flex-wrap justify-content-center gap-2">
            {project.githubLink &&
                <a target='_blank' href={project.githubLink} style={{ textDecoration: 'none' }}>
                    <Button
                        tooltip='Code'
                        tooltipOptions={{ position: 'top' }}
                        icon="pi pi-github"
                        severity="secondary"
                        rounded outlined
                        style={{ margin: '5px' }} />
                </a>
            }
            {project.demoLink &&
                <Button
                    tooltip='Demo'
                    tooltipOptions={{ position: 'top' }}
                    icon="pi pi-eye"
                    severity="secondary"
                    rounded outlined
                    style={{ margin: '5px' }} />
            }
        </div>
    );

    return (
        <>
            <Row className="flex flex-wrap justify-content-center align-items-center gap-5">
                {projects.map((project, idx) => (
                    <Card
                        key={idx}
                        title={project.name}
                        footer={footer(project)}
                        header={header(project)}
                        className="md:w-20rem" />
                ))}
            </Row>
        </>
    )
}