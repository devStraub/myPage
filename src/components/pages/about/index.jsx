import React from 'react'

// Primefaces
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

// Bootstrap
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Resources
import Photo from '../../../resources/images/13937937_1207669349257383_272992765336949516_o.jpg'

export default function About() {

    return (
        <>
            <Row className="gap-2">
                <Card
                    title="Michel Henrique Straub Pech"
                    footer={
                        <>
                            <p>Let's work togheter?</p>
                        </>
                    }
                    header={
                        <>
                            <Image src={Photo} />
                        </>
                    }
                    className="md:w-30rem" >

                    <Table striped bordered hover size="sm" variant="dark">
                        <tbody>
                            <tr>
                                <td align='left'><strong>Birth</strong></td>
                                <td align='right'>27/08/1995</td>
                                <td >27 Years</td>
                            </tr>
                            <tr>
                                <td align='left'><strong>Nationality</strong></td>
                                <td align='right'>Brazilian</td>
                                <td >BR</td>
                            </tr>
                            <tr>
                                <td align='left'><strong>Graduation</strong></td>
                                <td align='right'>Analysis and Development Systems</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td align='left'><strong>Postgraduate</strong></td>
                                <td align='right'>IT Project Management</td>
                                <td>2022</td>
                            </tr>                            
                            <tr>
                                <td align='left'><strong>Skills Level</strong></td>
                                <td align='right'>Full</td>
                                <td style={{ width: '100px'}}>
                                    <i className="pi pi-star-fill" style={{ fontSize: '1rem', margin: '2px' }} />
                                    <i className="pi pi-star-fill" style={{ fontSize: '1rem', margin: '2px' }} />
                                    <i className="pi pi-star" style={{ fontSize: '1rem', margin: '2px' }} />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>

                <Card
                    title="About me"
                    className="md:w-20rem" >
                    <>
                        <p>
                            Hi, my name is Michel, and I've been working with programming since 2018.
                            I believe that the main skills of a programmer need
                            be those of solving problems and creating solutions, and these qualities
                            are my greatest virtues.
                        </p>
                        <p>
                            If you are looking for a dedicated professional who offers loyalty,
                            that is, that you don't run away when the problem appears, you found it.
                            What I ask in return is that loyalty be a two-way street. If you
                            offer yours, you will get mine.
                        </p>
                        <p>
                            After all, I'm just a young guy looking for personal growth
                            and professional, always aiming to deliver interesting results and
                            obtaining fair financial compensation in return.
                        </p>
                        <p>
                            If you're interested, I'll be happy to talk and exchange ideas.
                            You can contact me through the means provided at the bottom of this page.
                            It will be a pleasure to drink a good cup of coffee and get to know you.
                        </p>
                        <p>
                            If you're a gamer in your spare time, like me, we can play something together
                            while we exchange this idea and drink the coffee. If you like Age of Empires II,
                            I'm sure it will be fun.
                        </p>
                    </>
                </Card>
            </Row>
        </>
    )
}