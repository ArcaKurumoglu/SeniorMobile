import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Left, Body, Right, Button,Title,Icon} from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../pages/HomePage';
import Courses from '../pages/Courses';
import Announcements from '../pages/Announcements';
import Reservations from '../pages/Reservations';
import More from '../pages/More';


class CustomHeader extends React.Component {
    render() {

        let { title, isHome } = this.props
        return (

            <Header>
                <Left>
                    {
                        isHome ?
                            <Button transparent>
                                {/* <Icon name='menu' /> */}
                            </Button> :
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                    }

                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right>
                    {/* <Button transparent>
                        <Icon name='menu' />
                    </Button> */}
                </Right>
            </Header>

        );
    }
}


function Home() {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader title="Home" isHome={true} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <HomePage/>
            </View>
        </View>
    );
}

function Course() {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader title="Courses" isHome={true}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Courses/>
            </View>
        </View>
    );
}
function Reservation() {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader title="Reservations" isHome={true} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Reservations/>
            </View>
        </View>
    );
}
function Announcement() {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader title="Announcements" isHome={true} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Announcements/>
            </View>
        </View>
    );
}
function Mores() {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader title="More" isHome={true} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <More/>
            </View>
        </View>
    );
}

const navOptionHandler = (navigation) => ({

    header: null

})



const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Courses" component={Course} />
                <Tab.Screen name="Reservations" component={Reservation} />
                <Tab.Screen name="Announcements" component={Announcement} />
                <Tab.Screen name="More" component={Mores} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

