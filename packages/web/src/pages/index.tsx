import React, { ReactElement } from 'react'
import { Typography } from '@material-ui/core'

import { withApollo } from '../lib/apollo'

const Entry = (): ReactElement => (
  <Typography variant="h2">Hello world</Typography>
)

export default withApollo(Entry)
