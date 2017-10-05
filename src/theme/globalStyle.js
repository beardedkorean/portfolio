import { injectGlobal } from 'styled-components';
import { grey } from 'theme/variables';

/* eslint-disable */
injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=VT323');

	body {
		font-family: 'VT323', monospace;
		font-size: 24px;
		color: ${grey};
	}

	h1, h2, h3 {
		font-weight: normal;
	}
`