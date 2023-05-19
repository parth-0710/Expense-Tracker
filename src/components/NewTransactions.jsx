import {Box,Typography,TextField,Button,styled} from '@mui/material'; 
import { useState } from 'react';

const Container=styled(Box)`
display:flex;
flex-direction:column;
&>h5,&>div,&>button{
    margin-top:30px;
}`

const NewTransactions=({setTransactions})=>{

    const[text,setText]=useState('');
    const[amount,setAmount]=useState(0);

    const addTransaction=(e)=>{
        const transaction={
            id:Math.floor(Math.random()*1000000),
            text:text,
            amount:+amount
        }
        setTransactions(prevState=>[transaction,...prevState]);
    }
    return(
        <Container>
        <Typography variant="h5">New Transaction</Typography>
        <TextField label="Enter Expense" onChange={(e)=>setText(e.target.value)}/>
        <TextField label="Enter Amount" onChange={(e)=>setAmount(e.target.value)}/>
        <Button variant="contained" onClick={()=>addTransaction()}>Add Transaction</Button>
        </Container>
    )
}

export default NewTransactions;