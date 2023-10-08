import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import View2a from './View/2a';
import View2b from './View/2b';
import View2c from './View/2c';
import View2d from './View/2d';




const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>  
      <View style={styles.wrapper}><View2d /></View>
     
     
   
   
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});