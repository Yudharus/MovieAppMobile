import React from 'react'
import View from '../atoms/View.atom'
import Text from '../atoms/Text.atom'
import { Image, TouchableOpacity } from 'react-native'
import Tailwind from '../../libs/tailwind/Tailwind.lib'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'


const TopBar = ({ title, goBack }) => {
    const navigation = useNavigation()
    return (
        <View className="flex-row items-center justify-between">
            {
                goBack == true ?
                    (
                        <TouchableOpacity style={Tailwind`flex-row items-center`} onPress={() => navigation.goBack()}>
                            <ArrowLeftIcon size={12} style={Tailwind`text-black mr-2`} />
                            <Text className="text-black font-bold text-sm"> Kembali</Text>
                        </TouchableOpacity>
                    ) : null
            }
            <View className="flex-row items-center">
                <Image source={require('../../assets/MovieLogo.png')} style={Tailwind`w-5 h-5 mr-2`} />
                <Text className="text-black font-bold text-sm">{title}</Text>
            </View>
        </View>
    )
}

export default TopBar