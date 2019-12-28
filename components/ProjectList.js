import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import React, { Fragment, PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "./Router";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const GET_USERS = gql`
	query users($limit: Int, $offset: Int) {
		users(limit: $limit, offset: $offset) {
			id
			email
			country {
				id
				name
			}
			city {
				id
				name
			}
			state {
				name
			}
			birthdate
			gender
			contactnumber
			skills
		}
	}
`;
const allUsersQueryVars = {
	offset: 0,
	limit: 2
};

const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: "#3b4161",
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const styles = theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(3),
		overflowX: "auto"
	},
	table: {
		minWidth: 700
	},
	icon: {
		margin: theme.spacing(1),
		fontSize: 20,
		color: "rgba(0, 0, 0, 0.54)",
		cursor: "pointer"
	},
	button: {
		margin: theme.spacing(1)
	},
	disabledMenu: {
		"pointer-events": "none",
		color: "#AAA"
	}
});

class ProjectList extends PureComponent {
	state = {
		openProjectForm: false,
		projectid: "",
		projectdata: ""
	};

	getStripedStyle(index) {
		return { background: index % 2 ? "#fafafa" : "#f2f2f2" };
	}

	render() {
		const { classes } = this.props;
		let projectinlineform = "";
		let disablemenu = "";
		let total_page = "";

		return (
			<Query
				query={GET_USERS}
				variables={allUsersQueryVars}
				fetchPolicy="cache-and-network"
				errorPolicy="ignore"
			>
				{({ loading, error, data: { users }, fetchMore }) => {
					if (error) return <div>Something went wrong..</div>;
					if (loading) return <div>Loading...</div>;

					return (
						<Fragment>
							<Paper className={classes.root}>
								<Table className={classes.table}>
									<TableHead>
										<TableRow>
											<CustomTableCell>Title</CustomTableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{users.map((userlist, index) => {
											//total_page = project.next_records;
											return (
												<TableRow
													className={classes.userlist}
													key={userlist.id}
													style={this.getStripedStyle(index)}
												>
													<CustomTableCell component="th" scope="row">
														{userlist.email}
													</CustomTableCell>
												</TableRow>
											);
										})}
									</TableBody>
								</Table>
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}
									onClick={() => loadMoreUsers(projectlist, fetchMore)}
								>
									{" "}
									{loading ? "Loading..." : "Show More"} >
								</Button>
							</Paper>
						</Fragment>
					);
				}}
			</Query>
		);
	}
}

function loadMoreUsers(users, fetchMore) {
	fetchMore({
		variables: {
			offset: users.length
		},
		updateQuery: (previousResult, { fetchMoreResult }) => {
			console.log("New Result", fetchMore);
			console.log("Old Result", previousResult.users);
			if (!fetchMoreResult) {
				return previousResult;
			}
			return Object.assign({}, previousResult, {
				// Append the new posts results to the old one
				users: [...previousResult.users, ...fetchMoreResult.users]
			});
		}
	});
}

export default withStyles(styles)(ProjectList);
