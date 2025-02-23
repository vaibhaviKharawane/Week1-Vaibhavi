import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddExpense = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/expenses', { description, amount })
      .then(() => {
        alert('Expense added successfully!');
        navigate('/expenses');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Description" 
          className="form-control mb-3" 
          value={description} 
          onChange={(event) => setDescription(event.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Amount" 
          className="form-control mb-3" 
          value={amount} 
          onChange={(event) => setAmount(event.target.value)} 
          required 
        />
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
