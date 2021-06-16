import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import './editor.scss';

const attributes = {
    serviceTitle: {
        type: 'string',
        default: 'Paragraph with Image'
    },
    desc: {
        type: 'string',
        default: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nemo consectetur consequatur omnis maxime perferendis.'
    },
    url: {
        type: 'string', 
        default: ''
    },
    id: {
        type: 'number'
    },
    alt: {
        type: 'string', 
        default: 'Service Image'
    },
    titleTag: {
        type: 'string',
        default: 'h1'
    },
    sectionId: {
        type: 'string',
        default: null
    },
    sectionBg: {
        type: 'string',
        default: '#E9F7CA'
    },
    showBtn: {
        type: 'boolean',
        default: true
    },
    btnLabel: {
        type: 'string',
        default: 'READ MORE'
    },
    btnLink: {
        type: 'string',
        default: '#'
    },
    boxShadow: {
        type: 'boolean',
        default: true
    }, 
    boxRightWidth: {
        type: 'number',
        default: 20
    },
    boxBottomWidth: {
        type: 'number',
        default: 20
    },
    borderColor: {
        type: 'string',
        default: '#f0a83c'
    },
    imagePosition: {
        type: 'boolean',
        default: false
    }
}

registerBlockType('wgb-blocks/paragraph-with-image', {
    title: __( 'Paragraph with Image' ),
    description: __( 'Paragraph with Image Section for Landing Page' ),
    category: 'custom-blocks', // new category 
    icon: 'list-view', // dashicon 
    keywords: [ 'Service Section', 'Service Area', 'about area', 'about section' ],
    edit: edit,
    attributes,
    save: ({ attributes }) => {
        const { className, serviceTitle, desc, url, alt, boxShadow, boxRightWidth, boxBottomWidth, borderColor, imagePosition, btnLabel, btnLink, titleTag, showBtn, sectionId, sectionBg } = attributes;
        return(
            <div 
                className={`paragraph-img ${className}`} 
                id={ sectionId }
                style={{ backgroundColor: sectionBg }}
            >
                <div className="container">
                    <div className="row align-items-center box-cont">
                        {
                            imagePosition ?
                            <div className="col-md-5">
                                <div className="box-image">
                                    {
                                        url &&
                                        <>
                                            {
                                                (boxShadow === true) ? 
                                                <>
                                                    <img src={url} alt={alt} style={{ boxShadow: `${boxRightWidth}px ${boxBottomWidth}px 0`, color: borderColor }} className="img-fluid" />
                                                </>
                                                : 
                                                <>
                                                    <img src={url} alt={alt} className="img-fluid" />
                                                </>
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                            :
                            <div class="col-md-7">
                                <div className="box-detail detail-left">
                                    <RichText.Content
                                        tagName={ titleTag }
                                        className={ className }
                                        value={ serviceTitle }
                                    />
                                    <RichText.Content
                                        tagName="p"
                                        className={ className }
                                        value={ desc }
                                    />
                                    <InnerBlocks.Content />
                                    {
                                        showBtn &&
                                        <div className="btn">
                                            <a 
                                                href={ btnLink } 
                                                rel="nofollow noopener"
                                            >
                                                <RichText.Content
                                                    value={ btnLabel }
                                                />
                                            </a>                                             
                                        </div>
                                    }
                                    
                                </div>
                            </div>
                        }
                        {
                            imagePosition ?
                            <div className="col-md-7">
                                <div className="box-detail detail-right">
                                    <RichText.Content
                                        tagName={ titleTag }
                                        className={ className }
                                        value={ serviceTitle }
                                    />
                                    <RichText.Content
                                        tagName="p"
                                        className={ className }
                                        value={ desc }
                                    />
                                    <InnerBlocks.Content />
                                    {
                                        showBtn &&
                                        <div className="btn">
                                            <a 
                                                href={ btnLink } 
                                                rel="nofollow noopener"
                                            >
                                                <RichText.Content
                                                    value={ btnLabel }
                                                />
                                            </a>                                             
                                        </div>    
                                    }
                                </div>
                            </div>
                            : 
                            <div className="col-md-5">
                                <div className="box-image">
                                    {
                                        url &&
                                        <>
                                            {
                                                (boxShadow === true) ? 
                                                <>
                                                    <img src={url} alt={alt} style={{ boxShadow: `${boxRightWidth}px ${boxBottomWidth}px 0`, color: borderColor }} className="img-fluid" />
                                                </>
                                                : 
                                                <>
                                                    <img src={url} alt={alt} className="img-fluid" />
                                                </>
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
})
