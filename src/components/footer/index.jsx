import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Primefaces
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function Footer() {

    const toast = React.useRef(null);

    const show = (props) => {
        toast.current.show({ severity: 'info', summary: props.message });
    };

    return (
        <>
            <div className='flex flex-wrap justify-content-center card-container gap-3'>
                <CopyToClipboard text="michel.pech@outlook.com.br" onCopy={() => show({ message: 'E-mail copied!' })}>
                    <Button
                        tooltip='E-Mail'
                        tooltipOptions={{ position: 'top' }}
                        icon="pi pi-envelope"
                        rounded outlined />
                </CopyToClipboard>
                <a target='_blank' href='https://api.whatsapp.com/send?phone=5551989249247' style={{ textDecoration: 'none' }}>
                    <Button
                        tooltip='WhatsApp'
                        tooltipOptions={{ position: 'top' }}
                        icon="pi pi-whatsapp"
                        severity="success"
                        rounded outlined />
                </a>
                <a target='_blank' href='https://github.com/devStraub' style={{ textDecoration: 'none' }}>
                    <Button
                        tooltip='GitHub'
                        tooltipOptions={{ position: 'top' }}
                        icon="pi pi-github"
                        severity="secondary"
                        rounded outlined />
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/michel-henrique-straub-pech-ba2a0b75/' style={{ textDecoration: 'none' }}>
                    <Button
                        tooltip='LinkedIn'
                        tooltipOptions={{ position: 'top' }}
                        icon="pi pi-linkedin"
                        severity="info"
                        rounded outlined />
                </a>
                <CopyToClipboard text="Michel Pech#1242" onCopy={() => show({ message: 'Discord Profile copied!' })}>
                    <Button
                        tooltip='Discord'
                        tooltipOptions={{ position: 'top' }}
                        icon="pi pi-discord"
                        severity="help"
                        rounded outlined />
                </CopyToClipboard>
                <a target='_blank' href='https://www.facebook.com/devStraub' style={{ textDecoration: 'none' }}>
                    <Button
                        tooltip='Facebook'
                        tooltipOptions={{ position: 'top' }}
                        icon="pi pi-facebook"
                        severity="info"
                        rounded outlined />
                </a>                
            </div>

            <Toast ref={toast} />
        </>
    )
}