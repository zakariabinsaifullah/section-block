import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';

registerBlockType('wgb-blocks/contact-section', {
    title: __( 'Contact Section' ),
    description: __( 'Contact Section for Landing Page' ),
    category: 'custom-blocks', // new category 
    icon: 'email', // dashicon 
    keywords: [ 'Contact Section', 'Contact Area' ],
    edit: edit,
    attributes,
    save: ({ attributes, className }) => {
        const { title, titleTag, sectionId, contentPosition, showPhone, showEmail, showAddress, phoneHeading, phoneContent, emailHeading, emailContent, addressHeading, addressContent } = attributes;
        return(
            <div className={ `footer-content ${className}` } id={ sectionId }>
                <div className="container">
                    <div className="row">
                        {
                            contentPosition ? 
                            <>
                                <div className="col-md-5">
                                    <div className="footer-cnt-right">
                                            <RichText.Content
                                                tagName={ titleTag }
                                                value={ title }
                                            />
                                        {
                                                showPhone &&
                                                <div class="footer-cnt-inner">
                                                    <RichText.Content
                                                        tagName="h4"
                                                        value={ phoneHeading }
                                                    />
                                                    <RichText.Content
                                                        tagName="p"
                                                        value={ phoneContent }
                                                    />
                                                </div>
                                            }
                                            {
                                                showEmail &&
                                                <div class="footer-cnt-inner">
                                                    <RichText.Content
                                                        tagName="h4"
                                                        value={ emailHeading }
                                                    />
                                                    <RichText.Content
                                                        tagName="p"
                                                        value={ emailContent }
                                                    />
                                                </div>
                                            }
                                            {
                                                showAddress &&
                                                <div class="footer-cnt-inner">
                                                    <RichText.Content
                                                        tagName="h4"
                                                        value={ addressHeading }
                                                    />
                                                    <RichText.Content
                                                        tagName="p"
                                                        value={ addressContent }
                                                    />
                                                </div>
                                            }
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="footer-cnt-left">
                                        <InnerBlocks.Content />
                                    </div>
                                </div>
                            </>
                            : 
                            <>
                                <div className="col-md-7">
                                    <div className="footer-cnt-left">
                                        <InnerBlocks.Content />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="footer-cnt-right">
                                            <RichText.Content
                                                tagName={ titleTag }
                                                value={ title }
                                            />
                                        {
                                                showPhone &&
                                                <div class="footer-cnt-inner">
                                                    <RichText.Content
                                                        tagName="h4"
                                                        value={ phoneHeading }
                                                    />
                                                    <RichText.Content
                                                        tagName="p"
                                                        value={ phoneContent }
                                                    />
                                                </div>
                                            }
                                            {
                                                showEmail &&
                                                <div class="footer-cnt-inner">
                                                    <RichText.Content
                                                        tagName="h4"
                                                        value={ emailHeading }
                                                    />
                                                    <RichText.Content
                                                        tagName="p"
                                                        value={ emailContent }
                                                    />
                                                </div>
                                            }
                                            {
                                                showAddress &&
                                                <div class="footer-cnt-inner">
                                                    <RichText.Content
                                                        tagName="h4"
                                                        value={ addressHeading }
                                                    />
                                                    <RichText.Content
                                                        tagName="p"
                                                        value={ addressContent }
                                                    />
                                                </div>
                                            }
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        )
    }
})
