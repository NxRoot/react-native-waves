# react-native-waves 
Create beautiful wave animations using [React Native](https://reactnative.dev/)

## Requirements
* [react-native-svg](https://github.com/react-native-svg/react-native-svg#installation)
* [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Demo 

| 2 waves - bottom      | 2 waves - top/bottom   | 4 waves - top/bottom            |
|-----------|--------|-------------------|
| <img src="https://i.ibb.co/6sPTMNB/RPReplay-Final1655395380-1.gif" alt="Alt text" style="float: left" title="Optional title"> | <img src="https://i.ibb.co/ZgF9cbp/RPReplay-Final1655397179-3.gif" alt="Alt text" style="float: left" title="Optional title"> | <img src="https://i.ibb.co/SR6kd3B/RPReplay-Final1655390147.gif" alt="Alt text" style="float: left" title="Optional title"> |



## Installation
```
npm i react-native-waves
```

## Usage
```
import Wave from "react-native-waves"

<Wave placement="bottom"/>
```


## Examples

**Complex Wave**
```
<Wave placement="bottom" speed={20} maxPoints={8} delta={30}/>
```

**Multiple Waves**
```
<Wave placement="top" />
<Wave placement="top" gap={20} color="#003d66"/>

<Wave placement="bottom" />
<Wave placement="bottom" gap={20} color="#003d66"/>
```

## Performance
* Simulator can run up to 4/6 waves at 60fps depending on the device.
* This project was optimized to achieve full performance on any **physical device**.
* UI updates are handled by [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) to optimize rendering and achieve 60fps.

## Props (Wave)

| prop      | type   | value             | description           | more info                                               |
|-----------|--------|-------------------|-----------------------|-------------------------------------------------------|
| `placement` | [string](https://github.com/NxRoot/react-native-waves#placement) | bottom         | view position         |          top or bottom of the screen       |
| `speed`     | [number](https://github.com/NxRoot/react-native-waves#speed) | 7.5                | animation speed       |                                            |
| `maxPoints` | [number](https://github.com/NxRoot/react-native-waves#maxPoints) | 2              | number of wave points |                                            |
| `width`     | [number](https://github.com/NxRoot/react-native-waves#width) | screen width       | wave width            |                                            |
| `height`    | [number](https://github.com/NxRoot/react-native-waves#height) | screen height / 4 | wave height           |                                            |
| `delta`     | [number](https://github.com/NxRoot/react-native-waves#delta) | 60                 | wave delta            |           wave bounce amount               |
| `color`     | [string](https://github.com/NxRoot/react-native-waves#color) | #005c99            | wave color            |                                            |
| `gap`       | [number](https://github.com/NxRoot/react-native-waves#gap) | undefined            | wave gap              | gap between waves with equal placement |
| `flip`       | [boolean](https://github.com/NxRoot/react-native-waves#flip) | false            | flip wave 180deg              |  |

<br/>

## Run Example App ( [Expo](https://docs.expo.dev/get-started/installation/) )
**Clone app**

```
git clone https://github.com/NxRoot/react-native-waves.git
```
```
cd react-native-waves/example
```
**IOS**
```
npm run ios
```

**Android**
```
npm run android
```