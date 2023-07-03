import React from "react"
import { Autocomplete } from "@react-google-maps/api" //autocompletes search
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core"
import searchIcon from "@material-ui/icons/Search"

const Header = () => {
	return (
		<div>
			<AppBar position='static'>
				<Toolbar className={classes.Toolbar}>
					<Typography variant="h5" className={classes.title}>
						Travel Advisor
					</Typography>
					<Box display='flex'>
						<Typography variant="h6" className={classes.title}>
							Explore New Places
						</Typography>
						<Autocomplete>
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<searchIcon />
								</div>
								<InputBase
									placeholder='Seach...'
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
								></InputBase>
							</div>
						</Autocomplete>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
