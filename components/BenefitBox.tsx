import React from "react";
import {Image, Text, TouchableOpacity, View} from 'react-native';

interface BenefitBoxProps {
    icon?: any;  // Made optional with ?
    title: string;
    description: string;
    onPress?: () => void; // Optional onPress handler
}

const BenefitBox = ({icon, title, description, onPress}: BenefitBoxProps) => {
    // Wrapper component based on whether onPress exists
    const Wrapper = onPress ? TouchableOpacity : View;

    return (
        <Wrapper
            className="p-4 border border-solid border-grayish_blue rounded-lg h-full"
            onPress={onPress}
            activeOpacity={0.7} // Only applies when it's a TouchableOpacity
        >
            {icon && (
                <Image
                    source={icon}
                    style={{ maxWidth: 20, maxHeight: 20 }}
                    className="mb-2"
                    resizeMode="contain"
                />
            )}
            <Text className="text-lg font-bold text-secondary">{title}</Text>
            <Text className="text-sm text-accent">{description}</Text>
        </Wrapper>
    );
};

export default BenefitBox;
