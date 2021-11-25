import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const HeaderBar = ({right}) => {

    const navigation = useNavigation()

    return (
        <View 
        style={{ 
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row'
        }} 
        >
            <View style={{ flex: 1, alignItems: 'flex-start'}} >
                <TouchableOpacity
                   style={{
                       flexDirection: 'row',
                       alignItems: 'center'
                   }}
                   onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={icons.back_arrow}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.gray
                        }}
                    />
                    <Text style={{ marginLeft: SIZES.base, ...FONTS.h2}} >Back</Text>
                </TouchableOpacity>
            </View>

            { right &&
                <View style={{ flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity>

                            <Image 
                                source={icons.star}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                        </TouchableOpacity>
                </View>
            }    
        </View>
    )
}

export default HeaderBar