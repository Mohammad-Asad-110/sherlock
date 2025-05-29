import api from './api';
import { SEND_OTP, VERIFY_OTP } from '@/constants/endpoints';
import { OTPRequest, OTPVerify } from '@/types/auth';

export const sendOtp = async (data: OTPRequest) => {
    const response = await api.post(SEND_OTP, data);
    return response.data;
};

export const verifyOtp = async (data: OTPVerify) => {
    const response = await api.post(VERIFY_OTP, data);
    return response.data;
};