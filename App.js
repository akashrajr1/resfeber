import { Router, Stack, Scene } from "react-native-router-flux";
import React from 'react';

//Import Screens
import NavigationScreen from "./screens/NavigationScreen";
import ActivitiesScreen from "./screens/ActivitiesScreen";
import FoodScreen from "./screens/FoodScreen";
import MoreScreen from "./screens/MoreScreen";
import MarkAsVisitedScreen from "./screens/MarkAsVisitedScreen";
import RoadTripPlaylistScreen from "./screens/RoadTripPlaylistScreen";
import NearestGasStationScreen from "./screens/NearestGasStationScreen";
import BookAHotelRoomScreen from "./screens/BookAHotelRoomScreen";
import FindHitchBuddiesScreen from "./screens/FindHitchBuddiesScreen";
import InitialFormScreen from "./screens/InitialFormScreen";
import SplashScreen from "./screens/SplashScreen";

const App = () => (
    <Router navigationBarStyle={{ backgroundColor: '#ffcc00' }}>
        <Scene key="root">
            <Scene
                key="splash"
                type="replace"
                title="Resfeber"
                component={SplashScreen}
            />
            <Scene
                key="init"
                type="replace"
                title="Resfeber"
                component={InitialFormScreen}
                initial
            />
            <Scene
                key="navigation"
                type="replace"
                title="Resfeber"
                component={NavigationScreen}
            />
            <Scene
                key="activities"
                type="replace"
                title="Resfeber"
                component={ActivitiesScreen}
            />
            <Scene
                key="food"
                type="replace"
                title="Resfeber"
                component={FoodScreen}
            />
            <Scene
                key="more"
                type="replace"
                title="Resfeber"
                component={MoreScreen}
            />
            <Scene
                key="markAsVisited"
                type="replace"
                title="Resfeber"
                component={MarkAsVisitedScreen}
            />
            <Scene
                key="roadTrip"
                type="replace"
                title="Resfeber"
                component={RoadTripPlaylistScreen}
            />
            <Scene
                key="gasStation"
                type="replace"
                title="Resfeber"
                component={NearestGasStationScreen}
            />
            <Scene
                key="hotelRoom"
                type="replace"
                title="Resfeber"
                component={BookAHotelRoomScreen}
            />
            <Scene
                key="hitchBuddies"
                type="replace"
                title="Resfeber"
                component={FindHitchBuddiesScreen}
            />
        </Scene>
    </Router>
);

export default App;
