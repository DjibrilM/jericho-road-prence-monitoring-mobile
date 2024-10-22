import React from 'react'

import { Image, SafeAreaView, View } from '../components/tailwind';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <SafeAreaView className='h-full justify-center items-center flex-1'>
            <View className="justify-center items-center w-full flex flex-row">
                <Image className='h-20 w-[190px] mx-auto py-10 mt-12' source={require('../assets/images/logo.png')} />
            </View>
            <LoginForm />
        </SafeAreaView>
    )
}

export default Login