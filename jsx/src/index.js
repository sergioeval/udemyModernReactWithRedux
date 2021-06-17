// import the react and react dom libriries 
import React from 'react';
import ReactDOM from 'react-dom';




// create a react component 
const App = function() {
	const buttonText = 'Click Me';

	return (
		<div>
			<label className="label" htmlFor="name">
				Enter Name:
			</label>
			<input id="name" type="text" />
			<button style={{backgroundColor: 'blue', color:'white'}}>
				{buttonText}
			</button>
			
		</div>
	);
}

// take the react component and show it on the scren 
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
