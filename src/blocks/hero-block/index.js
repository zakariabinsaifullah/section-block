import { RichText } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import './editor.scss';

const attributes = {
    backgroundImage: {
        type: 'string',
        default: null
    },
    padding: {
        type: 'object', 
        default: {
            top: '250px',
            left: '0',
            right: '0',
            bottom: '250px',
        }
    },
    alignment: {
        type: 'string',
        default: 'center'
    },
    title: {
        type: 'string',
        default: 'Solutions for All of Your Land Service Needs!'
    },
    titleTag: {
        type: 'string',
        default: 'h1'
    },
    titleColor: {
        type: 'string',
        default: '#000000'
    },
    titleFontSize: {
        type: 'number',
        default: 55
    },
    boxContent: {
        type: 'string',
        default: 'Call 469-589-9700'
    },
    boxContentColor: {
        type: 'string',
        default: '#000000'
    },
    boxContentFontSize: {
        type: 'number',
        default: 35
    },
    boxStyle: {
        type: 'string',
        default: 'box'
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

registerBlockType('gmtb-blocks/hero-block', {
    title: __( 'Hero Block' ),
    description: __( 'Hero Section Block for Home Page' ),
    category: 'theme-blocks', // new category 
    icon: 'grid-view', // dashicon 
    keywords: [ 'Hero Section', 'Hero Area' ],
    edit: edit,
    attributes,
    save: ({ attributes, className }) => {
        const { backgroundImage, title, titleTag, titleColor, titleFontSize, alignment, boxContent, boxContentColor, boxContentFontSize, padding, boxStyle, overlayType } = attributes;
        return(
            <section className={ `${className} ${overlayType} hero-block` } style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingTop: padding.top,
                paddingBottom: padding.bottom,
                paddingLeft: padding.left,
                paddingRight: padding.right,
            }}>
                <div className="container">
                    <div className="hero-content" style={{ textAlign: alignment }}>
                        <RichText.Content
                            tagName={ titleTag }
                            value={ title }
                            style={{ fontSize: titleFontSize, color: titleColor }}
                        />
                        <RichText.Content
                            tagName="span"
                            value={ boxContent }
                            className= { boxStyle }
                            style={{ fontSize: boxContentFontSize, color: boxContentColor }}
                        />
                    </div>
                </div>
            </section>
        )
    }
})
