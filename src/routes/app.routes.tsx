import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Gallery } from "../screens/Gallery";
import { Home } from "../screens/Home";
import { ObjectDetails } from "../screens/ObjectDetails";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => (
  <Navigator screenOptions={{
    headerShown: false,
  }}>
    <Screen
      name="home"
      component={Home}
    />
    <Screen
      name="gallery"
      component={Gallery}
    />
    <Screen
      name="objectDetails"
      component={ObjectDetails}
    />
  </Navigator>
);

export default AppRoutes;