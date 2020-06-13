import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { pxToVh, pxToVw, Theme } from './../theme';
import Header from '../Components/Header';
import Checkbox from '@material-ui/core/Checkbox';
import CardDepth from '../Components/cardDepth';
import CardComponent from '../Components/cardEmbossed';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Toolbar } from '@material-ui/core';

const style = (theme) => ({
	root: {
		height: '100vh',
		background: Theme.boxColor,
	},
	content: {
		width: '100%',
		height: pxToVh(1080 - 99),
		backgroundColor: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkbox: {
		color: 'white',
	},
	released: {
		boxShadow: '10px 10px 14px 1px rgba(00,00,00,0.2)',
		background: Theme.buttonColor.color1,
	},
});

class Practice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question:'',
			correctOption: 0,
			selectedOption: 0,
			option1: '',
			option2: '',
			option3: '',
			option4: '',
			option5: '',
			id: 1,
		};

		this.fetchQuestions(1);
	}

	fetchQuestions = (id) => {
		// const data = {
		// 	questionId: 1,
		// 	question:
		// 		'If ‘A’ is the mother of ‘B’ and ‘C’; and ‘D’ is the husband of ‘C’, then what is ‘A’ to ‘D’?',
		// 	fkChapterId: 13,
		// 	hasOptions: true,
		// 	option1: 'Mother',
		// 	option2: 'Son-in-Law',
		// 	option3: 'Mother-in-Law',
		// 	option4: 'Aunt',
		// 	option5: 'Cannot be determined',
		// 	videoLink: null,
		// 	imageLink: null,
		// 	hint: null,
		// 	correctOption: 3,
		// 	deleted: false,
		// };

		id > 0 &&
			axios
				.get(`http://localhost:8089/api/question?id=${id}`)
				.then((res) => {
					this.setState({
						question: res.data.question,
						correctOption: res.correctOption,
						option1: res.data.option1,
						option2: res.data.option2,
						option3: res.data.option3,
						option4: res.data.option4,
						option5: res.data.option5,
						id: id,
					});
				})
				.catch((error) => console.log('Sign In Api Error', error));
	};

	render() {
		const { classes } = this.props;
		const option = [
			this.state.option1,
			this.state.option2,
			this.state.option3,
			this.state.option4,
			this.state.option5,
		];
		return (
			<div className={classes.root}>
				<Toolbar />
				<div className={classes.content}>
					<div style={{ height: '90%', width: '90%' }}>
						<CardComponent
							children={
								<div
									style={{ height: '100%', width: '100%', display: 'block' }}>
									<div
										style={{
											height: '40%',
											width: '100%',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											padding: '10%',
											boxSizing: 'border-box',
										}}>
										<Typography
											style={{
												fontFamily: 'Poppins',
												color: 'white',
												letterSpacing: pxToVw(1.7),
												fontSize: Theme.fontSize.size4,
											}}>
											{this.state.question}
										</Typography>
									</div>
									<div
										style={{
											height: '40%',
											width: '100%',
											display: 'block',
										}}>
										{option.map(
											(value, index) =>
												value != null && (
													<div
														style={{
															height: '20%',
															width: '100%',
															display: 'flex',
															paddingLeft: '13%',
															boxSizing: 'border-box',
															alignItems: 'center',
															justifyContent: 'start',
														}}>
														<Checkbox
															classes={{
																root: classes.checkbox,
															}}
															style={{ color: 'white' }}
														/>
														<Typography
															style={{
																marginLeft: '1%',
																fontFamily: 'Poppins',
																fontSize: Theme.fontSize.size4,
																color: 'white',
															}}>
															{value}
														</Typography>
													</div>
												)
										)}
									</div>
									<div
										style={{
											height: '10%',
											width: '100%',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-around',
											paddingLeft: '15%',
											paddingRight: '15%',
											boxSizing: 'border-box',
										}}>
										<div
											style={{
												height: pxToVh(60),
												width: pxToVw(200),
												boxSizing: 'border-box',
												cursor: 'pointer',
											}}
											onClick={() => this.fetchQuestions(this.state.id - 1)}>
											<CardComponent
												classes={{
													root: classes.released,
												}}>
												<Typography
													style={{
														fontFamily: 'Poppins',
														fontSize: Theme.fontSize.size4,
														color: Theme.textColor.color2,
													}}>
													Previous
												</Typography>
											</CardComponent>
										</div>
										<div
											style={{
												height: pxToVh(60),
												width: pxToVw(200),
												boxSizing: 'border-box',
												cursor: 'pointer',
											}}>
											<CardComponent
												classes={{
													root: classes.released,
												}}>
												<Typography
													style={{
														fontFamily: 'Poppins',
														fontSize: Theme.fontSize.size4,
														color: Theme.textColor.color2,
													}}>
													Save & Next
												</Typography>
											</CardComponent>
										</div>
										<div
											style={{
												height: pxToVh(60),
												width: pxToVw(200),
												boxSizing: 'border-box',
												cursor: 'pointer',
											}}
											onClick={() => this.fetchQuestions(this.state.id + 1)}>
											<CardComponent
												classes={{
													root: classes.released,
												}}>
												<Typography
													style={{
														fontFamily: 'Poppins',
														fontSize: Theme.fontSize.size4,
														color: Theme.textColor.color2,
													}}>
													Next
												</Typography>
											</CardComponent>
										</div>
									</div>
								</div>
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(Practice);
