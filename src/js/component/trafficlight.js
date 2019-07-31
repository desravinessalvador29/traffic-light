import React from "react";

//create your first component
export class Trafficlight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: ""
		};
	}

	render() {
		let redExtraClass = "";
		let yellowExtraClass = "";
		let greenExtraClass = "";

		if (this.state.clickedLight === "red") {
			redExtraClass = "selected";
		} else if (this.state.clickedLight === "yellow") {
			yellowExtraClass = "selected";
		} else if (this.state.clickedLight === "green") {
			greenExtraClass = "selected";
		}

		return (
			<div>
				<div className="trafficTop" />
				<div className="container">
					<div
						className={"red-light " + redExtraClass}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"yellow-light " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"green-light " + greenExtraClass}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
