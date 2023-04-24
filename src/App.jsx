import { useState } from 'react';

const App = () => {
	const { increment, decrement, incrementStep, reset, counter } = useFunction();
	return (
		<>
			<h1>useReducer() Example</h1>
			<p>
				Value:<span>{counter.value}</span>
			</p>
			<p>
				Step:<span>{counter.step}</span>
			</p>
			<p>
				Clicks:<span>{counter.clicks}</span>
			</p>
			<div>
				<button onClick={increment}>Incrementar</button>
				<button onClick={decrement}>Decrementar</button>
				<button onClick={incrementStep}>Incrementar Step</button>
				<button onClick={reset}>Reset</button>
			</div>
		</>
	);
};

const useFunction = () => {
	const [counter, setCounter] = useState({
		value: 0,
		step: 1,
		clicks: 0
	});
	const increment = () => {
		setCounter({
			...counter,
			value: counter.value + counter.step,
			clicks: counter.clicks + 1
		});
	};
	const decrement = () => {
		setCounter({
			...counter,
			value: counter.value - counter.step,
			clicks: counter.clicks + 1
		});
	};
	const incrementStep = () => {
		setCounter({
			...counter,
			step: counter.step + 1
		});
	};
	const reset = () => {
		setCounter({
			value: 0,
			step: 1,
			clicks: 0
		});
	};
	return { increment, decrement, incrementStep, reset, counter };
};

export default App;
