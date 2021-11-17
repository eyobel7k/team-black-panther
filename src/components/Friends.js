import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Linking} from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WPAPI_PATHS, wpApiFetch } from "../services/WPAPI";
import { Text, ListItem, Avatar } from "react-native-elements";

function Friends({ navigation }) {
	const [members, setMembers] = useState([]);
	const [selectedMember, setSelectedMember] = useState({});
	const onPress = (selectedMemberId) => {
		setSelectedMember(members[selectedMemberId]);
	};

	useEffect(() => {
		wpApiFetch({ path: WPAPI_PATHS.buddypress.members })
			.then((data) => {
				setMembers(data);
				console.log(data);
			})

			.catch((error) => console.log(error));
	}, []);

	return (
		<ThemeLoggedIn navigation={navigation}>
			<View style={styles.container}>
				<View style={styles.title}>
					<Text h4> Members</Text>
				</View>
				<View style={styles.body}>
					{members.map((member, index) => (
						<ListItem
							Component={TouchableOpacity}
							label={member.name}
							key={index}
							value={member.name}
							bottomDivider
						>
							<Avatar source={{ uri: member.avatar_urls.full }} />

							<ListItem.Content>
								
									<ListItem.Title>
										{member.name}
										{member.thumb}
										
									</ListItem.Title>
							
							</ListItem.Content>
							<ListItem.Chevron color="white" />
						</ListItem>
					))}
				</View>
			</View>
		</ThemeLoggedIn>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#efd595",
	},
	body: {
		backgroundColor: "#efd595",
		// height: "10%",
		width: "60%",
		textAlign: "center",
		justifyContent: "center",
		marginHorizontal: "20%",
		// alignItems: "center",
	},
	text: {
		margin: 5,
		fontSize: 14,
		fontWeight: "bold",
		// fontFamily: "Serif",
	},
	title: {
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Friends;
