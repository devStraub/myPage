import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Primefaces
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

// Bootstrap
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Resources
import Photo from '../../resources/images/13937937_1207669349257383_272992765336949516_o.jpg'

export default function About() {

    const language = useSelector(state => state.ConfigController.language)

    return (
        <>
            <Row className="gap-2">
                <Card
                    title="Michel Henrique Straub Pech"
                    footer={
                        <>
                            <p>
                                {language === 'EN' && "Let's work togheter?"}
                                {language === 'PT' && "Vamos trabalhar juntos?"}
                            </p>
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
                                <td align='left'>
                                    <strong>
                                        {language === 'EN' && "Birth"}
                                        {language === 'PT' && "Nascimento"}
                                    </strong>
                                </td>
                                <td colSpan="2" align='center'>27/08/1995</td>
                            </tr>
                            <tr>
                                <td align='left'>
                                    <strong>
                                        {language === 'EN' && "Nationality"}
                                        {language === 'PT' && "Nacionalidade"}
                                    </strong>
                                </td>
                                <td colSpan="2" align='center'>
                                    {language === 'EN' && "Brazilian"}
                                    {language === 'PT' && "Brasileiro"}
                                </td>
                            </tr>
                            <tr>
                                <td align='left'>
                                    <strong>
                                        {language === 'EN' && "Degree"}
                                        {language === 'PT' && "Graduação"}
                                    </strong>
                                </td>
                                <td align='right'>
                                    {language === 'EN' && "Analysis and Development Systems"}
                                    {language === 'PT' && "Análise e Desenvolvimento de Sistemas"}
                                </td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td align='left'>
                                    <strong>
                                        MBA
                                    </strong>
                                </td>
                                <td align='right'>
                                    {language === 'EN' && "IT Project Management"}
                                    {language === 'PT' && "Gestão de Projetos de TI"}
                                </td>
                                <td>2022</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>

                <Card
                    title={
                        <>
                            {language === 'EN' && "About me"}
                            {language === 'PT' && "Sobre mim"}
                        </>                        
                    }
                    className="md:w-20rem" >
                    <>
                        {language === 'EN' &&
                            <>
                                <p>
                                    Hi, my name is Michel, and I've been working with programming since 2018.
                                    I believe that the main skills of a programmer need
                                    be those of solving problems and creating solutions, and these qualities
                                    are my greatest virtues.
                                </p>
                                <p>
                                    I'm just a young guy looking for personal growth
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
                        }
                        {language === 'PT' &&
                            <>
                                <p>
                                    Olá, meu nome é Michel, e trabalho com programação desde 2018.
                                    Acredito que as principais habilidades de um programador sejam as
                                    de resolver problemas e criar soluções, e essas qualidades
                                    são minhas maiores virtudes.
                                </p>
                                <p>
                                    Sou apenas um jovem em busca de crescimento pessoal
                                    e profissional, sempre visando entregar resultados interessantes e
                                    obter uma compensação financeira justa em troca.
                                </p>
                                <p>
                                    Caso tenha interesse, ficarei feliz em conversar e trocar ideias.
                                    Pode contactar-me através dos meios disponibilizados no rodapé desta página.
                                    Será um prazer tomar um bom café e conhecê-lo.
                                </p>
                                <p>
                                    Se você é um gamer nas horas vagas, como eu, podemos jogar algo juntos
                                    enquanto trocamos essa ideia e tomamos o café. Se você gosta do Age of Empires II,
                                    Tenho certeza que será divertido.
                                </p>
                            </>
                        }
                    </>
                </Card>
            </Row>
        </>
    )
}