import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Feed from './tabs/Feed';
import Agenda from './tabs/Agenda';
import Profil from './tabs/Profil';


const Tabs = createBottomTabNavigator({
    FeedPage: Feed,
    AgendaPage: Agenda,
    ProfilPage: Profil,
})

export default Tabs;