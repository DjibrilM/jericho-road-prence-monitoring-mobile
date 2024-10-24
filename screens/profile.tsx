import React from 'react'
import { View, SafeAreaView, Text } from '../components/tailwind';
import { Button } from '../components/widgets';


const Profile = () => {
    return (
        <SafeAreaView className='h-full'>
            <View className='flex-1 p-4'>
                <View className='w-36 border-black/10 h-36 bg-white mt-10 rounded-full border'></View>
                <View className='bg-white p-4 mt-5 mb-2 rounded-xl border border-black/10'>
                    <Text className='text-slate-800 font-bold' >Email</Text>
                    <Text className='text-slate-500 mt-2' >test@gmail.com</Text>
                </View>

                <View className='bg-white p-4  rounded-xl border border-black/10'>
                    <Text className='text-slate-800 font-bold' >Name</Text>
                    <Text className='text-slate-500 mt-2' >test@gmail.com</Text>
                </View>

                <View className='mt-4'>
                    <Button title={'Logout'} />
                </View>
            </View>
        </SafeAreaView>
    )
} 

export default Profile