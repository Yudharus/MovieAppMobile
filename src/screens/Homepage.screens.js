import React from 'react'
import View from '../components/atoms/View.atom'
import Text from '../components/atoms/Text.atom'
import { SafeAreaView, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Tailwind from '../libs/tailwind/Tailwind.lib';
import BottomNavigation from '../components/organisms/BottomNavigation.organisms';
import { connect } from 'react-redux';
import Spacer from '../components/atoms/Spacer.atom';
import TopBar from '../components/molecules/TopBar.molecules';
import CardMovie from '../components/organisms/CardMovie.organisms';





const Homepage = ({ navigation, data, isLoading }) => {
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

    return (
        <SafeAreaView style={Tailwind`flex-1 bg-white`}>
            <ScrollView >
                <View className="px-4 py-6">
                    <TopBar title="Movie App" />
                    <View className="mt-8">
                        <View>
                            <View className="flex-row items-center justify-between">
                                <Text className="text-black font-bold text-lg">Now Playing</Text>
                                <TouchableOpacity onPress={() => navigation.replace("NewPlaying")}>
                                    <Text className="text-primary--red font-bold text-xs">Lihat lebih banyak</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="mt-2">
                                {
                                    isLoading ?
                                        <ActivityIndicator size={'large'} color={"#F3281C"} /> :
                                        <FlatList
                                            data={data.nowPlaying}
                                            horizontal
                                            renderItem={renderItem}
                                        />
                                }
                            </View>
                        </View>
                        <View className="mt-4">
                            <View className="flex-row items-center justify-between">
                                <Text className="text-black font-bold text-lg">Popular</Text>
                                <TouchableOpacity onPress={() => navigation.replace("Popular")}>
                                    <Text className="text-primary--red font-bold text-xs">Lihat lebih banyak</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="mt-2">
                                {
                                    isLoading ?
                                        <ActivityIndicator size={'large'} color={"#F3281C"} /> :
                                        <FlatList
                                            data={data.popular}
                                            horizontal
                                            renderItem={renderItem}
                                        />
                                }
                            </View>
                        </View>
                        <View className="mt-4">
                            <View className="flex-row items-center justify-between">
                                <Text className="text-black font-bold text-lg">Top Rated</Text>
                                <TouchableOpacity onPress={() => navigation.replace("TopRated")}>
                                    <Text className="text-primary--red font-bold text-xs">Lihat lebih banyak</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="mt-2">
                                {
                                    isLoading ?
                                        <ActivityIndicator size={'large'} color={"#F3281C"} /> :
                                        <FlatList
                                            data={data.topRated}
                                            horizontal
                                            renderItem={renderItem}
                                        />
                                }
                            </View>
                        </View>
                        <Spacer width={"full"} height={"20"} />
                    </View>
                </View>
            </ScrollView>
            <BottomNavigation />
        </SafeAreaView >
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        isLoading: state.isLoading,

    };
};

export default connect(mapStateToProps, null)(Homepage);