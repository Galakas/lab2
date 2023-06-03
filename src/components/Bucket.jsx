import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useState} from "react";
import styled from 'styled-components'


const Wrapper = styled.div`
  margin-bottom: 100px;
  width: 700px;
`


const NewTableRow = (props) => {
    const {name, min, max, price} = props.product;
    const [count, setCount] = useState(min);

    function increase() {
        setCount(count + 1);
        props.setTotals(
            {
                quantity: props.totals.quantity + 1,
                totalSum: props.totals.totalSum + price
            }
        );
    }
    function reduce() {
        setCount(count - 1);
        props.setTotals(
            {
                quantity: props.totals.quantity - 1,
                totalSum: props.totals.totalSum - price
            }
        );
    }

    return <TableRow>
        <TableCell sx={{border: "1px solid black"}} component="th" scope="row">{name}</TableCell>
        <TableCell sx={{border: "1px solid black"}} >{price}</TableCell>
        <TableCell sx={{border: "1px solid black"}}>
            <Button variant="outlined" onClick={reduce} disabled={count === min}>-</Button>
            {count}
            <Button variant="outlined" onClick={increase} disabled={count === max}>+</Button></TableCell>
        <TableCell sx={{border: "1px solid black"}} align="center">{count * price}</TableCell>
    </TableRow>
}


const Bucket = (props) => {
    const {products} = props;

    function getInitQuantity(products) {
        let totalQuantity = 0;

        products.forEach((product) => {
            totalQuantity += product.min;
        });

        return totalQuantity;
    }

    function getInitTotalSum(products) {
        let totalSum = 0;

        products.forEach((product) => {
            totalSum += product.min * product.price;
        });

        return totalSum;
    }

    const [totals, setTotals] = useState({
        quantity: getInitQuantity(products),
        totalSum: getInitTotalSum(products)
    });

    return (
        <Wrapper>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor: "gray"}}>
                            <TableCell sx={{border: "1px solid black"}}><b>Name</b></TableCell>
                            <TableCell sx={{border: "1px solid black"}}><b>Price</b></TableCell>
                            <TableCell sx={{border: "1px solid black"}}><b>Quantity</b></TableCell>
                            <TableCell sx={{border: "1px solid black"}}><b>Total</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <NewTableRow key={product.id} product={product} totals={totals} setTotals={setTotals}/>
                            )
                        )}
                        <TableRow style={{backgroundColor: "gray"}}>
                            <TableCell sx={{border: "1px solid black"}} colSpan={2}><b>Totals</b></TableCell>
                            <TableCell sx={{border: "1px solid black"}}><b>{totals.quantity}</b></TableCell>
                            <TableCell sx={{border: "1px solid black"}}><b>{totals.totalSum}</b></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Wrapper>
    );
}
export default Bucket