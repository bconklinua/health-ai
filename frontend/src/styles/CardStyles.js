import { StyleSheet } from 'react-native';

const CardStyle = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 6,
        margin: 8,
        shadowColor: '#000',
        marginBottom: 16, // Adjusted margin to separate cards vertically
        flex: 1, // Make the card expand to fill available space
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 8,
            textAlign: 'center',
            flex: 1, // Make the title take up as much space as it needs
        },

        innerContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            
        },

        subCard: {
            backgroundColor: '#f2f2f2',
            width: '30%',
            height: 100,
            borderRadius: 8,
            marginVertical: 8,
        }

});

export default CardStyle;