import React, { Component } from 'react';
import { View, AsyncStorage, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';
import styles from './styles';

export default class Header extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            dispatch: PropTypes.func,
        }).isRequired,
    };

    logout = () => {
        AsyncStorage.removeItem('@Githuber:username')
            .then(() => {
                const { dispatch } = this.props.navigation;
                console.tron.log(dispatch);

                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Welcome' }),
                    ],
                });

                dispatch(resetAction);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Githuber</Text>
                <TouchableOpacity onPress={this.logout}>
                    <Icon name="exchange" size={14} color={colors.primary} />
                </TouchableOpacity>
            </View>
        );
    }
}
