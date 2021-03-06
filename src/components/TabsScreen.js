import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import ScrollableTabView, {DefaultTabBar } from 'react-native-scrollable-tab-view';
import TabBar from './widgets/TabBar';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

import styles from '../styles.js';
import stylesVars from '../stylesVars.js';

export default class TabsScreen extends Component {
	render() {
		return (
			<View style={styles.container}>

				<ScrollableTabView
					locked={true}
					style={{marginTop: 20 }}
					tabBarBackgroundColor={stylesVars.green}
					tabBarActiveTextColor='white'
					tabBarInactiveTextColor='white'
					renderTabBar={() => <TabBar />}>
					<Text tabLabel='ios-photos'>Flux Photos</Text>
					<Text tabLabel='ios-list'>Tâches</Text>
					<Text tabLabel='ios-person'>Compte</Text>
				</ScrollableTabView>

				<ActionButton buttonColor={stylesVars.pink}>
					<ActionButton.Item buttonColor={stylesVars.pink} onPress={Actions.LoginScreen}>
						<Icon name="md-create" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor={stylesVars.pink} onPress={Actions.LoginScreen}>
						<Icon name="ios-aperture" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor={stylesVars.pink} onPress={Actions.LoginScreen}>
						<Icon name="ios-leaf" style={styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			</View>
		);
	}
}
