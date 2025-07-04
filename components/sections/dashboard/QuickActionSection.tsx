import {View} from "react-native";
import React from "react";
import ActionButton from "@/components/ActionButton";

function QuickActionSection(){
    return (
        <View>
            <View className="flex flex-row flex-wrap gap-y-2 gap-x-2">
                <ActionButton message={"Edit Profile"}/>
                <ActionButton message={"Edit Subscription"}/>
                <ActionButton message={"Cancel Subscription"}/>
            </View>
        </View>
    )
}

export default QuickActionSection;