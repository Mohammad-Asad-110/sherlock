import {router, useLocalSearchParams} from "expo-router";
import {SafeAreaView, ScrollView, View} from "react-native";
import React from "react";
import VisitOverview from "@/components/sections/dashboard/VisitOverview";
import DashboardHeader from "@/components/sections/dashboard/DashboardHeader";
import DashboardSummary from "@/components/sections/dashboard/DashboardSummary";
import PageHeader from "@/components/sections/common/PageHeader";
import Divider from "@/components/sections/common/Divider";
import QuickActionSection from "@/components/sections/dashboard/QuickActionSection";

export default function PatientDashboard() {
    const { patientId } =  useLocalSearchParams() as { patientId: string }

    const handleBack = () => {
        router.back();
    };

    // Mock Data
    const username = "Ehsan Ansari"
    const patientName = "Mohammad Asad";
    const patientRelation = "Brother";
    const visitOverview = {
        nextVisit: "2021-09-01, 11:00AM",
        lastVisit: "2021-08-01, 12:30PM",
    };

    return (
        <SafeAreaView className="flex-1 mx-[5%] md:mx-[10%]">
            <PageHeader title={"Care Dashboard"}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                className="flex-1"
            >
                <DashboardHeader user={username} patientName={patientName} patientRelation={patientRelation} />
                <VisitOverview {...visitOverview} />
                <Divider/>
                <DashboardSummary patientId={patientId}/>
                <Divider/>
                <QuickActionSection/>
            </ScrollView>
        </SafeAreaView>
    )

}