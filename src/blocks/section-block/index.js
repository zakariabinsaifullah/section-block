import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';

registerBlockType('gmtb-blocks/section-block', {
    title: __( 'Section Block' ),
    description: __( 'Section Block includes all Gutenberg Blocks' ),
    category: 'theme-blocks', // new category 
    icon: 'media-document', // dashicon 
    keywords: [ 'section block' ],
    edit: edit,
    attributes,
    save: ({ attributes }) => {
        const { sectionId, padding, bgColor, bgImage, className, overlayType, bgPositions } = attributes;
        return(
            <section 
                className={ `section-block ${className} ${overlayType}` } 
                id={ sectionId }
                style={{
                    paddingTop: padding.top,
                    paddingBottom: padding.bottom,
                    paddingLeft: padding.left,
                    paddingRight: padding.right,
                    backgroundColor: bgColor,
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: bgPositions,
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="ast-container">
                    <InnerBlocks.Content />
                </div>
            </section>
        )
    }
})
