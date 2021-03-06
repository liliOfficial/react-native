/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';

import AuthLoadingScreen from './Auth';
import LogNavigator from './components/log/loginNav';

import OfferPage from './components/pages/offerPage';
import ProfilePage from './components/pages/profilePage';
import ReferPage from './components/pages/referPage'
import StorePage from './components/pages/storePage';
import CategoryPage from './components/pages/categoryPage';
import CategoriesList from './components/categories/categoryList';
import SettingPage from './components/profile/settingPage';
import ClickHistory from './components/profile/clickHistory';
import GoPage from './components/pages/goPage';
import LogoutPage from './components/log/loginPage';
import LinkCardPage from './components/cardLinked/linkCard';
import CardListPage from './components/cardLinked/cardList';






const OffersNavigator = createStackNavigator({
  OffersList: {
    screen: OfferPage,
    navigationOptions: {
      title: 'Offers',
      header: null
    }
  },
  Store: {
    screen: StorePage,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7C4DFF'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  Go: {
    screen: GoPage,
    navigationOptions: {
      title: 'Go',
      header: null
    }
  }

});

const ProfileNavigator = createStackNavigator(
  {
    OffersList: {
      screen: ProfilePage,
      navigationOptions: {
        title: 'Profile',
        header: null
      }
    },
    Setting: {
      screen: SettingPage,
      navigationOptions: {
        title: 'Setting',
        headerStyle: {
          backgroundColor: '#7C4DFF'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
    ClickHistory: {
      screen: ClickHistory,
      navigationOptions: {
        title: 'Click History',
        headerStyle: {
          backgroundColor: '#7C4DFF'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
    Logout: {
      screen: LogoutPage,
      navigationOptions: {
        title: 'Log Out',
        header: null,
      }
    },
    LinkCard: {
      screen: LinkCardPage,
      navigationOptions: {
        title: 'Link Card',
        headerStyle: {
          backgroundColor: '#7C4DFF'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
    CardList: {
      screen: CardListPage,
      navigationOptions: {
        title: 'Card Setting',
        headerStyle: {
          backgroundColor: '#7C4DFF'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    }
  });

const CategoriesNavigator = createStackNavigator({
  CategoriesList: {
    screen: CategoriesList,
    navigationOptions: {
      title: 'Categories',
      header: null
    }
  },
  CategoriesDetail: {
    screen: CategoryPage,
  }
})

// Main footer Nav
const authNavigator = createMaterialBottomTabNavigator(
  {
    Offers: {
      screen: OffersNavigator,
      navigationOptions: {
        tabBarIcon: <Icon name="gifts" size={22} color="#212121" />,
        tabBarColor: "#fff"
      }
    },
    Categories: {
      screen: CategoriesNavigator,
      navigationOptions: {
        tabBarIcon: <Icon name="grip-horizontal" size={22} color="#212121" />
      }
    },
    'Refer a Friend': {
      screen: ReferPage,
      navigationOptions: {
        tabBarIcon: <Icon name="hand-holding-usd" size={22} color="#212121" />
      }
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: <Icon name="user" size={22} color="#212121" />,
        tabBarVisible: navigation.state.index === 0
      })
    }
  },
  {
    initialRouteName: 'Profile',
    labeled: true,
    activeColor: '#212121',
    inactiveColor: '#212121',
    barStyle: { backgroundColor: '#fff' },
  }
);

//Logged In and Logged Out
const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    logPages: LogNavigator,
    authPages: authNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

export default createAppContainer(AppNavigator);
