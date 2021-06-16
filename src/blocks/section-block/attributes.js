// All attributes 
const attributes = {
    sectionId: {
        type: 'string',
        default: null
    },
    padding: {
        type: 'object', 
        default: {
            top: '150px',
            left: '0',
            right: '0',
            bottom: '150px',
        }
    },
    pressed: {
        type: 'boolean',
        default: true
    },
    notPressed: {
        type: 'boolean',
        default: false
    },
    bgColor: {
        type: 'string',
        default: null,
    },
    bgImage: {
        type: 'string',
        default: null
    },
    bgPositions: {
        type: 'string',
        default: 'center center'
    },
    enableOverlay: {
        type: 'boolean',
        default: false
    },
    overlayType: {
        type: 'string',
        default: null,
    }
}
export default attributes; 