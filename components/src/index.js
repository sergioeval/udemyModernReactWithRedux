import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = function() {
	return (
		<div className="ui container comments">
			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={faker.image.avatar()} />
				</a>
				<div className="content">
					<a href="/" className="author">
						SAM
					</a>
					<div>
						<span className="date">Today at 6:00PM</span>
					</div>
					<div className="text">Nice Blog post¡</div>
				</div>
			</div>
		</div>	
	)
};


ReactDOM.render(<App />, document.querySelector('#root'))

if (module.hot) {
	module.hot.accept();
}

