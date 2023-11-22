import React, { Fragment, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox, StatusBar, Alert } from 'react-native';
import Splash from '../screens/Splash.screens';
import { Provider } from 'react-redux';
import Redux from '../configs/redux/Redux.config';
import {
  navigationRef,
  isReadyRef,
} from '../libs/helpers/RootNavigation';
import Homepage from '../screens/Homepage.screens';
import NewPlaying from '../screens/NewPlaying.screens';
import TopRated from '../screens/TopRated.screens';
import Popular from '../screens/Popular.screens';
import DetailMovie from '../screens/DetailMovie.screens';


const Stack = createNativeStackNavigator();

const Core = () => {
  LogBox.ignoreAllLogs(true);

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <Fragment>
      <Provider store={Redux}>
        <StatusBar backgroundColor={'#467D7F '} translucent={false} />

        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: true,
              animation: 'none',
            }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewPlaying"
              component={NewPlaying}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TopRated"
              component={TopRated}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Popular"
              component={Popular}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailMovie"
              component={DetailMovie}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </Fragment>
  );
};

export default Core;
