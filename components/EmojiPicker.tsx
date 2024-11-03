import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { PropsWithChildren } from 'react';
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;


export const EmojiPicker = ({isVisible,children,onClose}:Props) => {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Pick an emoji</Text>
                <Pressable onPress={onClose}>
                    <MaterialIcons name='close' size={24} color='#fff' />
                </Pressable> 
            </View>
            {children}
        </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
  });