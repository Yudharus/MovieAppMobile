import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import Text from '../atoms/Text.atom'
import View from '../atoms/View.atom'
import Tailwind from '../../libs/tailwind/Tailwind.lib'
import { StarIcon } from "react-native-heroicons/outline"


const CardMovie = ({ image, title, star, overview, onPress }) => {
    const posterPath = "https://image.tmdb.org/t/p/original/"

    return (
        <TouchableOpacity style={Tailwind`mr-4 mt-4`} onPress={onPress}>
            <Image style={Tailwind`w-35 h-35 bg-grey rounded-md`} source={{ uri: `${posterPath}${image}` }} />
            <Text className="text-black font-semibold text-sm w-26 mt-2" numberOfLines={1}>{title}</Text>
            <View className="items-center flex-row  mt-1">
                <StarIcon size={12} style={Tailwind`text-yellow mr-2`} fill={"#FDCC0D"} />
                <Text className="text-black font-light text-xs">{star}</Text>
            </View>
            <Text className="text-black font-light text-xs w-26 mt-1" numberOfLines={1}>{overview}</Text>
        </TouchableOpacity>
    )
}

export default CardMovie