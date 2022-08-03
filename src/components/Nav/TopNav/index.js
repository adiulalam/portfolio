import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import StartNav from "./StartNav";
import EndNav from "./EndNav";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: "black",
		display: "flex",
		flexDirection: "row",
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
}));

const TopNav = () => {
	const classes = useStyles();

	return (
		<div>
			{/* <CssBaseline /> */}
			<AppBar elevation={0} position="fixed" className={classes.appBar}>
				<StartNav />
				<div className={classes.grow} />
				<EndNav />
			</AppBar>
		</div>
	);
};

export default TopNav;
