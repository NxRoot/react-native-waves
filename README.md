# react-native-waves 
Create beautiful wave animations using [React Native](https://reactnative.dev/)

## Requirements
* [react-native-svg](https://github.com/react-native-svg/react-native-svg#installation)
* [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Demo (Using 4 waves)
<img src="https://i.ibb.co/WD1h1yt/ezgif-com-gif-maker-2.gif" alt="Alt text" style="float: left" title="Optional title">

## Installation
**Module**
```
npm i react-native-waves
```
**Import**
```
import Wave from "react-native-waves"
```

## Examples

**Simple Wave**
```
<Wave placement="bottom"/>
```

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

## Attributes

| prop      | type   | value             | description           | more info                                               |
|-----------|--------|-------------------|-----------------------|-------------------------------------------------------|
| `placement` | [string](https://www.npmjs.com/package/react-native-waves#placement) | bottom         | view position         |          top or bottom of the screen       |
| `speed`     | [number](https://www.npmjs.com/package/react-native-waves#speed) | 7.5                | animation speed       |                                            |
| `maxPoints` | [number](https://www.npmjs.com/package/react-native-waves#maxPoints) | 2              | number of wave points |                                            |
| `width`     | [number](https://www.npmjs.com/package/react-native-waves#width) | screen width       | wave width            |                                            |
| `height`    | [number](https://www.npmjs.com/package/react-native-waves#height) | screen height / 4 | wave height           |                                            |
| `delta`     | [number](https://www.npmjs.com/package/react-native-waves#delta) | 60                 | wave delta            |           wave bounce amount               |
| `color`     | [string](https://www.npmjs.com/package/react-native-waves#color) | #005c99            | wave color            |                                            |
| `gap`       | [number](https://www.npmjs.com/package/react-native-waves#gap) | undefined            | wave gap              | gap between last wave with equal placement |