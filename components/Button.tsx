import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
type Props = {
    label: string;
    theme?:'primary'
}

export const Button = ({label,theme}:Props) => {
 if(theme === 'primary'){
    return(
        <View
            style={[
                styles.buttonContainer,
                { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
                ]}>

                <Pressable 
                style={[styles.button, { backgroundColor: '#fff' }]}
                onPress={() => alert('Button pressed')}>
                     <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                     <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
                </Pressable>


        </View>
    )
 }
 return (
    <View>
        <Pressable style={styles.buttonContainer}
            onPress={()=> alert('Button pressed')}
        >
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
      },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });