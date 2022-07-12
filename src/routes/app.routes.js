import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signin from "../pages/Signin";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Signin"
        component={Signin}
        options={{
          title: "Faça o login",
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
