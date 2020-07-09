import React from 'react'
import {Dimmer,Loader} from 'semantic-ui-react'

export default function PageLoader({loader}) {
    return (
        <Dimmer active={loader}>
            <Loader/>
        </Dimmer>
    )
}
