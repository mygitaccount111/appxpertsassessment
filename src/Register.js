import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    branchCode: '',
    customerId: '',
    customerName: '',
    email: '',
    password: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      OrgId: 3,
      BranchCode: form.branchCode,
      B2CCustomerId: form.customerId,
      B2CCustomerName: form.customerName,
      EmailId: form.email,
      Password: form.password,
      MobileNo: form.mobile,
      IsActive: true,
      IsApproved: true,
      CreatedBy: 'user',
      CreatedOn: new Date().toISOString(),
      ChangedBy: 'user',
      ChangedOn: new Date().toISOString(),
    };

    try {
      const response = await axios.post('https://catchyfiveapi.appxes-erp.in/B2CCustomerRegister/Create', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="branchCode" placeholder="Branch Code" onChange={handleChange} /><br />
        <input type="text" name="customerId" placeholder="Customer ID" onChange={handleChange} /><br />
        <input type="text" name="customerName" placeholder="Customer Name" onChange={handleChange} /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
        <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
