import React, { useState } from "react"
import { Text, TouchableOpacity, View, Image, Dimensions } from "react-native"
import Tailwind from "../../libs/tailwind/Tailwind.lib"
import { HomeIcon, PlayIcon, ComputerDesktopIcon, UserIcon } from "react-native-heroicons/outline"
import { useRoute, useNavigation } from "@react-navigation/native"


const BottomNavigation = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const height = Dimensions.get('window').height;

    return (
        <View style={[{ height: 65, marginTop: height - 66 }, Tailwind`bg-white w-full flex flex-row items-center justify-between px-6 absolute z-50 border-t border-grey`]}>
            <TouchableOpacity style={Tailwind`items-center`} onPress={() => route.name === "Homepage" ? null : navigation.replace("Homepage")}>
                <HomeIcon size={22} style={Tailwind`${route.name === "Homepage" ? "text-black" : "text-grey"}`} />
                <Text style={Tailwind`${route.name === "Homepage" ? "text-black" : "text-grey"} font-normal text-xs mt-1`}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Tailwind`items-center`} onPress={() => route.name === "NewPlaying" ? null : navigation.replace("NewPlaying")}>
                <PlayIcon size={22} style={Tailwind`${route.name === "NewPlaying" ? "text-black" : "text-grey"}`} />
                <Text style={Tailwind`${route.name === "NewPlaying" ? "text-black" : "text-grey"} font-normal text-xs mt-1`}>Now Playing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Tailwind`items-center`} onPress={() => route.name === "TopRated" ? null : navigation.replace("TopRated")}>
                <ComputerDesktopIcon size={22} style={Tailwind`${route.name === "TopRated" ? "text-black" : "text-grey"}`} />
                <Text style={Tailwind`${route.name === "TopRated" ? "text-black" : "text-grey"} font-normal text-xs mt-1`}>Top Rated</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Tailwind`items-center`} onPress={() => route.name === "Popular" ? null : navigation.replace("Popular")}>
                <UserIcon size={22} style={Tailwind`${route.name === "Popular" ? "text-black" : "text-grey"}`} />
                <Text style={Tailwind`${route.name === "Popular" ? "text-black" : "text-grey"} font-normal text-xs mt-1`}>Popular</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNavigation