import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import cardStyle from '../styles/CardStyles.js';

const CardView = ({ title, content}) => {
    return (
        <View style={cardStyle.card}>
            <Text style={cardStyle.title}>{title}</Text>
            <View style={cardStyle.innerContainer}>
                <View style={cardStyle.subCard} />
                <View style={cardStyle.subCard} />
                <View style={cardStyle.subCard} />
            </View>
        </View>
        );
};

export default CardView;