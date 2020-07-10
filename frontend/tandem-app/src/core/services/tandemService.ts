import { TAMDEM_SERVICE_URL } from '../constants';

interface DataSetResponse {
  data: number[]
}

interface SetNewDataPointResponse {
  data: number[]
}

export const getDataSet = (): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    fetch(`${TAMDEM_SERVICE_URL}/data-sets/next`)
      .then(async (response) => {
        const result: DataSetResponse = await response.json()
        resolve(result.data)
      })
      .catch((error) => reject(error))
  })
}

export const setNewDataPoint = (input: number): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    fetch(`${TAMDEM_SERVICE_URL}/data-sets/data-point`, {
      method: 'post',
      body: JSON.stringify({ input }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(async (response) => {
        const result: SetNewDataPointResponse = await response.json()
        resolve(result.data)
      })
      .catch((error) => reject(error))
  })
}