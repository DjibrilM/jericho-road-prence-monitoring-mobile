import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, TouchableOpacity } from '../tailwind'
import { CurrentAccount } from '../../lib/util/types';
import routes from '../../lib/util/routes';




const Agent: React.FC<CurrentAccount> = ({ firstName, secondName, profileImageUrl, ...props }) => {
    const { navigate } = useNavigation() as any;
    return (
        <TouchableOpacity onPress={() => navigate(routes.agentProfile as any,
            {
                data: { ...props, firstName, secondName, profileImageUrl }
            })}
            className='bg-white flex-row mb-2 justify-between items-center rounded-xl border border-black/10  w-full p-3'>
            <View className='flex-row items-center gap-3'>
                <View style={{ overflow: 'hidden' }} className='rounded-full overflow-hidden items-center justify-center  h-10 w-10 border-slate-300 border'>
                    <Image className='w-full h-full object-cover absolute rounded-full' source={{ width: 50, height: 50, uri: profileImageUrl, cache: 'force-cache' }} />
                </View>
                <View>
                    <Text className='font-semibold text-sm mb-2'>{firstName} {secondName}</Text>
                    <Text className='text-[12px] mr-1 relative bottom-1'>0839238273873</Text>
                </View>
            </View>

            <View className='h-8 w-8 justify-center border-black/10 items-center border rounded-lg
            '>
                <MaterialIcons name="arrow-forward-ios" size={15} color="#64748b" />
            </View>
        </TouchableOpacity>
    )
}

export default Agent