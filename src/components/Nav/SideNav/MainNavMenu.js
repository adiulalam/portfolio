import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { grey } from "@material-ui/core/colors";
import clsx from "clsx";
import { List, makeStyles, useMediaQuery, useTheme, Typography } from "@material-ui/core";
import { portfolioContext } from "../../../App";
import NavItem from "../NavItem";
import Contacts from "../../Contacts";
import { toggleDrawer } from "../../../redux/actions/layout";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	img: {
		width: 110,
		height: 110,
		borderRadius: "50%",
	},
	mainNavLinks: {
		height: "30%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	profile: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	title: {
		marginTop: theme.spacing(2),
		fontWeight: 700,
		lineHeight: "1em",
	},
	subtitle: {
		color: grey[500],
	},
	contacts: {
		alignSelf: "center",
	},
	grow: {
		flexGrow: 1,
	},
}));

const MainNavMenu = () => {
	const { profilePic, fullName, career } = useContext(portfolioContext);

	const theme = useTheme();
	const classes = useStyles();
	const isMinScreenMd = useMediaQuery(theme.breakpoints.up("md"));
	const dispatch = useDispatch();
	const handleItemClick = () => {
		if (!isMinScreenMd) {
			dispatch(toggleDrawer());
		}
	};
	const Profile = ({ name, career }) => (
		<div className={classes.profile}>
			{profilePic ? (
				<img
					alt="profile"
					height='100px'
					width="100px"
					className={classes.img}
					src={profilePic.includes("https") ? profilePic : require(`./../../../assets/images/${profilePic}`)}
				/>
			) : (
				<Skeleton circle width="100px" height="100px" />
			)}
			<Typography variant="h5" className={classes.title}>
				{name}
			</Typography>
			<Typography variant="button" className={clsx(classes.subtitle)}>
				{career}
			</Typography>
		</div>
	);

	return (
		<List className={classes.root}>
			<Profile name={fullName} career={career} />
			<div className={classes.mainNavLinks}>
				<NavItem to="home" title="Home" onClick={handleItemClick} />{" "}
				<NavItem to="portfolio" title="Portfolio" onClick={handleItemClick} />
			</div>
			<div className={classes.grow} />
			<div className={classes.contacts}>
				<Contacts />
			</div>
		</List>
	);
};

export default MainNavMenu;
