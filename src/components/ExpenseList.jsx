import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/expenses')
      .then(res => setExpenses(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/expenses/${id}`)
      .then(() => {
        alert('Expense deleted successfully!');
        setExpenses(expenses.filter(expense => expense._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Expense List</h2>
      <Link to="/add-expense" className="btn btn-primary mb-3">Add Expense</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense._id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>
                <Link to={`/edit-expense/${expense._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={() => handleDelete(expense._id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
