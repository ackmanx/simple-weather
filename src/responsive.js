import React from 'react'
import Responsive from 'react-responsive'

export const Mobile = props => <Responsive {...props} maxWidth={600}>{props.children}</Responsive>
export const Desktop = props => <Responsive {...props} minWidth={601}>{props.children}</Responsive>
