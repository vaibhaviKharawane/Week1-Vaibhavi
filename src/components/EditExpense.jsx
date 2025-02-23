import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditExpense = () => {
  const { id } = useParams();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/expenses/${id}`)
      .then(res => {
        setDescription(res.data.description);
        setAmount(res.data.amount);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/expenses/${id}`, { description, amount })
      .then(() => {
        alert('Expense updated successfully!');
        navigate('/expenses');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Expense</h2>
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
        <button type="submit" className="btn btn-primary">Update Expense</button>
      </form>
    </div>
  );
};

export default EditExpense;
