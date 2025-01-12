import { Text, View } from '@/components/Themed';
import { Stack } from 'expo-router';
import CardListItem from '@/components/CardListItem';

export default function TabOneScreen() {
  return (
    <View>
      {/* to hide the header <Stack.Screen options={{title: 'Home', headerShown: false}} /> */}
      <Stack.Screen options={{title: 'Home'}} />
      {/* list loop will iterate the cardlistitem component */}
      <CardListItem />
    </View>
  );
}
