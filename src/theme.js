export const pxToVh = (px) => `${px * 0.09259}vh`;

export const pxToVw = (px) => `${px * 0.05208}vw`;

export const Theme = {
	innerBoxShadow: `inset 4px 3px 7px #C6CCE1 ,
    inset -3px -4px 7px white`,
	backgroundColor: '#FFFFFF',
	primaryColor: '#A7205F',
	boxColor:
		'transparent radial-gradient(farthest-corner at 100% 0%, #64B4D2 0%, #8167F2 31%, #8A51E4 69%, #8D3DDC 100%) 0% 0% no-repeat padding-box',
	textColor: {
		color1: 'white',
		color2: 'white',
		placeholder: '#8C44DF',
		heading: '#8C44DF',
	},
	buttonColor: {
		// color1: '#00C9B7',
		// color0: boxColor,
		color1: '#8D3DDC',
		color2: '#000',
	},
	fontSize: {
		size1: pxToVw(45),
		size2: pxToVw(35),
		size3: pxToVw(30),
		size4: pxToVw(25),
		size5: pxToVw(22),
	},
};
