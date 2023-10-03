import React, { useState } from "react";
import axios from "axios";

const GameStart = () => {
	const [data, setData] = useState({ data: [] });
	const [cardFound, setCardFound] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [giveUp, setGiveUp] = useState(false);
	const [err, setErr] = useState("");

	const getRandomCard = async () => {
		localStorage.clear();
		setErr("");
		setIsLoading(true);
		setCardFound(false);
		const randomID = Math.floor(Math.random() * (1245 + 1));
		try {
			const { data } = await axios.get(
				`https://db.ygoprodeck.com/api/v7/cardinfo.php`,
				{
					headers: {
						Accept: "application/json",
					},
				}
			);
			const monstersOnly = data.data.filter((card) =>
				card.type.includes("onster")
			);
			const chosenCard = monstersOnly[randomID];
			localStorage.setItem("card", JSON.stringify(chosenCard));
			setData(chosenCard);
		} catch (err) {
			setErr(err.message);
		} finally {
			setCardFound(true);
			setIsLoading(false);
		}
	};

	const adjustGiveUp = () => {
		if (window.confirm("Are you sure you want to give up?")) {
			setGiveUp(!giveUp);
		}
	};

	const restart = () => {
		if (window.confirm("Are you sure you want to restart?")) {
			setCardFound(!cardFound);
			setGiveUp(false)
		}
	};

	return (
		<>
			{err && <h2>{err}</h2>}
			{!cardFound && (
				<input onClick={getRandomCard} type="submit" value="Start Game!" />
			)}
			{isLoading && <h2 className="App-header">Getting your card...</h2>}

			{cardFound && (
				<>
					<h2 className="App-header">Your Card has been chosen!</h2>
					<div className="dualButtonsModified">
						<button className="giveUp" onClick={adjustGiveUp}>
							Give up and Reveal Card Name?
						</button>
						<button className="inputButton" onClick={restart}>
							Restart the Game?
						</button>
					</div>
					{giveUp && <h2 className="nameReveal">{data.name}</h2>}
					{/* <QuestionInput />
					<QuestionDisplay />
					<br />
					<CardImageFilter /> */}
				</>
			)}
		</>
	);
};

export default GameStart;
