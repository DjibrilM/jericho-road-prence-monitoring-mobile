import React, { useMemo } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
    View,
    SafeAreaView,
    Text,
    TouchableHighlight,
    Image,
} from "../components/tailwind";
import { Button } from "../components/widgets";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CurrentAccount } from "../lib/util/types";

const AgentProfile = () => {
    const { goBack } = useNavigation();
    const { params } = useRoute();

    const account = useMemo(() => {
        const { data } = params as { data: CurrentAccount };
        return data;
    }, [params]);

    console.log(account.profileImageUrl);

    return (
        <SafeAreaView className="h-full">
            <View className="flex-1 p-4">
                <TouchableHighlight
                    onPress={() => goBack()}
                    className=" h-8 w-8 rounded-lg flex items-center justify-center border-black/20 border"
                >
                    <Ionicons name="chevron-back" size={20} color="#334155" />
                </TouchableHighlight>

                <View className="w-36 border-black/10 h-36 bg-white mt-10 rounded-full border">
                    <Image className='w-full h-full object-cover absolute rounded-full' source={{ width: 50, height: 50, uri: account.profileImageUrl, cache: 'force-cache' }} />
                </View>

                <View className="bg-white p-4 mt-5 mb-2 rounded-xl border border-black/10">
                    <Text className="text-slate-800 font-bold">Email</Text>
                    <Text className="text-slate-500 mt-2">{account.email}</Text>
                </View>

                <View className="bg-white p-4  rounded-xl border border-black/10">
                    <Text className="text-slate-800 font-bold">Name</Text>
                    <Text className="text-slate-500 mt-2">{account.firstName} {account.secondName}</Text>
                </View>

                <View className="bg-white p-4  rounded-xl border mt-3 border-black/10">
                    <Text className="text-slate-800 font-bold">Role</Text>
                    <Text className="text-slate-500 mt-2">{account.role}</Text>
                </View>

                <View className="mt-4">
                    <Button
                        titleStyle={{ fontSize: 13 }}
                        icon={
                            <AntDesign
                                style={{ marginRight: 10 }}
                                name="plus"
                                size={24}
                                color="white"
                            />
                        }
                        title={"Add biometrics"}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AgentProfile;
