import React from 'react';
import Icon from '../components/Icon';
import { Routes } from '../navigation/routes';

import profile from '../svg/profile.svg';
import home from '../svg/home.svg';
import cart from '../svg/cart.svg';
import { BLUE_10, PURPLE } from '../constants/colors';

const getTabIconName = (routeName: string) => {
  switch (routeName) {
    case Routes.Catalog:
      return home;
    case Routes.Profile:
      return profile;
    default:
      return cart;
  }
};

export const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconName = getTabIconName(routeName);

  return (
    <Icon
      icon={iconName}
      width={20}
      height={20}
      style={{ fill: focused ? PURPLE : BLUE_10 }}
    />
  );
};
