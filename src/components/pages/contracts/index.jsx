import React from 'react'

// Primefaces
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';

//Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default function Contract() {

    const contracts = [
        {
            image: null,
            client: <a target="_blank" href='http://www.icnavais.com.br/content/icn-home' style={{ textDecoration: 'none' }}>Itaguaí Construções Navais</a>,
            clientType: 'Military',
            contractor: 'DClick',
            function: 'Software Engeneer',
            status: 'Active',
            period: '15 months',
            modality: 'CNPJ',
            regime: 'Remote',
            type: 'Outsourced',
            frontend: {
                resume: 'React | JSF',
                details: {
                    1: {
                        name: 'React',
                        more: {
                            1: 'Primefaces',
                            2: 'Bootstrap',
                            3: 'Redux',
                            4: 'Router-Dom',
                            5: 'ContextAPI',
                        }
                    },
                    2: {
                        name: 'JSF',
                        more: {
                            1: 'Primefaces',
                        }
                    }
                }
            },
            backend: {
                resume: 'Java',
                details: {
                    1: {
                        name: 'Java',
                        more: {
                            1: 'EJB (JBoss)',
                            2: 'JPA',
                            3: 'MVC',
                            4: 'Spring Boot'
                        }
                    }
                }
            },
            database: {
                resume: 'Oracle | MongoDB',
                details: {
                    1: {
                        name: 'SQL',
                        more: {
                            1: 'Oracle'
                        }
                    },
                    2: {
                        name: 'NoSQL',
                        more: {
                            1: 'MongoDB'
                        }
                    }
                }
            },
            devops: {
                resume: 'Git | Docker | Portainer | Jenkins',
                details: {
                    1: {
                        name: 'Docker',
                        more: {}
                    },
                    2: {
                        name: 'Portainer',
                        more: {}
                    },
                    3: {
                        name: 'Jenkins',
                        more: {}
                    },
                }
            },
            others: {
                resume: 'JasperReport',
                details: {}
            }
        },               
        {
            image: null,
            client: <a target="_blank" href='https://www.benoit.com.br/institucional/quem-somos' style={{ textDecoration: 'none' }}>Benoit Eletrodomésticos LTDA</a>,
            clientType: 'Retail',
            contractor: 'Benoit Elétrodomésticos LTDA',
            function: 'Web FullStack Developer',
            status: 'End',
            period: '56 months',
            modality: 'CLT',
            regime: 'Hybrid',
            type: 'Hired',
            frontend: {
                resume: 'JSF',
                details: {
                    1: {
                        name: 'JSF',
                        more: {
                            1: 'Primefaces',
                        }
                    }
                }
            },
            backend: {
                resume: 'Java',
                details: {
                    1: {
                        name: 'Java',
                        more: {
                            1: 'EJB (Wildfly)',
                            2: 'JPA',
                            3: 'MVC'
                        }
                    }
                }
            },
            database: {
                resume: 'Oracle | PostgreSQL | ZIM',
                details: {
                    1: {
                        name: 'SQL',
                        more: {
                            1: 'Oracle',
                            2: 'PostgreSQL'
                        }
                    }
                }
            },
            devops: {
                resume: 'Git | Jenkins'
            },
            others: {
                resume: 'BirtReport',
                details: {

                }
            }
        },      
    ]

    return (
        <>
            <Row className="g-3">
                {contracts.map((contract, idx) => (
                    <Col key={idx}>
                        <Card title={contract.client} subTitle={contract.function} className="md:w-25rem">
                            <Table striped bordered hover size="sm" variant="dark">
                                <thead>
                                    <tr>
                                        <th colSpan='2'>Technologies</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align='left' ><strong>Frontend</strong></td>
                                        <td align='right'>{contract.frontend.resume}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Backend</strong></td>
                                        <td align='right'>{contract.backend.resume}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Database</strong></td>
                                        <td align='right'>{contract.database.resume}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>DevOps</strong></td>
                                        <td align='right'>{contract.devops.resume}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Others</strong></td>
                                        <td align='right'>{contract.others.resume}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table striped bordered hover size="sm" variant="dark">
                                <thead>
                                    <tr>
                                        <th colSpan='2'>Contract Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align='left'><strong>Business</strong></td>
                                        <td align='right'>{contract.clientType}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Contractor</strong></td>
                                        <td align='right'>{contract.contractor}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Bond</strong></td>
                                        <td align='right'>{contract.type}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Status</strong></td>
                                        <td align='right'>{contract.status}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Period</strong></td>
                                        <td align='right'>{contract.period}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Modality</strong></td>
                                        <td align='right'>{contract.modality}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Regime</strong></td>
                                        <td align='right'>{contract.regime}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}