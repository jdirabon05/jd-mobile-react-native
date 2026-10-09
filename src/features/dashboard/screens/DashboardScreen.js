import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ToastAndroid, Platform, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';

// navigation prop is still accessible if needed later
export default function DashboardScreen({ navigation }) {
    
    const [items, setItems] = React.useState([
        { name: 'Text', description: 'This will display diffrent usage of custom text', navigation: 'TextScreen', code: '#1abc9c' },
        
    ]);

    const handleItemPress = (item) => {
        // Commented out navigation for future reference
        navigation.navigate(item.navigation, { item });

        // Display a toast on Android, or a non-blocking alert fallback on iOS
        // if (Platform.OS === 'android') {
        //     ToastAndroid.show(`Selected: ${item.name}`, ToastAndroid.SHORT);
        // } else {
        //     Alert.alert('Item Selected', `You clicked ${item.name}`);
        // }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                spacing={10}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[styles.itemContainer, { backgroundColor: item.code }]}
                        activeOpacity={0.7}
                        onPress={() => handleItemPress(item)}>

                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCode}>{item.description}</Text>

                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
