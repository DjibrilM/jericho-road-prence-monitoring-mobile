import React, { useMemo, useState } from 'react'
import { ALERT_TYPE } from "react-native-alert-notification";
import { useNavigation } from '@react-navigation/native';

import { Button } from './widgets';
import { View, Text } from './tailwind'
import { login } from '../lib/util/services/backendHttp'
import useDialogue from '../lib/util/hooks/useDialogue';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from './widgets';
import { Dialog } from '@rneui/base';
import { CurrentAccount } from '../lib/util/types';
import routes from '../lib/util/routes';

const LoginForm = () => {
    const navigation = useNavigation();
    const [showDialogue, setShowDialogue] = useState(false);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('string');
    const [email, setEmail] = useState("");
    const { showToast } = useDialogue()

    const loginRequest = async () => {
        try {
            setLoading(true);
            const response = await login({ email, password }) as Promise<CurrentAccount>;
            showToast({ type: ALERT_TYPE.SUCCESS, message: "Transaction completed succesfully.", title: "Success" });
            console.log(response);

            setLoading(false);

            await AsyncStorage.setItem('account', JSON.stringify(response));
            navigation.navigate(routes.home as never)
        } catch (error) {
            console.error(error)
            showToast({ type: ALERT_TYPE.DANGER, message: "Failed to process the transaction", title: "Failed" });
            setLoading(false);

            setShowDialogue(true);
        }
    }

    const validation = useMemo(() => {
        const emailValidation = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
        const passwordValidation = /^.{3,}$/.test(password);

        return {
            email: {
                valid: emailValidation,
                errorMessage: !emailValidation && email ? "Invalid email" : ""
            },
            password: {
                valid: passwordValidation,
                errorMessage: !passwordValidation && password ? "Invalid password" : ""
            }
        }
    }, [password, email])

    return (

        <View className='w-full max-w-[500px] flex-1 px-4 mt-4'>
            <View>
                <Input errorMessage={validation.email.errorMessage} onChangeText={(text) => setEmail(text)} placeholder='email' keyboardType='email-address' />
                <Input errorMessage={validation.password.errorMessage} onChangeText={(text) => setPassword(text)} placeholder='password' keyboardType='default' secureTextEntry />
            </View>

            <View className='px-2'>
                <Button disabled={!validation.password.valid || !validation.email.valid} loading={loading} onPress={loginRequest} title={'Login'} />
            </View>

            <Dialog
                isVisible={showDialogue}
                onBackdropPress={() => setShowDialogue(false)}
            >
                <Dialog.Title title="Dialog Title" />
                <Text className='text-white'>Something went wron please try again</Text>
                <Dialog.Actions>
                    <Dialog.Button title="close" onPress={() => setShowDialogue(false)} />
                </Dialog.Actions>
            </Dialog>
        </View>

    )
}



export default LoginForm

