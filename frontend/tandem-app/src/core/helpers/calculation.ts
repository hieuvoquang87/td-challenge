


export const calculateMean = (dataSet: number[]): number => {
  const sum = dataSet.reduce((acc, num) => {
    return acc + num;
  }, 0)
  return dataSet.length > 0 ? sum / dataSet.length : 0;
} 

export const calculateMedian = (dataSet: number[]) => {
  const len = dataSet.length;
  const sortedDataSet = dataSet.sort();
  const mid = Math.ceil(len / 2);
  console.log(sortedDataSet[mid], sortedDataSet[mid - 1])
  const median = len % 2 == 0 ? (sortedDataSet[mid] + sortedDataSet[mid - 1]) / 2 : sortedDataSet[mid - 1];
  return median;
} 
export const calculateStdDev = (dataSet: number[]) => {
  const avg = calculateMean(dataSet);

  const squareDiffs = dataSet.map(function(value){
    const diff = value - avg;
    const sqrDiff = diff * diff;
    return sqrDiff;
  });
  const avgSquareDiff = calculateMean(squareDiffs);
  const stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
} 
export const calculateMode = (dataSet: number[]) => {
  const sortedDataSet = dataSet.sort();
  const modes: number[] = [];
  const count: number[] = [];
  let maxIndex: number = 0;

  for (let i = 0; i < sortedDataSet.length; i += 1) {
    const number = sortedDataSet[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (let i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

  return modes;
} 