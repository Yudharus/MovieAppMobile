import React, { useEffect } from 'react'
import View from '../components/atoms/View.atom';
import Text from '../components/atoms/Text.atom';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GetNowPlaying, GetPopular, GetTopRated } from '../libs/fetchings/Services.lib';
import { connect } from 'react-redux';




const Splash = ({ changeData, data, changeLoading }) => {
    const navigation = useNavigation();

    useEffect(() => {
        changeLoading(true)
        const initData = async () => {
            try {
                const getNowPlaying = await GetNowPlaying(1)
                const getPopular = await GetPopular(1)
                const getTopRated = await GetTopRated(1)

                changeData({ ...data, nowPlaying: getNowPlaying, popular: getPopular, topRated: getTopRated })
                changeLoading(false)
            } catch (error) {
                changeLoading(false)
            }
        }
        initData()

        const timeout = setTimeout(() => {
            navigation.replace("Homepage")
            clearTimeout(timeout)
        }, 2000);
    }, [])

    return (
        <View className="bg-white flex-1 items-center justify-center">
            <Image source={require('../assets/MovieLogo.png')} />
            <Text className="text-black font-bold text-3xl mt-4">Movie App</Text>
            <Text className="text-grey font-semibold text-base mt-4">Moch Yudha Rusdian</Text>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeData: (value) => dispatch({ type: 'CHANGE_DATA', newValue: value }),
        changeLoading: (value) => dispatch({ type: 'CHANGE_ISLOADING', newValue: value }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
