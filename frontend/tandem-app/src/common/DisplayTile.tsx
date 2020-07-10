import React from 'react';
import { Paper, ListItem, ListItemText } from '@material-ui/core'

export interface IDisplayTile {
  title: string
  value: string
}

const DisplayTile = ({ title, value}: IDisplayTile) => {
  return (
    <Paper>
      <ListItem divider>
        <ListItemText primary={title} />
      </ListItem>
      <ListItem divider>
        <ListItemText primary={value} />
      </ListItem>
    </Paper>
  )
}

export default DisplayTile;