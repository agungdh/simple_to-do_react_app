import React from 'react';
import ReactDOM from 'react-dom';

function App() {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-auto">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="To-Do" />
						<div className="input-group-prepend">
							<button className="btn btn-success">
								<i className="fa fa-check" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
