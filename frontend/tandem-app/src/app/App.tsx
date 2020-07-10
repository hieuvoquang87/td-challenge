import React from 'react';
import './App.css';
import { Container, Grid, Paper, List, ListItem, ListItemText, Button, Input } from '@material-ui/core'
import DisplayTile from '../common/DisplayTile'
import NewDataPointForm from '../common/NewDataPointForm'
import useAppState from './hooks/useAppState';

import { getDataSet, setNewDataPoint } from '../core/services/tandemService';

const gridStyle = {
  paddingTop: '10vh'
}

const onLoadDataSetSelected = async (setDataSet: Function) => {
  try {
    const result = await getDataSet();
    setDataSet(result)
  } catch (e) {
    console.log(e)
  }
}

const onSubmitNewDataPoint = async (newDataPoint: number, setDataSet: Function) => {
  try {
    const result = await setNewDataPoint(newDataPoint);
    setDataSet(result)
  } catch (e) {
    console.log(e)
  }
}

function App() {
  const { mean, median, stdDev, mode, setDataSet } = useAppState();
  return (
    <Container>
      <Grid style={gridStyle} container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <Grid style={{ backgroundColor: 'gray'}} item xs={12}>
            Title
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DisplayTile title="Mean" value={mean.toString()}/>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DisplayTile title="Median" value={median.toString()}/>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DisplayTile title="Standard Deviation" value={stdDev.toString()}/>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DisplayTile title="Mode" value={mode.toString() || '0'}/>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Button style={{ width: '100%'}} variant="contained" onClick={() => onLoadDataSetSelected(setDataSet)}>Load Data Set</Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <NewDataPointForm onSubmitNewDataPoint={(input) => onSubmitNewDataPoint(input, setDataSet)}/>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
