import React from 'react'
import {TransitionablePortal,Segment,Header} from 'semantic-ui-react'

export default function ErrorMessage({onClose,open,header,message}) {
    return (
        <TransitionablePortal onClose={onClose} open={open}>
            <Segment
            style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
            >
                <Header>{header}</Header>
                <p>{message}</p>
            </Segment>
      </TransitionablePortal>
    )
}
