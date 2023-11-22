import React, { useState } from 'react'
import View from '../components/atoms/View.atom'
import { SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import BottomNavigation from '../components/organisms/BottomNavigation.organisms';
import Tailwind from '../libs/tailwind/Tailwind.lib';
import { GetNowPlaying } from '../libs/fetchings/Services.lib';
import TopBar from '../components/molecules/TopBar.molecules';
import CardMovie from '../components/organisms/CardMovie.organisms';



const NewPlaying = ({ data, navigation }) => {
    const [page, setPage] = useState(1)
    const [nowPlaying, setNowPlaying] = useState(data.nowPlaying)
    const [isLoading, setIsLoading] = useState(false)

    const loadMore = async () => {
        setIsLoading(true)
        setPage(prev => prev + 1)
        const response = await GetNowPlaying(page + 1)
        setNowPlaying(prev => [...prev, ...response])
        setIsLoading(false)

    }
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

    const renderFooter = () => {
        if (isLoading) {
            return (
                <ActivityIndicator size={'large'} color={"#F3281C"} />
            )
        }
    }
    return (
        <SafeAreaView style={Tailwind`flex-1 bg-white`}>
            <View className=" px-4 mt-6 mb-1">
                <TopBar title="Now Playing" />
            </View>
            <View className="items-center justfiy-center pl-4 pb-25">
                <FlatList
                    data={nowPlaying}
                    renderItem={renderItem}
                    numColumns={2}
                    columnWrapperStyle={Tailwind`justify-between`}
                    onEndReached={() => loadMore()}
                    ListFooterComponent={renderFooter}
                />
            </View>
            <BottomNavigation />
        </SafeAreaView>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
    };
};
export default connect(mapStateToProps, null)(NewPlaying);