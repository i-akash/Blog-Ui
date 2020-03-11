import React from 'react'
import {Modal,Header} from 'semantic-ui-react'
import Button from '../buttons/Button'

export default ({header,text,open, btn1,click1,btn2,click2,btn1Visiblity=true,btn2Visiblity=true})=> {
    return (
        <Modal basic open={open} size='tiny' >
            <Modal.Header>{header}</Modal.Header>
            <Modal.Content>
            <p>
                {text}
            </p>
            </Modal.Content>
            {btn1Visiblity && <Button text={btn1} onClick={click1}/>}
            {btn2Visiblity && <Button text={btn2} onClick={click2}/>}
        </Modal>
    )
}