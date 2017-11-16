import { Dimensions } from 'react-native';

let ScreenSize = null;
let Styles = null;
let Colors = null;

// Styles for all projects
const textStyles = {
    // Text
    text: {
        bigTitle: (customStyles) => {
            const color = (Colors)? Colors.text.default : '#212121';
            return ([{
                color,
                fontSize: 34,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        },
        headline: (customStyles) => {
            const color = (Colors)? Colors.text.default : '#212121';
            return ([{
                color,
                fontSize: 24,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        },
        title: (customStyles) => {
            const color = (Colors)? Colors.text.default : '#212121';
            return ([{
                color,
                fontSize: 20,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        },
        subheading: (customStyles) => {
            const color = (Colors)? Colors.text.default : '#212121';
            return ([{
                color,
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        },
        body: (customStyles) => {
            const color = (Colors)? Colors.text.default : '#212121';
            return ([{
                color,
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        },
        caption: (customStyles) => {
            const color = (Colors)? Colors.text.default : '#212121';
            return ([{
                color,
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        }
    }
};

const paddings = (base) => {
    let styleObj = {};
    for (let i = 0; i < 6; i++) {
        styleObj['p' + i] = {padding: base * Math.pow(2,i)};
        styleObj['pt' + i] = {paddingTop: base * Math.pow(2,i)};
        styleObj['pb' + i] = {paddingBottom: base * Math.pow(2,i)};
        styleObj['pl' + i] = {paddingLeft: base * Math.pow(2,i)};
        styleObj['pr' + i] = {paddingRight: base * Math.pow(2,i)};
        styleObj['pv' + i] = {paddingVertical: base * Math.pow(2,i)};
        styleObj['ph' + i] = {paddingHorizontal: base * Math.pow(2,i)};
    }
    return styleObj;
};

const margins = (base) => {
    let styleObj = {};
    for (let i = 0; i < 6; i++) {
        styleObj['m' + i] = {margin: base * Math.pow(2,i)};
        styleObj['mt' + i] = {marginTop: base * Math.pow(2,i)};
        styleObj['mb' + i] = {marginBottom: base * Math.pow(2,i)};
        styleObj['ml' + i] = {marginLeft: base * Math.pow(2,i)};
        styleObj['mr' + i] = {marginRight: base * Math.pow(2,i)};
        styleObj['mv' + i] = {marginVertical: base * Math.pow(2,i)};
        styleObj['mh' + i] = {marginHorizontal: base * Math.pow(2,i)};
    }
    return styleObj;
};


const startStyles = (appStyle, appColors, appBaseMetric) => {
    ScreenSize = Dimensions.get('window');
    if(!appBaseMetric){
        appBaseMetric = 2;
    }
    Colors = appColors;
    Styles = {
        ...textStyles,
        ...appStyle,
        ...paddings(appBaseMetric),
        ...margins(appBaseMetric)
    };
};

const screenPosition = () => {
    ScreenSize = Dimensions.get('window');
    const {width, height} = ScreenSize;
    if (width > height) {
        return ('PORTRAIT');
    } else {
        return ('LANDSCAPE');
    }
};

const isPortrait = () => (screenPosition() === 'PORTRAIT');
const isLandscape = () => (screenPosition() === 'LANDSCAPE');

export { Colors, Styles, ScreenSize, startStyles, screenPosition, isPortrait, isLandscape, defaultStyles };
