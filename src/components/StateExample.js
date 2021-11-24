import { useState } from "react";

const StateExample = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const onUserInput = (event) => {
        setInput(event.target.value);
        setHistory([...history, event.target.value]);
    }

    const historyList = history.map((inputValue, id) => <li key={id} >{inputValue}</li>)
    return (
        <div data-testid="use-state">
            <h2>useState Example</h2>
            <div>
                <input type="text" data-testid="use-state-input" onChange={onUserInput}/>
            </div>
            <div>
                <span data-testid="user-state-display-span">{input}</span>
            </div>
            <ul className="history-list" data-testid="user-state-history-list">
                {historyList}
            </ul>
        </div>
     );
}
 
export default StateExample;