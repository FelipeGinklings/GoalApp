import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState(['']);
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		// With this the list is able to update for every item entry
		// setCourseGoals((currentCourseGoals) => {
		// 	console.log(currentCourseGoals);
		// 	return [...currentCourseGoals, enteredGoalText];
		// });
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			enteredGoalText,
		]);
	};
	let key = 0;

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
				/>
				<Button
					color="#5e0acc"
					title="Add Goal"
					onPress={addGoalHandler}
				/>
			</View>
			<View style={styles.goalsContainer}>
				{courseGoals.map((goal) => (
					<View key={(key += 1)} style={styles.goalItem}>
						<Text style={styles.goalText}>{goal}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
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
	goalsContainer: {
		flex: 8,
	},
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	goalText: {
		color: 'white',
	},
});
