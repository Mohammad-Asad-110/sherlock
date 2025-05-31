import {Image, Text, View} from 'react-native';

interface VisitCardProps {
    title: String;
    description: String;
    icon?: any;
    metadata?: String;
}

const VisitCard = ({title, description, icon, metadata}: VisitCardProps) => {
    return (
        <View className="flex-row items-center py-2 my-2">
            <View className="flex-col items-center">
                {icon && <Image source={icon} style={{ maxWidth: 50, maxHeight: 50 }} className="mr-2" resizeMode="contain"/>}
            </View>
            <View className="flex-col mx-2 flex-1 justify-center">
                <View>
                    <Text className="text-base font-semibold text-secondary font-lexend">{title}</Text>
                    <Text className="text-sm text-accent">{description}</Text>
                    <Text className="text-xs text-accent text-wrap">{metadata}</Text>
                </View>
            </View>
        </View>
    );
};

export default VisitCard;