import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles.js';
import I18n from '../configs/i18n';

export default class SubscribeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
			passwordConfirmation: ''
		};
	}

	goToWelcomeScreen() {
		// Check validity of inputs
		// Subscribe new user

		Actions.WelcomeScreen({
			username: this.state.username,
			password: this.state.password
		});
	}

	render() {
		return (
			<View style={styles.pageContainer}>
				<View style={[styles.logoContainer, {flex: 0.25}]}>
					<Image
						resizeMode="contain"
						source={require('../../assets/images/launch_logo.png')}
						style={styles.logoImage}/>
				</View>

				<View style={styles.inputs}>
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>{I18n.t('email')}</Text>
						<TextInput
							keyboardType='email-address'
							style={styles.input}
							autoFocus={true}
							autoCapitalize='none'
							autoCorrect={false}
							returnKeyType='next'
							placeholderTextColor='transparent'
							onChangeText={(email) => this.setState({email: email.toLowerCase()})}
							/>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel} color='rgb(0,183,0)'>{I18n.t('username')}</Text>
						<TextInput
							style={styles.input}
							autoFocus={false}
							autoCapitalize='none'
							autoCorrect={false}
							returnKeyType='next'
							placeholderTextColor="transparent"
							onChangeText={(username) => this.setState({username})}
							/>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel} color='rgb(0,183,0)'>{I18n.t('password')}</Text>
						<TextInput
							password={true}
							style={styles.input}
							autoFocus={false}
							autoCapitalize='none'
							autoCorrect={false}
							returnKeyType='next'
							placeholderTextColor="transparent"
							secureTextEntry={true}
							onChangeText={(username) => this.setState({password})}
							/>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel} color='rgb(0,183,0)'>{I18n.t('passwordConfirmation')}</Text>
						<TextInput
							password={true}
							style={styles.input}
							autoFocus={false}
							autoCapitalize='none'
							autoCorrect={false}
							returnKeyType='next'
							placeholderTextColor="transparent"
							onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
							/>
					</View>

					<TouchableHighlight style={[styles.touchableButton, {marginTop: 40}]} underlayColor='transparent' onPress={this.goToWelcomeScreen.bind(this)}>
						<View style={styles.buttonGreen}>
							<Text style={styles.buttonTextWhite}>{I18n.t('connection')}</Text>
						</View>
					</TouchableHighlight>
				</View>

			</View>
		);
	}
}
