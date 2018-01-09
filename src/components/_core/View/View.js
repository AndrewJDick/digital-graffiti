import React from 'react';
import styled from 'styled-components';

const Grid = styled.main`
	background-color: red;
	height: 100vh;
`;

function View({ children }) {
	return <Grid>{children}</Grid>;
}

export default View;
