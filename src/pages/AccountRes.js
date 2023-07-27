import React, { Component, useEffect, useState } from "react";
import "../Css/Transactionhistory.css";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { Button } from "@mui/material";

function AccountReq()  {
  const [transactions,setTransactions]=useState([]);
  useEffect( () => {
  axios.get("http://127.0.0.1:8080/api/auth/getAccountReq")
  .then(response =>{
   setTransactions(response.data);
  })  
  .catch(error =>{
    alert(error)
   console.log(error);
  });
 },[]);
 const deleteById = (id)=>{
    axios.delete("http://127.0.0.1:8080/api/auth/deleteaccReq/"+id);
 }
 const AddById = (id)=>{
    axios.post("http://127.0.0.1:8080/api/auth/addtoacc/"+id);
 }
  return (
    <div className="history">
    <Navbar/>
    <div className="history_container">
    <div className="transaction-history">
      <h2>Account Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Account id</th>
            <th>Branch id</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.account_id}>
            <td>{transaction.account_id}</td>
            <td>{transaction.branch.branch_id}</td>
              <td>{transaction.account_no}</td>
              <td><Button onClick={AddById(transaction.account_id)}>ADD ACCOUNT</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default AccountReq;
