import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import { Icon } from 'native-base';
import mainStyles from '../MainStyles';
import mainConstants from '../MainConstants';

const error_prefix = 'SharePage - NotificationHandler - ';

// const SUCCESS_COLOR = '#28a745';
const SUCCESS_COLOR = mainConstants.MAIN_COLOR;
const ERROR_COLOR = '#dc3545';
const WARNING_COLOR = '#ffc107';

export default class NotificationHandler extends Component {

    key = 1;

    constructor(props) {
        super(props);
        this.state = {
            loadingEnable: false,
            title: 'Đang cập nhật',
            icon: 'check',
            buttons: null,
            backgroundColor: SUCCESS_COLOR,
            content: '',
            callback: null,
        }
    }

    _showSuccessNotification = (title = '', content = 'SUCCESS', callback = null, buttons = null, timeout = 2000) => {
        try {
            this.setState({
                loadingEnable: true,
                title: title,
                content: content,
                buttons: buttons,
                backgroundColor: SUCCESS_COLOR,
                callback: callback,
            }, () => {
                if (this.state.buttons) {
                    if (callback != null) {
                        callback();
                    }
                } else {
                    this._hideNotification(timeout, () => {
                        if (callback != null) {
                            callback();
                        }
                    });
                }
            });                    
        } catch (error) {
            
        }
    };

    _showSuccessNotificationNotTimeout = (title = '', content = 'SUCCESS', callback = null, buttons = null, timeout = 2000) => {
        try {
            this.setState({
                loadingEnable: true,
                title: title,
                content: content,
                buttons: buttons,
                backgroundColor: SUCCESS_COLOR,
                callback: callback,               
            }, () => {
                
            });                    
        } catch (error) {
            
        }
    };

    _showErrorNotification = (title = '', content = 'UNSUCCESSFUL', callback = null, buttons = null, timeout = 2000) => {
        try {
            this.setState({
                loadingEnable: true,
                title: title,
                content: content,
                buttons: buttons,
                backgroundColor: ERROR_COLOR,
                callback: callback,
                icon: 'times',
            });
        } catch (error) {
            
        }
    }

    _showWarningNotification = (title = '', content = '', callback = null, buttons = null, timeout = 2000) => {
        try {
            this.setState({
                loadingEnable: true,
                title: title,
                content: content,
                buttons: buttons,
                backgroundColor: WARNING_COLOR,
                callback: callback,
                icon: 'exclamation-triangle',
            }, () => {
                
            });                    
        } catch (error) {
            
        }
    }

    _hideNotification = (timeout = 1000, callback = null) => {
        try {
            setTimeout(() => {
                this.setState({
                    loadingEnable: false,
                    buttons: null,
                    callback: null,
                }, () => {
                    if (callback != null) {
                        callback();
                    }
                });
            }, timeout);
        } catch (error) {
            
        }
    }

    render() {
        try {
            return (
                <Modal transparent animationType="slide" visible={this.state.loadingEnable} onRequestClose={() => {}}>
                    <View style={[ styles.background ]}>
                        <View style={ styles.container }>
                            <View style={[ styles.header, { backgroundColor: this.state.backgroundColor } ]}>
                                <View style={ styles.iconContainer }>
                                    <Icon type="FontAwesome5" name={this.state.icon} style={{ color: this.state.backgroundColor }} />
                                </View>
                            </View>
                            <View style={ styles.contentContainer }>
                                <Text style={ styles.contentTitle }>{ this.state.title }</Text>
                                <Text style={ styles.contentValue }>{ this.state.content }</Text>
                            </View>
                            <View style={ styles.footer }>
                                { this.state.buttons ?
                                    <View style={ styles.groupButtonContainer }>
                                        { this.state.buttons.map(element => {
                                            return (
                                                <View key={ this.key++ } style={[ styles.buttonContainer, { flex: 1 / this.state.buttons.length }]}>
                                                    <TouchableOpacity onPress={ () => this._hideNotification(0, element.pressEvent) }
                                                        style={[ mainStyles.button, { backgroundColor: element.backgroundColor ? element.backgroundColor : this.state.backgroundColor } ]}>
                                                        <Text style={[ mainStyles.successButtonText, { color: element.color ? element.color : 'white' } ]}>
                                                            { element.text }
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        }) }
                                    </View>
                                :
                                <View style={ styles.groupButtonContainer }>
                                    <TouchableOpacity onPress={() => this._hideNotification(0)}
                                        style={[ mainStyles.button, { backgroundColor: this.state.backgroundColor, flex: 1 } ]}>
                                        <Text style={ mainStyles.successButtonText }>Xong</Text>
                                    </TouchableOpacity>
                                </View>
                                }
                            </View>
                        </View>
                    </View>
                </Modal>
            );                    
        } catch (error) {
            
        }
    }

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '80%',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentTitle: {
        fontWeight: 'bold',
        paddingTop: 5,
        fontSize: 18,
    },
    contentValue: {
        paddingTop: 5,
        fontSize: 18,
    },
    footer: {
        alignItems: 'center',
        padding: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    groupButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        paddingLeft: 5,
        paddingRight: 5,
    },
});
