# Resfeber
A booking.com hackathon idea.

## Directory Structure Explained
Although there are multiple directories and subdirectories, we are just concerned with two of them:

1. **screens**: The Screens folder consists of all the screens that will be rendered. To someone acquainted with Android App Development, **Screens in RN = Activities in Android Apps**.
2.  **src/components**: This is where all the reusable components are supposed to stay. Make Component names as germane as possible for better readability.

## Installation Steps

1. Add this line to the AndroidManifest.xml `<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />`. This is for location access. Might be required to sign in as well.
2. Add Google Maps API Key to NavigationComponent.js's `const GOOGLE_MAPS_APIKEY` field from our Slack Channel.
3. Change the absolute path in all Footer.js components.

## Some Issues that need to be resolved

1. The whitespace that appears for no reason between the NavigationComponent and the Footer in the Navigation Screen.
