import './App.css';
import MyCounter from "./components/MyCounter";
import Bucket from "./components/Bucket";
import Game from "./components/Game";
import styled from 'styled-components'


const Wrapper = styled.button`
  display: flex;
  margin-bottom: 100px;
`


const counters = [
    {id: 1, initial: 6, min: -5, max: 10},
    {id: 2, initial: 5},
    {id: 3},
];

const products = [
    {id: 1, name: "Product 1", price: 1000, min: 1, max: 5},
    {id: 2, name: "Product 2", price: 1000, min: 1, max: 2},
    {id: 3, name: "Product 3", price: 1000, min: 2, max: 10},
];

function App() {
    return (
        <div>
            <Wrapper>
                {
                    counters.map(counter => <MyCounter key={counter.id} counter={counter}/>)
                }
            </Wrapper>
            <Bucket products={products}/>
            <Game/>
        </div>
    );
}

export default App;
