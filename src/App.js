import React from "react";
import "./App.css";
import GameStart from "./components/GameStart";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Yu-Gi-Ordle!</h1>
			</header>
			<GameStart></GameStart>
			<footer>
				<p>Developed by Blair</p>
				<p>
					Powered by the{" "}
					<a href="https://ygoprodeck.com/api-guide/">
						Yu-Gi-Oh! API from YGOPRODeck.com
					</a>
				</p>
				<a href="https://www.freepik.com/free-vector/neon-purple-lights-background-arrow-style_8152351.htm#query=abstract%20purple&position=2&from_view=search&track=sph">
					Image by starline
				</a>{" "}
				on Freepik
			</footer>
		</div>
	);
}

export default App;
