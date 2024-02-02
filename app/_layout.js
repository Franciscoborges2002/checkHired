import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
//import { Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import * as SplashScreen from "expo-splash-screen";

//SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  /*
  let [fontsLoaded, fontError] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  });*/

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("fontes carregadas.");
      //await SplashScreen.hideAsync();
    }

    /*if(fontError){
       console.log("errrrorrrrr.");
      console.log(fontError)
    }*/
  }, [fontsLoaded]); //fontError

  /*if (!fontsLoaded && !fontError) {//Se as fontes nao forem carregadas
    console.log("fontes nao fora carregadas. " + fontsLoaded);
    return null;
  }
  ,
      [
        "expo-font",
        {
          "fonts": [
            "node_modules/@expo-google-fonts/roboto/Roboto_700Bold.ttf", "node_modules/@expo-google-fonts/roboto/Roboto_500Medium.ttf.ttf", "node_modules/@expo-google-fonts/roboto/Roboto_400Regular.ttf.ttf"
          ]
        }
      ]
  */

  if (!fontsLoaded) {
    return null;
  }

  return <Stack onLayout={onLayoutRootView} />; //
};

export default Layout;
