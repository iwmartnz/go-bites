import { Redirect } from 'expo-router';
import React from 'react';

export default function UserHomePage() {
  return <Redirect href={`/(user)/menu`} />;
}
