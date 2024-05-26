import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Username: form.username,
      Password: form.password,
      OrgId: 3,
      BranchCode: 'default',
    };

    try {
      const response = await axios.post('https://catchyfiveapi.appxes-erp.in/B2CCustomerRegister/CustomerLogin', data);
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data));
        history.push('/products');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
