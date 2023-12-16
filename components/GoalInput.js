import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

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
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.buttons}>
						<Button
							color="#5e0acc"
							title="Add Goal"
							onPress={addGoalHandler}
						/>
					</View>
					<View style={styles.buttons}>
						<Button
							color="#8446d5"
							title="Cancel"
							onPress={props.onCancel}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginBottom: 20,
		paddingTop: 32,
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '100%',
		marginRight: 8,
		padding: 8,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	buttons: {
		width: 120,
		marginHorizontal: 8,
	},
});
