import { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

const GoalInput = (props) => {
	const [enteredGoalText, setEnteredGoalText] = useState(['']);

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	};
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Your course goal!"
				onChangeText={goalInputHandler}
        value={enteredGoalText}
			/>
			<Button color="#5e0acc" title="Add Goal" onPress={addGoalHandler} />
		</View>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '66%',
		marginRight: 8,
		padding: 8,
	},
});
