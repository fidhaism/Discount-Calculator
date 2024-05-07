import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [output, setOutput] = useState(0);
  const [saving, setSaving] = useState(0);

  const calculate = () => {
    const result = amount - (amount * (discount / 100));
    setOutput(result);
    const save = amount - result;
    setSaving(save);
  };

  const reset = () => {
    setAmount(0);
    setDiscount(0);
    setSaving(0);
    setOutput(0);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h2>DISCOUNT CALCULATOR</h2>
        </div>
        <div className="form">
          <div className="input">
            <TextField
              id="outlined-basic"
              label="Price"
              value={amount || ""}
              onChange={(e) => setAmount(e.target.value)}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Discount%"
              value={discount || ""}
              onChange={(e) => setDiscount(e.target.value)}
              variant="outlined"
            />
          </div>
          <div className="button">
            <Button variant="contained" onClick={calculate} color="success">
              Calculate
            </Button>
            <Button variant="contained" onClick={reset} color="error">
              Reset
            </Button>
          </div>
        </div>
        <hr />
        <div className="t">
          <h3>
            Discount Amount: <span style={{ color: 'red' }}>₹ {output}</span>
          </h3>
          <br />
          <h3>
            You Saved: <span style={{ color: 'green' }}>₹ {saving}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
