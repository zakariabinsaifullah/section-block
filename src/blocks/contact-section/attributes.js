const attributes = {
    title: {
        type: 'string',
        default: 'CONTACT US'
    },
    titleTag: {
        type: 'string',
        default: 'h2'
    },
    sectionId: {
        type: 'string',
        default: null
    },
    contentPosition: {
        type: 'boolean',
        default: false
    },
    showPhone: {
        type: 'boolean',
        default: true
    },
    showEmail: {
        type: 'boolean',
        default: true
    },
    showAddress: {
        type: 'boolean',
        default: true
    },
    phoneHeading: {
        type: 'string',
        default: 'PHONE'
    },
    phoneContent: {
        type: 'string',
        default: '+123 - 456 - 7890'
    },
    emailHeading: {
        type: 'string',
        default: 'EMAIL'
    },
    emailContent: {
        type: 'string',
        default: 'contact@stefano.info'
    },
    addressHeading: {
        type: 'string',
        default: 'ADDRESS'
    },
    addressContent: {
        type: 'string',
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
}
export default attributes;