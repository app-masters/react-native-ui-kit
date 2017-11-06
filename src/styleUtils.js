import { Dimensions } from 'react-native';

let ScreenSize = null;
let Styles = null;

// Styles for all projects
const defaultStyles = {
    // Padding
    pd0: {
        padding: 0
    },
    pd1: {
        padding: 4
    },
    pd2: {
        padding: 8
    },
    pd3: {
        padding: 16
    },
    pd4: {
        padding: 32
    },
    pd5: {
        padding: 64
    },

    // Margin Bottom
    mb0: {
        marginBottom: 0
    },
    mb1: {
        marginBottom: 4
    },
    mb2: {
        marginBottom: 8
    },
    mb3: {
        marginBottom: 16
    },
    mb4: {
        marginBottom: 32
    },
    mb5: {
        marginBottom: 64
    },

    // Margin Top
    mt0: {
        marginTop: 0
    },
    mt1: {
        marginTop: 4
    },
    mt2: {
        marginTop: 8
    },
    mt3: {
        marginTop: 16
    },
    mt4: {
        marginTop: 32
    },
    mt5: {
        marginTop: 64
    },

    // Margin
    mg0: {
        margin: 0
    },
    mg1: {
        margin: 4
    },
    mg2: {
        margin: 8
    },
    mg3: {
        margin: 16
    },
    mg4: {
        margin: 32
    },
    mg5: {
        margin: 64
    },

    // Text
    text: {
        bigTitle: (customStyles) => {
            return ([{
                fontSize: 34,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        },
        headline: (customStyles) => {
            return ([{
                fontSize: 24,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        },
        title: (customStyles) => {
            return ([{
                fontSize: 20,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        },
        subheading: (customStyles) => {
            return ([{
                fontSize: 16,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        },
        body: (customStyles) => {
            return ([{
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        },
        caption: (customStyles) => {
            return ([{
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'System',
                backgroundColor: 'transparent'
            }, customStyles]);
        }
    }
};

const startStyles = (appStyle) => {
    ScreenSize = Dimensions.get('window');
    Styles = Object.assign(defaultStyles, appStyle);
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

export { Styles, ScreenSize, startStyles, screenPosition, isPortrait, isLandscape };
