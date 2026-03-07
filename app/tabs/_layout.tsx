import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name ="index" options={{
        title: "Home", 
        headerTitleAlign: "center",
        tabBarIcon: ({color, focused}) => 
        <Ionicons name={focused ? 'barbell' : 'barbell-outline'} color={color} size={24}/>
        }} />

    
      <Tabs.Screen name ="userHistory" options={{
        title: "Activity", 
        headerTitleAlign: "center",
        tabBarIcon: ({color, focused}) => 
        <Ionicons name={focused ? 'bar-chart' : 'bar-chart-outline'} color={color} size={24}/>
        }} />

        <Tabs.Screen name ="settings" options={{
        title: "Settings", 
        headerTitleAlign: "center",
        tabBarIcon: ({color, focused}) => 
        <Ionicons name={focused ? 'settings' : 'settings-outline'} color={color} size={24}/>
        }} />
    </Tabs>
  );
}