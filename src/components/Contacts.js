import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/";
import { LinkedIn, Email, GitHub } from "@material-ui/icons";
import { portfolioContext } from "../App";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		margin: theme.spacing(2),
	},
	icon: {
		margin: theme.spacing(0.5, 1),
		color: "white",
	},
}));

const Contacts = () => {
	const { email, github, linkedin } = useContext(portfolioContext);
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<a href={`mailto: ${email}`} target="_blank" rel="noopener noreferrer">
				<Email className={classes.icon} />
			</a>
			<a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
				<GitHub className={classes.icon} />
			</a>
			<a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer">
				<LinkedIn className={classes.icon} />
			</a>
		</div>
	);
};

export default Contacts;
