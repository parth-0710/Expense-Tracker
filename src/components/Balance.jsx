import {Box,Typography,styled} from '@mui/material';

const Balancetext =styled(Typography)`
fonst-size=25px;
margin-bottom:20px;
`



const Balance=({transactions})=>{

    const amount=transactions.map(transaction=>transaction.amount);
    const total=amount.reduce((amount,item)=>(amount+=item),0).toFixed(2);
    return (
        <Box>
            <Balancetext>Balance:₹{total}</Balancetext>
        </Box>
    )
}

export default Balance;