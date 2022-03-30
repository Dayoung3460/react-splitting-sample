import './App.css';
import React, {Component, useState, Suspense} from "react";

const SplitMe = React.lazy(() => import('./SplitMe'))

function App() {
    const [visible, setVisible] = useState(false)
    const onClick = () => {
        setVisible(true)
    }
    return (
        <div className="App">
            <header className="App-header">
                <p onClick={onClick}>hi</p>
                <Suspense fallback={<div>loading...</div>}>
                    { visible && <SplitMe/> }
                </Suspense>
            </header>
        </div>
    )
}

export default App;
