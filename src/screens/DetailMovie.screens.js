import React, { useState, useEffect } from 'react'
import { Image, Dimensions, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import View from '../components/atoms/View.atom'
import Text from '../components/atoms/Text.atom'
import Tailwind from '../libs/tailwind/Tailwind.lib'
import { GetDetail, GetRecommendation } from '../libs/fetchings/Services.lib'
import TopBar from '../components/molecules/TopBar.molecules'
import { StarIcon } from 'react-native-heroicons/outline'
import CardMovie from '../components/organisms/CardMovie.organisms'

const DetailMovie = ({ route, navigation }) => {
    const [item, setItem] = useState([])
    const [recommendations, setRecommendations] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const id = route.params.id
    const posterPath = "https://image.tmdb.org/t/p/original/"
    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height

    useEffect(() => {
        const initData = async () => {
            setIsLoading(true)
            try {
                const response = await GetDetail(id)
                const getRecommend = await GetRecommendation(id)

                setItem(response)
                setRecommendations(getRecommend)
                setIsLoading(false)
            } catch (error) {
                setItem([])
                setIsLoading(false)
            }
        }
        initData()
    }, [])

    const renderItem = ({ item }) => {
        return (
            <CardMovie
                onPress={() => navigation.push("DetailMovie", {
                    id: item.id
                })}
                overview={item.overview}
                star={item.vote_average}
                title={item.original_title}
                image={item.poster_path}
            />
        )
    }

    const renderEmpty = () => {
        return (
            <Text className={`text-black font-normal text-md mt-2`}>Tidak terdapat rekomendasi</Text>
        )
    }

    return (
        <ScrollView style={Tailwind`flex-1 bg-white `}>
            <View className="px-4 py-4">
                <TopBar title="Detail Movie" goBack={true} />
                <Image source={{ uri: `${posterPath}${item.backdrop_path}` }} style={Tailwind`w-full h-${height * 0.1} bg-grey rounded-md mt-4`} resizeMethod='resize' resizeMode='cover' />
                {
                    isLoading ?
                        <ActivityIndicator size={'large'} color={"#F3281C"} style={Tailwind`mt-6`} /> :
                        (
                            <View className="mt-6">
                                <Text className={`text-black text-lg font-bold w-${width * 0.2}`}>{item.original_title}</Text>
                                <View className="items-center flex-row  mt-1">
                                    <StarIcon size={12} style={Tailwind`text-yellow mr-2`} fill={"#FDCC0D"} />
                                    <Text className="text-black font-light text-xs">{item.vote_average}</Text>
                                </View>
                                <Text className={`text-black font-normal text-md w-${width * 0.22} mt-2`}>{item.overview}</Text>
                            </View>
                        )
                }
                {
                    isLoading ?
                        null :
                        (
                            <View className="mt-4">
                                <Text className={`text-black text-lg font-bold `}>Recommendation</Text>
                                <FlatList
                                    data={recommendations}
                                    renderItem={renderItem}
                                    horizontal
                                    ListEmptyComponent={renderEmpty}
                                />
                            </View>
                        )
                }
            </View>

        </ScrollView>
    )
}

export default DetailMovie