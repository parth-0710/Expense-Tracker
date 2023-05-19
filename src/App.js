import React, { useState } from "react";
import "./App.css";


import { Box, Typography, styled } from "@mui/material";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransactions from "./components/NewTransactions";
import Transactions from "./components/Transactions";


const Header = styled(Typography)`
margin:10px 0px;
fonst-size:36px;
color:blue;
text-transform:uppercase;
`
const Component = styled(Box)`
display:flex;
padding:10px;
border-radius:20px;
margin:auto;
background:#fff;
width:800px;
 & > div{
  height:70vh;
  width:50%;
  padding:10px;
}
`

function App() {

  const [transactions, setTransactions] = useState([
    { id: 1, text: "Cash", amount: 100 },


  ])
  return (
    <Box className="App" >
      <Header><h1>Expense Tracker</h1></Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransactions setTransactions={setTransactions} />
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions} />
        </Box>
      </Component>
    </Box>
  );
}
export default App;