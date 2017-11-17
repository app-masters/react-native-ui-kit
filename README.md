# React Native UI Kit

This is an UI kit for React Native with the common components used in App Masters.


## Components
- Button
- Card
- Divider
- Input Field
- Offline Image
- Spinner
- Style Utils

## Usage

Before start, you must have a style file like (?).

````
$ npm install @app-masters/react-native-ui-kit --save-dev

````
Import your styles files and startStyles:

```
import { startStyles } from '@app-masters/react-native-ui-kit';
import AppStyles from './styles/styles';
```

In your app constructor:

```
startStyles(AppStyles);
````

## Description

### Button

Conditional button with style of Android and iOS

| Props          | Default | Description                                                                          |
|----------------|---------|--------------------------------------------------------------------------------------|
| style          |    -    | [Optional] A custom style for that will override any default in the button container |
| onPress        |    -    | Button's callback                                                                    |
| label          |    -    | Button's text                                                                        |
| image          |    -    | [Optional] Icon that will apear before the label                                     |
| subText        |    -    | [Optional] Label caption                                                             |
| subTextStyle   |    -    | [Optional] Style for the caption                                                     |
| imageColor     |    -    | [Optional] Color of icon                                                             |
| primaryColor   |    -    | Background color when raised. When not, color of text.                               |
| secondaryColor |    -    | Color when pressed.                                                                  |
| textColor      |    -    | Color of text                                                                        |
| raised         |  false  | When raised, background color is shown.                                              |

### Card

Simple material design card.

| Props          | Default | Description                                             |
|----------------|---------|---------------------------------------------------------|
| children       |    -    | Card content                                            |
| horizontal     |  false  | If horizontal, card will not have horizontal border.    |
| style          |    -    | [Optional] Custom styles that will override the default |
| onPress        |    -    | [Optional] Callback for when the card is pressed        |

### Divider

Simple material design horizontal divider

### Input Field

Pretty Input field

| Props           | Default | Description                                                      |
|-----------------|---------|------------------------------------------------------------------|
| style           |    -    | [Optional] Custom style that will override the container's style |
| value           |    -    | Value of input                                                   |
| autoCapitalize  |  false  | Set the first characters to upper case                           |
| maxLength       |    -    | Maximun number of characters                                     |
| keyboardType    |    -    | [Optional] Set the keyboard type                                 |
| onChangeText    |    -    | Callback for changing in the text                                |
| placeholder     |    -    | [Optional] Text when nothing is typed                            |
| secureTextEntry |  false  | If true, hide the characters (password)                          |
| icon            |    -    | [Optional] Icon that will be shown in the right of input         |
| primaryColor    |    -    | Color of icon and border                                         |
| error           |  false  | If true, error message will be shown and color will change       |
| errorMessage    |    -    | Message to show the error                                        |
| errorColor      |    -    | Color override in error                                          |
| suffix          |    -    | [Optional] Suffix text                                           |

### Offline Image

Image component with that will load an online image and show an animation.
If no online or fail to get, an offline image will be shown in the place.

| Props           | Default | Description                                                      |
|-----------------|---------|------------------------------------------------------------------|
| online          |    -    | Image link for online get                                        |
| offline         |    -    | Offline default image                                            |
| style           |    -    | [Optional] Custom style that will override the container's style |

### Spinner

View with a spinner for loading states

| Props           | Default | Description                                                      |
|-----------------|---------|------------------------------------------------------------------|
| color           |    -    | [Optional] Color of Spinner                                      |
| screen          |  false  | If true, spinner will be larger                                  |

### Style Utils

Functions used for creation of default styles

| Functions       | Params      | Description                                                               |
|-----------------|-------------|---------------------------------------------------------------------------|
| startStyles     | (appStyles) | Create a object will default styles and merge with all custom app styles. |
| Styles          |      -      | Static object will all app styles                                         |
| ScreenSize      |      -      | Static object with screen size of phone: {width, height}                  |
| isPortrait      |     ( )     | Return true if Portrait                                                   |
| isLandscape     |     ( )     | Return true if Landscape                                                  |
| screenPosition  |     ( )     | Return "LANDSCAPE" or "PORTRAIT"                                          |
