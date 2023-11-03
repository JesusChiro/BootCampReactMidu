import ReactDOM from 'react-dom';
import { useState } from 'react';
import './index.css';

const WarningNotUsed = () => {
    return <h1>Todavia no se ha usado el contador</h1>
}

const ListOfClicks = ({ clicks }) => {
    console.log({ clicks });
    return <p>{clicks.join(', ')}</p>
}

const rootElement = document.getElementById('root')
const Counter = ({ number }) => <h1>{number}</h1>
const App = (props) => {
    //arriba
    const [contador, setContador] = useState(0)
    const handleClick = () => setContador(contador + 1)
    const handleClickDecrementar = () => setContador(contador - 1)
    const handleClickReset = () => setContador(0)
    const isEven = contador % 2 === 0

    //abajo
    const [clicks, setClicks] = useState([])
    const handleClickLeft = () => {
        setClicks(prevClicks => ([...prevClicks, 'L']))
    }
    const handleClickRight = () => {
        setClicks(prevClicks => ([...prevClicks, 'R']))
    }
    const handleReset = () => {
        setClicks([])
    }

    const left = clicks.filter(click => click === 'L')
    const right = clicks.filter(click => click === 'R')
    return (
        <>
            {/* //arriba */}
            <div>
                <section>
                    <p>El valor del contador es:</p>
                    <Counter number={contador} />
                    <p>{isEven ? 'Es par' : 'Es impar'}</p>
                    <button onClick={handleClickDecrementar}>Decrementar</button>
                    <button onClick={handleClick}>Incrementar</button>
                    <button onClick={handleClickReset}>Reset</button>
                    <br /><br /><br />
                </section>
                {/* //abajo */}
                <section>
                    {left.length}
                    <button onClick={handleClickLeft}>left</button>
                    <button onClick={handleClickRight}>right</button>
                    {right.length}
                    <p><button onClick={handleReset}>reset</button></p>
                    <p>Clicks totales:{clicks.length}</p>
                    {/* <p>{counters.mensaje}</p> */}
                    {clicks.length === 0 ? (
                        <WarningNotUsed />
                    ) : (<ListOfClicks clicks={clicks} />)}
                </section>
            </div>
        </>
    )
}
ReactDOM.render(<App />, rootElement);