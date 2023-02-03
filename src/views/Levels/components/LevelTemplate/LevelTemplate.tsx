// imports from 3rd party libraries
import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// components
import { CodeEditor } from 'views/Levels/components/CodeEditor';
import { Instructions } from 'views/Levels/components/Instructions';
import { Output } from 'views/Levels/components/Output';

// data
import { levels } from 'data/levels';

export const LevelTemplate = () => {
	const { levelNumber } = useParams();

	const [currentLevel, setCurrentLevel] = useState(
		levels[Number(levelNumber) - 1]
	);

	useEffect(() => {
		setCurrentLevel(levels[Number(levelNumber) - 1]);
	}, [levelNumber]);

	const handleSubmit = () => {
		console.log('submit');
	};

	return (
		<>
			<Stack
				spacing={2}
				sx={{
					marginTop: '20px',
				}}
			>
				<Instructions instructions={currentLevel.instructions} />
				<Stack direction="row">
					<Button
						onClick={handleSubmit}
						variant="contained"
						size="large"
						sx={{
							width: 'fit-content',
						}}
					>
						Submit
					</Button>
				</Stack>

				<Stack
					direction="row"
					sx={{
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<CodeEditor />
					<Output />
				</Stack>
			</Stack>
		</>
	);
};
