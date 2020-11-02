import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings166808Navigator from '../features/Settings166808/navigator';
import UserProfile166801Navigator from '../features/UserProfile166801/navigator';
import Settings166800Navigator from '../features/Settings166800/navigator';
import Settings166798Navigator from '../features/Settings166798/navigator';
import SignIn2166796Navigator from '../features/SignIn2166796/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings166808: { screen: Settings166808Navigator },
UserProfile166801: { screen: UserProfile166801Navigator },
Settings166800: { screen: Settings166800Navigator },
Settings166798: { screen: Settings166798Navigator },
SignIn2166796: { screen: SignIn2166796Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
