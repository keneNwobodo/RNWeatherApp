import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Card (props) {
  return (
    <View style={styles.card}>
      <View>
        style={styles.cardContent}
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  card: {
    elevation: 4,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    marginHorizontal: 1,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
