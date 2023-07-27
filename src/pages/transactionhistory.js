import React, { Component, useEffect, useState } from "react";
import "../Css/Transactionhistory.css";
import Navbar from "../Component/Navbar";
import axios from "axios";

function TransactionHistory()  {
  const [transactions,setTransactions]=useState([]);
  useEffect( () => {
  axios.get("http://127.0.0.1:8080/api/auth/getTransaction")
  .then(response =>{
   setTransactions(response.data);
  })  
  .catch(error =>{
    alert(error)
   console.log(error);
  });
 },[]);
  return (
    <div className="history">
    <Navbar/>
    <div className="history_container">
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>To</th>
            <th>Amount</th>
            <th>Available balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.time}</td>
            <td>{transaction.to_account_id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.availbal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default TransactionHistory;
