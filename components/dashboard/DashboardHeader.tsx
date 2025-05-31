import React from "react";
import {Text} from 'react-native';

interface DashboardHeaderProps {
    user: string;
    patientName: string;
    patientRelation?: String;
}

const DashboardHeader = ({user, patientRelation, patientName}: DashboardHeaderProps) => {
    const renderCapitalizedText = (text: string) => (
        <Text className="capitalize">{text}</Text>
    );

    return (
        <Text className="text-xl font-bold font-lexend mt-5">
            Hi, {renderCapitalizedText(user)}, here's your {renderCapitalizedText(patientName)}
            {patientRelation ? ` (${patientRelation}) ` : ''}care summary.
        </Text>
    );
};

export default DashboardHeader;