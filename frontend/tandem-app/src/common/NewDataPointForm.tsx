import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';

interface NewDataPointFormProps {
  onSubmitNewDataPoint: (input: number) => void
}

const validateInput = (input: string): number => {
  return Number(input) === NaN ? 0 : Number(input);
}

const NewDataPointForm = ({ onSubmitNewDataPoint }: NewDataPointFormProps) => {
  const [inputVal, setInputVal] = useState(0);
  return (
    <>
      <Input style={{ width: '50%' }} 
        placeholder="Placeholder" 
        onChange={(e) => setInputVal(validateInput(e.target.value))} />
      <Button color="primary" onClick={() => onSubmitNewDataPoint(inputVal)}>Submit</Button>
    </>
  )
}

export default NewDataPointForm;