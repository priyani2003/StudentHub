import React from 'react';
import { Stack } from 'expo-router';

export default function HomeStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Student Dashboard',
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: 'Student ID Details',
          presentation: 'modal', // Modal එකක් ලෙස පෙන්වීම සඳහා
        }}
      />
    </Stack>
  );
}