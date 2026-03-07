import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name ="index" options={{title: "Home"}} />
      <Stack.Screen name ="userHistory" options={{title: "Activity"}} />
    </Stack>
  );
}
