import { useState } from 'react';
import {
	StyleSheet,
	View,
	Button,
	TextInput,
	Modal,
	Image,
} from 'react-native';

const GoalInput = (props) => {
	const [enteredGoalText, setEnteredGoalText] = useState(['']);

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	};

	const cleanInput = () => {
		props.onCancel();
		setEnteredGoalText('');
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
					// source="some/path/to/image.png" Making error on purposely
				></Image>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					placeholderTextColor="#474747"
					onChangeText={goalInputHandler}
					value={enteredGoalText.toString()} // Why?
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
							color="#f31282"
							title="Cancel"
							onPress={cleanInput}
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
		backgroundColor: '#353535',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: 112,
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		color: '#120438',
		borderWidth: 1,
		borderColor: '#5e0acc',
		backgroundColor: '#ebebeb',
		borderRadius: 6,
		width: '100%',
		borderWidth: 2,
		padding: 16,
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
