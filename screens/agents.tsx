import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { ActivityIndicator, RefreshControl, StatusBar } from 'react-native'

import Visible from '../components/common/Visibility'
import { ScrollView, SafeAreaView, Text, View, Image } from '../components/tailwind'
import { Button } from '../components/widgets'
import Agent from '../components/common/Agent'
import { getAgents } from '../lib/util/services/backendHttp'


const Agents = () => {
    const { error, data, isLoading, isRefetching, refetch } = useQuery({ queryKey: ['todos'], queryFn: async () => getAgents() });

    return (
        <SafeAreaView className='flex-1 flex'>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <ScrollView refreshControl={
                <RefreshControl refreshing={isRefetching || isLoading} onRefresh={refetch} />
            } className='px-3 flex-1'>
                <View className='h-4' />
                <Visible condition={!!data}>
                    {data?.map((account) => (<Agent {...account} />))}
                </Visible>


                <Visible condition={!!error}>
                    <View className='items-center mt-32'>
                        <Image className='h-28 w-28' source={require("../assets/images/server.png")} />
                        <Text className='mt-5'>Failed to load agents ! Please retry</Text>
                        <Button loading={isRefetching} customInputStyle={{ width: 100, marginTop: 10, marginVertical: 'auto', position: "relative" }} onPress={() => refetch()} title={'Retry'} />
                    </View>
                </Visible>

                <Visible condition={isLoading || isRefetching}>
                    <View className='justify-center items-center'>
                        <ActivityIndicator size={30} />
                    </View>
                </Visible>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Agents