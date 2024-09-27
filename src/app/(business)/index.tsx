import { Redirect } from 'expo-router';
import React from 'react';

export default function BusinessHomePage() {
  return <Redirect href={`/(business)/menu`} />;
}
