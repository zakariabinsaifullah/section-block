import { RichText } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';

registerBlockType('gmtb-blocks/advanced-button', {
    title: __( 'Advanced Button' ),
    description: __( 'Advanced Gutenberg Button Block' ),
    category: 'theme-blocks', // new category 
    icon: 'button', // dashicon 
    keywords: [ 'button block' ],
    edit: edit,
    attributes,
    save: ({ attributes, className }) => {
        const { label, link, alignment, type, style, window, color, background } = attributes;
        return(
            <div className={ `${className} advanced_btn` } style={{ textAlign: alignment }}>
                <a href={ link } rel="nofollow noopener" target={`_${window}`} className={ `${type} ${style}` } style={{ color: color, backgroundColor: background, borderColor: color }}>
                    <RichText.Content
                        tagName="span"
                        value={ label }
                    />
                    {
                        type == 'iconic_btn' &&
                        <i className="fa fa-long-arrow-right"></i>
                    }
                </a>
            </div>
        )
    }
})
