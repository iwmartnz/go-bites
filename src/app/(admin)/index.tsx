import { Redirect } from 'expo-router';
import React from 'react';

export default function AdminHomePage() {
  return <Redirect href={`/(admin)/menu`} />;
}
