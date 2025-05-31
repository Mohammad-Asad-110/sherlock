import React from "react";
import {Text, View} from 'react-native';
import VisitCard from "@/components/VisitCard";
import {icons} from "@/constants/icons";

interface VisitOverviewProps {
    nextVisit?: string;
    lastVisit?: string;
}

const VisitOverview = ({nextVisit, lastVisit}: VisitOverviewProps) => {
    return (
        (nextVisit || lastVisit) && <View className="my-2.5 flex-col">
            <Text className="text-lg font-bold">
                Visit Overview
            </Text>
            {nextVisit && <VisitCard icon={icons.calendar} title={"Upcoming Visit"} description={nextVisit}/>}
            {lastVisit && <VisitCard icon={icons.tick} title={"Recent Visit"} description={lastVisit}/>}
        </View>
    );
};

export default VisitOverview;