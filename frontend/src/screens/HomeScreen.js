import Reazct from 'react';
import { View, StyleSheet } from 'react-native';
import CardView from '../components/CardView';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <CardView title="Hello User" content="Card Content to divide the screen into sections" />    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

export default HomeScreen;