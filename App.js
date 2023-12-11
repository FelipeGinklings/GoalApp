import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	return (
		// Old code for the initial classes
		// <View style={styles.container}>
		// 	<View>
		// 		<Text style={styles.dummyText}>Another piece of text!</Text>
		// 	</View>
		// 	<Text style={styles.dummyText}>Hello World!</Text>
		// 	<Button title="Tap Me!" />
		// </View>
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
				/>
				<Button title="Add Goal" />
			</View>
			<View>
				<Text>List of goals...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	// Old code for the initial classes
	// container: {
	// 	flex: 1,
	// 	backgroundColor: '#fff',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// },
	// dummyText: {
	// 	margin: 16,
	// 	borderWidth: 1,
	// 	borderColor: 'red',
	// 	padding: 16,
	// },

	appContainer: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
});
