import React from "react";
import {Text, View} from 'react-native';
import BenefitBox from "@/components/BenefitBox";


const DashboardSummary = () => {

    const summaryData = [
        {
            title: "Total Visits",
            description: "25",
            onPress: () => console.log("Total visits clicked")
        },
        {
            title: "Upcoming Visits",
            description: "3",
            onPress: () => console.log("Upcoming visits clicked")
        },
        {
            title: "Completed Visits",
            description: "22",
            onPress: () => console.log("Completed visits clicked")
        },
        {
            title: "Cancelled Visits",
            description: "1",
            onPress: () => console.log("Cancelled visits clicked")
        },
        {
            title: "Average Duration",
            description: "45 mins",
            onPress: () => console.log("Average duration clicked")
        },
    ];


    return (
        <View className="my-2.5 flex-col">
            <Text className="text-lg font-bold mb-2">
                Summary
            </Text>
            <View className="flex-row flex-wrap gap-y-2">

                {summaryData.map((summary) => (
                    <View key={summary.title} className="pr-2 w-full xs:w-1/2 sm:w-[45%] md:w-[30%] lg:w-[20%]">
                        <BenefitBox
                            key = {summary.title}
                            title = {summary.title}
                            description = {summary.description}
                            onPress={summary.onPress}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default DashboardSummary;