import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from 'src/View/expo/navigation/AppNavigator';
import Component, { mapStateToProps } from 'src/View/expo/ViewComponent';
import { createStore } from 'redux'
import { connect } from 'react-redux';
import reducers from 'src/reducers';
import RootView from 'src/View/expo/RootView';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

const Container = ({ store }) => (
	<Provider store={store}>
		<RootView />
	</Provider>
)
Container.propTypes = {
	store: PropTypes.object.isRequired
}

let contentStore = createStore(reducers);
export default class App extends Component {
	render() {
		return (
			<Container store={contentStore}/>
		);
	}
}
