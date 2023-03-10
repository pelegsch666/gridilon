// imports rom 3rd party libraries
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

// components
import { Navbar } from 'components/Navbar';
import { Router } from 'components/Router';

// styles
import './App.css';

// store
import {
	currentLevelIndexState,
	currentLevelState,
	levelsState,
	themeState,
} from 'store';

// helpers
import { useEffect } from 'react';
import { themeHelpers } from 'utils/helpers/themeHelpers';

// data
import { levels } from 'data/levels';

export const App = () => {
	const theme = useRecoilValue(themeState);
	const setLevels = useSetRecoilState(levelsState);
	const { levelNumber } = useParams();
	const [currentLevelIndex, setCurrentLevelIndex] = useRecoilState(
		currentLevelIndexState
	);

	const setCurrentLevel = useSetRecoilState(currentLevelState);

	useEffect(() => {
		setLevels(levels);
	}, [setLevels]);

	useEffect(() => {
		if (levelNumber) {
			const index = Number(levelNumber) - 1;
			setCurrentLevelIndex(index);
		}
	}, [levelNumber, setCurrentLevelIndex]);

	useEffect(() => {
		setCurrentLevel(levels?.[currentLevelIndex]);
	}, [currentLevelIndex, setCurrentLevel]);

	return (
		<ThemeProvider theme={createTheme(themeHelpers.getDesignTokens(theme))}>
			<CssBaseline />
			<>
				<Navbar />
				<Router />
			</>
		</ThemeProvider>
	);
};
