import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import TopBarSection from '@/components/sections/TopBarSection';
import { sendOtp, verifyOtp } from '@/services/auth';

export default function LoginScreen() {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const router = useRouter();

    const handleSendOtp = async () => {
        try {
            const fullNumber = `+91${phone}`;
            await sendOtp({ mobile_number: fullNumber });
            Alert.alert('OTP Sent', 'Check your phone for the OTP');
        } catch (error) {
            console.error('Send OTP Error:', error);
            Alert.alert('Error', 'Failed to send OTP');
        }
    };


    const isValidIndianPhoneNumber = (input: string) => {
        const cleaned = input.replace(/[^0-9]/g, '');
        if (cleaned.length !== 10) return false;
        return /^[6-9][0-9]{9}$/.test(cleaned);
    };

    const validateOtp = () => {
        console.log('Phone raw input:', phone);

        if (!isValidIndianPhoneNumber(phone)) {
            Alert.alert('Invalid Number', 'Please enter a valid Indian mobile number');
            return;
        }
    };
    const handleVerify = async () => {
        validateOtp();
        try {
            const fullNumber = `+91${phone}`;
            const result = await verifyOtp({ mobile_number: fullNumber, otp });
            console.log('Token:', result.token); // Handle token or session
            Alert.alert('Success', 'OTP verified!');
            // router.push('/home'); // if needed
        } catch (error) {
            console.error('Verify OTP Error:', error);
            Alert.alert('Invalid OTP', 'Please check and try again');
        }
    };

    return (
        <View className="flex-1 bg-white">
            {/* TopBar at the top */}
            <TopBarSection />

            {/* Centered Login Form */}
            <View className="flex-2 px-6">
                <Text className="text-3xl font-bold text-center mb-10">Login</Text>

                {/* Mobile Number Input */}
                <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mb-4">
                    <Text className="text-gray-700 mr-2 font-medium">+91</Text>
                    <TextInput
                        className="flex-1 text-gray-700"
                        keyboardType="number-pad"
                        placeholder="Enter mobile number"
                        maxLength={10}
                        value={phone}
                        onChangeText={(text) => {
                            const cleaned = text.replace(/[^0-9]/g, '');
                            setPhone(cleaned);
                        }}
                    />
                </View>

                <TextInput
                    className="bg-gray-100 text-gray-700 px-4 py-3 rounded-xl mb-6"
                    placeholder="Enter OTP"
                    keyboardType="number-pad"
                    value={otp}
                    onChangeText={setOtp}
                    maxLength={6}
                />

                {/* Verify Button */}
                <TouchableOpacity
                    className="bg-blue-100 py-3 rounded-xl"
                    onPress={handleVerify}
                    activeOpacity={0.8}
                >
                    <Text className="text-center font-semibold">Verify</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}