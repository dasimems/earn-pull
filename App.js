import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import Providers from "./components/general/Providers";
import { NavNames } from "./data/general";
import AppContent from "./components/layout/AppContent";
import { dancingScript, poppins } from "./assets/fonts";
import GettingStarted from "./screens/GettingStarted";
import AccountDetails from "./screens/AccountDetails";
import Dashboard from "./screens/Dashboard";
import Withdrawal from "./screens/Withdrawal";
import Activation from "./screens/Activation";
import PaymentPending from "./screens/PaymentPending";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    [poppins.regular.default]: require("./assets/fonts/Poppins-Regular.ttf"),
    [poppins.bold.default]: require("./assets/fonts/Poppins-Bold.ttf"),
    [poppins.medium.default]: require("./assets/fonts/Poppins-Medium.ttf"),
    [dancingScript.bold
      .default]: require(`./assets/fonts/DancingScript-Bold.ttf`),
    [dancingScript.medium
      .default]: require(`./assets/fonts/DancingScript-Medium.ttf`),
    [dancingScript.semibold
      .default]: require(`./assets/fonts/DancingScript-SemiBold.ttf`),
    [dancingScript.regular
      .default]: require(`./assets/fonts/DancingScript-Regular.ttf`),
  });
  return (
    <>
      <StatusBar style="light"  />
      {fontsLoaded && (
        <Providers>
          <AppContent>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName={NavNames.GettingStarted.name}
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Group
                  screenOptions={{
                    animation: "slide_from_right",
                  }}
                >
                  
                  <Stack.Screen name={NavNames.Home.name} component={Dashboard} />
                  <Stack.Screen name={NavNames.AccountDetails.name} component={AccountDetails} />
                  <Stack.Screen name={NavNames.PendingPayment.name} component={PaymentPending} />
                  <Stack.Screen name={NavNames.Activation.name} component={Activation} />
                  <Stack.Screen name={NavNames.Withdrawal.name} component={Withdrawal} />
                  <Stack.Screen name={NavNames.GettingStarted.name} component={GettingStarted} />
                </Stack.Group>
              </Stack.Navigator>
            </NavigationContainer>
          </AppContent>
        </Providers>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
