import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { MembershipProvider } from "../dataTracker";

export default function TabLayout() {
  return (
    <MembershipProvider>
    <Tabs>

      <Tabs.Screen name ="index" options={{headerShown: false,
        title: "Home", 
        headerTitleAlign: "center",
        headerStyle: {backgroundColor: "#76b6c4"},
        tabBarActiveBackgroundColor: "#e2f6ff",
        tabBarIcon: ({color, focused}) => 
        <Ionicons name={focused ? 'barbell' : 'barbell-outline'} color={color} size={24}/>
        }} />

    
      <Tabs.Screen name ="userHistory" options={{
        title: "Activity", 
        headerTitleAlign: "center",
        tabBarActiveBackgroundColor: "#e2f6ff",
        tabBarIcon: ({color, focused}) => 
        <Ionicons name={focused ? 'bar-chart' : 'bar-chart-outline'} color={color} size={24}/>
        }} />

        <Tabs.Screen name ="settings" options={{
        title: "Settings", 
        headerTitleAlign: "center",
        tabBarActiveBackgroundColor: "#e2f6ff",
        tabBarIcon: ({color, focused}) => 
        <Ionicons name={focused ? 'settings' : 'settings-outline'} color={color} size={24}/>
        }} />
    </Tabs>
    </MembershipProvider>
  );
}
