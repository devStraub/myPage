import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeRightSidebar } from '../../../../redux/reducers/components/overlays/sidebar/right'
import { setPage } from '../../../../redux/reducers/components/pages'

// Primefaces
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button';

// Routes
import { routes } from '../../../../routes'

export default function RightSidebar() {

    const visible = useSelector(state => state.rightSidebarView.value)
    const dispatch = useDispatch()

    return (
        <Sidebar
            visible={visible}
            position="right"
            onHide={() => dispatch(closeRightSidebar())}>

            <h2>Menu</h2>

            {routes.map((route, index) => (
                <Button
                    key={index}
                    label={route.label}
                    style={{ width: '100%', marginBlock: '5px' }}
                    onClick={() => {
                        dispatch(setPage(route.component))
                        dispatch(closeRightSidebar())
                    }} />
            ))}
        </Sidebar>
    )
}