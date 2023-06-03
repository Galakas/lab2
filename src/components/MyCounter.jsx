import React, {useState} from "react";
import {Button} from "@mui/material";
import styled from 'styled-components'


const Counter = styled.div`
  font-size: 20px;
`

const Wrapper = styled.div`
  margin: 10px;
`


const MyCounter = (props) => {
    const {initial, min, max} = props.counter;
    const [count, setCount] = useState(initial || 0);

    function increaseCount() {
        setCount(count + 1);
    }
    function reduceCount() {
        setCount(count - 1);
    }
    function resetCount() {
        setCount(initial || 0);
    }

    return (
        <Wrapper>
            <Counter>{count}</Counter>
            <Button variant="outlined" onClick={increaseCount} disabled={count === max}>+</Button>
            <Button variant="outlined" onClick={reduceCount} disabled={count === min}>-</Button>
            <Button variant="outlined" onClick={resetCount} disabled={count === (initial || 0)}>Reset</Button>
        </Wrapper>
    );
};

export default MyCounter