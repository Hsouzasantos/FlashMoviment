/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

export const App = () => {

	const [toggle, setToggle] = useState(true);

	const handleChangeToggle = () => setToggle((oldToggle) => !oldToggle);

	useEffect(() => {
		Torch.switchState(toggle);
	}, [toggle]);

	useEffect(() => {
		const subscription = RNShake.addListener(() => {
			setToggle((oldToggle) => !oldToggle);
		});

		return () => subscription.remove();
	}, [])

	return (
		<View style={toggle ? style.container : style.containerLight}>
			<TouchableOpacity onPress={handleChangeToggle}>
				<Image style={toggle ? style.lightingOn : style.lightingOff} source={toggle ? require('./assets/icons/eco-light-off.png') : require('./assets/icons/eco-light.png')} />

				<Image style={style.dioLogo} source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')} />
			</TouchableOpacity>
		</View >
	)


	const style = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: 'black',
			alignItems: 'center',
			justifyContent: 'center',
		},
		containerLight: {
			flex: 1,
			backgroundColor: 'white',
			alignItems: 'center',
			justifyContent: 'center',
		},
		lightingOn: {
			resize: 'contain',
			alignSelf: 'center',
			width: 150,
			height: 150
		},
		lightingOn: {
			resize: 'contain',
			alignSelf: 'center',
			tintColor: 'white',
			width: 150,
			height: 150
		},
		dioLogo: {
			resize: 'contain',
			alignSelf: 'center',
			width: 250,
			height: 250
		}
	})
}