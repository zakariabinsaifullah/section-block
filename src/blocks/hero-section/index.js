import { RichText } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import './editor.scss';

const attributes = {
    title: {
        type: 'string',
        default: 'Aliquam sit amet accumsan mi.'
    }, 
    desc: {
        type: 'string',
        default: 'ger ut erat id enim pharetra aliquet.'
    },
    backgroundImage: {
        type: 'string',
        default: null
    },
    titleTag: {
        type: 'string',
        default: 'h1'
    },
    sectionId: {
        type: 'string',
        default: null
    },
    showBtn: {
        type: 'boolean',
        default: true
    },
    btnLabel: {
        type: 'string',
        default: 'Read More'
    },
    btnLink: {
        type: 'string',
        default: '#'
    },
    bntMinWidth: {
        type: 'number', 
        default: 250
    }
}

registerBlockType('wgb-blocks/hero-section', {
    title: __( 'Hero Section' ),
    description: __( 'Hero Section for Landing Page' ),
    category: 'custom-blocks', // new category 
    icon: 'grid-view', // dashicon 
    keywords: [ 'Hero Section', 'Hero Area' ],
    edit: edit,
    attributes,
    save: ({ attributes }) => {
        const { className, backgroundImage, title, desc, titleTag, btnLabel, btnLink, bntMinWidth, showBtn, sectionId } = attributes;
        return(
            <section className={ `${className} hero-slider` } id={sectionId}  style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="overlay">
                    <div className="container">
                        <div className="hero-sld-cnt">
                            <RichText.Content
                                tagName={ titleTag }
                                value={ title }
                            />
                            <RichText.Content
                                tagName="p"
                                value={ desc }
                            />
                            {
                                showBtn &&
                                <a 
                                    href={ btnLink } 
                                    rel="nofollow noopener" 
                                    className={ `btn btn-warning mt-3 text-white px-5 section-btn`}
                                    style={{
                                        minWidth: bntMinWidth
                                    }}
                                >
                                    <RichText.Content
                                        tagName="span"
                                        value={ btnLabel }
                                    />
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
})
