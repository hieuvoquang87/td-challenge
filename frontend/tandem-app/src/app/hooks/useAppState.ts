import { useState, useEffect } from 'react';
import { calculateMean, calculateMedian, calculateStdDev, calculateMode } from '../../core/helpers/calculation';

export interface AppState {
  dataSet: number[]
  mean: number,
  median: number,
  stdDev: number,
  mode: number[],
  setDataSet: Function
}

const useAppState = (): AppState => {
  const [dataSet, setDataSet] = useState([]);
  const [{ mean, median, stdDev, mode }, setCalculatedValues] = useState({ 
    mean: 0, 
    median: 0,
    stdDev: 0,
    mode: [0]
  });

  useEffect(() => {
    const newMean = calculateMean(dataSet)
    const newMedian = calculateMedian(dataSet)
    const newStdDev = calculateStdDev(dataSet)
    const newMode = calculateMode(dataSet);
    setCalculatedValues({
      mean: newMean,
      median: newMedian,
      stdDev: newStdDev,
      mode: newMode
    });
  }, [dataSet])

  return {
    dataSet,
    mean,
    median,
    stdDev,
    mode,
    setDataSet,
  }
} 

export default useAppState;