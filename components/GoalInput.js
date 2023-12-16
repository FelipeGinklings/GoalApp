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
	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				></Image>
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
		backgroundColor: '#262626',
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
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '100%',
		padding: 8,
		borderColor: '#5e0acc',
		borderWidth: 2,
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
