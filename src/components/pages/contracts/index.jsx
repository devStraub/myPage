import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Primefaces
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';

//Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default function Contract() {

    const language = useSelector(state => state.ConfigController.language)

    const contratosPT = [
        {
            image: null,
            client:
                <>
                    <strong>Itaguaí Construções Navais</strong>
                    <a target='_blank' href='http://www.icnavais.com.br/content/icn-home' style={{ textDecoration: 'none' }}>
                        <Button
                            label={
                                <>
                                    {language === 'EN' && 'See More'}
                                    {language === 'PT' && 'Ver Mais'}
                                </>
                            }
                            severity="info"
                            rounded outlined
                            style={{ margin: '10px' }}
                        />
                    </a>
                </>,
            link: 'http://www.icnavais.com.br/content/icn-home',
            clientType: 'Militar',
            contractor: 'DClick',
            function: 'Analista de Sistemas',
            start: '02/2022',
            end: 'Ativo',
            modality: 'CNPJ',
            regime: 'Remoto',
            type: 'Terceirizado',
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
            client:
                <>
                    <strong>Benoit Elétrodomésticos LTDA</strong>
                    <a target='_blank' href='https://www.benoit.com.br/institucional/quem-somos' style={{ textDecoration: 'none' }}>
                        <Button
                            label={
                                <>
                                    {language === 'EN' && 'See More'}
                                    {language === 'PT' && 'Ver Mais'}
                                </>
                            }
                            severity="info"
                            rounded outlined
                            style={{ margin: '10px' }}
                        />
                    </a>
                </>,
            link: 'https://www.benoit.com.br/institucional/quem-somos',
            clientType: 'Varejo',
            contractor: 'Benoit Elétrodomésticos LTDA',
            function: 'Desenvolvedor Web FullStack',
            start: '08/2018',
            end: '04/2023',
            modality: 'CLT',
            regime: 'Híbrido',
            type: 'Contratado',
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

    const contracts = [
        {
            image: null,
            client:
                <>
                    <strong>Itaguaí Construções Navais</strong>
                    <a target='_blank' href='http://www.icnavais.com.br/content/icn-home' style={{ textDecoration: 'none' }}>
                        <Button
                            label={
                                <>
                                    {language === 'EN' && 'See More'}
                                    {language === 'PT' && 'Ver Mais'}
                                </>
                            }
                            severity="info"
                            rounded outlined
                            style={{ margin: '10px' }}
                        />
                    </a>
                </>,
            link: 'http://www.icnavais.com.br/content/icn-home',
            clientType: 'Military',
            contractor: 'DClick',
            function: 'Software Engeneer',
            start: '02/2022',
            end: 'Active',
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
            client:
                <>
                    <strong>Benoit Elétrodomésticos LTDA</strong>
                    <a target='_blank' href='https://www.benoit.com.br/institucional/quem-somos' style={{ textDecoration: 'none' }}>
                        <Button
                            label={
                                <>
                                    {language === 'EN' && 'See More'}
                                    {language === 'PT' && 'Ver Mais'}
                                </>
                            }
                            severity="info"
                            rounded outlined
                            style={{ margin: '10px' }}
                        />
                    </a>
                </>,
            link: 'https://www.benoit.com.br/institucional/quem-somos',
            clientType: 'Retail',
            contractor: 'Benoit Elétrodomésticos LTDA',
            function: 'Web FullStack Developer',
            start: '08/2018',
            end: '04/2023',
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
                {language === 'EN' && contracts.map((contract, idx) => (
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
                                        <td align='left'><strong>Start</strong></td>
                                        <td align='right'>{contract.start}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>End</strong></td>
                                        <td align='right'>{contract.end}</td>
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
                {language === 'PT' && contratosPT.map((contract, idx) => (
                    <Col key={idx}>
                        <Card title={contract.client} subTitle={contract.function} className="md:w-25rem">
                            <Table striped bordered hover size="sm" variant="dark">
                                <thead>
                                    <tr>
                                        <th colSpan='2'>Tecnologias</th>
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
                                        <td align='left'><strong>Banco de Dados</strong></td>
                                        <td align='right'>{contract.database.resume}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>DevOps</strong></td>
                                        <td align='right'>{contract.devops.resume}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Outros</strong></td>
                                        <td align='right'>{contract.others.resume}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table striped bordered hover size="sm" variant="dark">
                                <thead>
                                    <tr>
                                        <th colSpan='2'>Detalhes do Contrato</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align='left'><strong>Negócio</strong></td>
                                        <td align='right'>{contract.clientType}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Contratante</strong></td>
                                        <td align='right'>{contract.contractor}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Vínculo</strong></td>
                                        <td align='right'>{contract.type}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Início</strong></td>
                                        <td align='right'>{contract.start}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Fim</strong></td>
                                        <td align='right'>{contract.end}</td>
                                    </tr>
                                    <tr>
                                        <td align='left'><strong>Modalidade</strong></td>
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