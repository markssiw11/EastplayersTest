// RootNavigation.js

import * as React from 'react';
import {createNavigationContainerRef, ParamListBase} from '@react-navigation/native';
export type RootStackParamList = {
    Home: undefined;
    Todo: undefined;
    Country: undefined;
    ImageGallery: undefined;
  };
// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    // Perform navigation if the app has mounted
    navigationRef.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function resetStack(name: string, params: ParamListBase) {
  navigationRef.resetRoot({
    index: 0,
    routes: [{name, params}],
  });
}

export function goBack() {
  navigationRef.current?.goBack();
}