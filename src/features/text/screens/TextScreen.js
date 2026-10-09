import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ToastAndroid, Platform, Alert, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BaseText } from '../../../shared/components/BaseText';


export default function TextScreen({ navigation }) { 


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container}>
                {/* Default text styling */}
                <BaseText>
                    Default Text
                </BaseText>

                {/* Customized text styling */}
                <BaseText color="#FF5733" size={24} weight="bold">
                    Large Bold Coral Text
                </BaseText>

                {/* Semi-bold text with standard native text props forwarded */}
                <BaseText color="#007AFF" size={14} weight="600" numberOfLines={1}>
                    This is a long blue text snippet that will truncate if it goes past one line.
                </BaseText>
            </View>
                
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
});
