export interface OTPRequest {
    mobile_number: string; // must include "+91"
}

export interface OTPVerify {
    mobile_number: string;
    otp: string;
}