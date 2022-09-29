import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Great Quotes</div>
			<nav className={classes.nav}>
				<ul>
					<li>
<<<<<<< HEAD
						<NavLink activeClassName={classes.active} to="/quotes">
=======
						<NavLink activeClassName={classes.active} to="/qoutes">
>>>>>>> e0042231aadf20d938d57e7f284755e07dcfc92a
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to="/new-quote">
							Add a Quote
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
