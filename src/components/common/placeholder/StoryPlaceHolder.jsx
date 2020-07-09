import React from 'react'
import {Placeholder,Transition} from 'semantic-ui-react'
//css
import './StoryPlaceHolder.css'
export default function StoryPlaceHolder({number}) {
    return (
        
        <React.Fragment>
            {
                [...Array(number)].map(index=>
                    <Transition animation={"fade"} duration={500}> 
                        <Placeholder key={index} inverted fluid> 
                                <Placeholder.Header>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                
                        </Placeholder>
                    </Transition>
                )
            }
        </React.Fragment>
    )
}
