import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const headingTags = [
    {
        label: 'h1',
        value: 'h1' 
    },
    {
        label: 'h2',
        value: 'h2' 
    },
    {
        label: 'h3',
        value: 'h3' 
    },
    {
        label: 'h4',
        value: 'h4' 
    },
    {
        label: 'h5',
        value: 'h5' 
    },
    {
        label: 'h6',
        value: 'h6' 
    }
];

class ContactSection extends Component {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { title, titleTag, sectionId, contentPosition, showPhone, showEmail, showAddress, phoneHeading, phoneContent, emailHeading, emailContent, addressHeading, addressContent } = attributes; 
        return (
            <div>
                <InspectorControls>        
                    <PanelBody 
                        title={__("Section Settings")}
                        initialOpen= { true }
                    >
                        <TextControl
                            label="Section ID"
                            onChange={ ( sectionId ) => setAttributes( { sectionId } ) }
                            value={ sectionId }
                        />
                    </PanelBody>
                    <PanelBody
                        title= { __( "Content Settings" ) }
                        initialOpen= { false }
                    >
                        <SelectControl
                            label={ __("Select Tag for Content Title") }
                            options={ headingTags }
                            onChange={ ( titleTag ) => { setAttributes( { titleTag } ) } }
                            value={ titleTag }
                        />
                        <ToggleControl
                            label="Show Content at Left Side?"
                            checked={ contentPosition }
                            onChange={ () => setAttributes( { contentPosition: !contentPosition} ) }
                        />
                    </PanelBody>
                    <PanelBody
                        title= { __( "Content Elements Display" ) }
                        initialOpen= { false }
                    >
                        <ToggleControl
                            label="Show Phone Element"
                            checked={ showPhone }
                            onChange={ () => setAttributes( { showPhone: !showPhone} ) }
                        />
                        <ToggleControl
                            label="Show Email Element"
                            checked={ showEmail }
                            onChange={ () => setAttributes( { showEmail: !showEmail} ) }
                        />
                        <ToggleControl
                            label="Show Address Element"
                            checked={ showAddress }
                            onChange={ () => setAttributes( { showAddress: !showAddress} ) }
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={ `footer-content ${className}`}>
                    <div className="container">
                        <div className="row">
                            {
                                contentPosition ?
                                <>  
                                    <div className="col-md-5">
                                        <div className="footer-cnt-right">
                                            <RichText
                                                tagName={ titleTag }
                                                value={ title }
                                            onChange={ ( title ) => setAttributes( { title } ) }
                                            />
                                            {
                                                showPhone &&
                                                <div class="footer-cnt-inner">
                                                    <RichText
                                                        tagName="h4"
                                                        value={ phoneHeading }
                                                        onChange={ ( phoneHeading ) => setAttributes( { phoneHeading } ) }
                                                    />
                                                    <RichText
                                                        tagName="p"
                                                        value={ phoneContent }
                                                        onChange={ ( phoneContent ) => setAttributes( { phoneContent } ) }
                                                    />
                                                </div>
                                            }
                                            {
                                                showEmail &&
                                                <div class="footer-cnt-inner">
                                                    <RichText
                                                        tagName="h4"
                                                        value={ emailHeading }
                                                        onChange={ ( emailHeading ) => setAttributes( { emailHeading } ) }
                                                    />
                                                    <RichText
                                                        tagName="p"
                                                        value={ emailContent }
                                                        onChange={ ( emailContent ) => setAttributes( { emailContent } ) }
                                                    />
                                                </div>
                                            }
                                            {
                                                showAddress &&
                                                <div class="footer-cnt-inner">
                                                    <RichText
                                                        tagName="h4"
                                                        value={ addressHeading }
                                                        onChange={ ( addressHeading ) => setAttributes( { addressHeading } ) }
                                                    />
                                                    <RichText
                                                        tagName="p"
                                                        value={ addressContent }
                                                        onChange={ ( addressContent ) => setAttributes( { addressContent } ) }
                                                    />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="footer-cnt-left">
                                            <InnerBlocks 
                                                allowedBlocks={ ['core/shortcode'] }
                                                template={[
                                                    [
                                                        'core/shortcode'
                                                    ]
                                                ]}
                                                templateLock= 'all'
                                            />
                                        </div>
                                    </div>
                                </>
                                : 
                                <>
                                    <div className="col-md-7">
                                        <div className="footer-cnt-left">
                                            <InnerBlocks 
                                                allowedBlocks={ ['core/shortcode'] }
                                                template={[
                                                    [
                                                        'core/shortcode'
                                                    ]
                                                ]}
                                                templateLock= 'all'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="footer-cnt-right">
                                            <RichText
                                                tagName={ titleTag }
                                                value={ title }
                                            onChange={ ( title ) => setAttributes( { title } ) }
                                            />
                                            {
                                                showPhone &&
                                                <div class="footer-cnt-inner">
                                                    <RichText
                                                        tagName="h4"
                                                        value={ phoneHeading }
                                                        onChange={ ( phoneHeading ) => setAttributes( { phoneHeading } ) }
                                                    />
                                                    <RichText
                                                        tagName="p"
                                                        value={ phoneContent }
                                                        onChange={ ( phoneContent ) => setAttributes( { phoneContent } ) }
                                                    />
                                                </div>
                                            }
                                            {
                                                showEmail &&
                                                <div class="footer-cnt-inner">
                                                    <RichText
                                                        tagName="h4"
                                                        value={ emailHeading }
                                                        onChange={ ( emailHeading ) => setAttributes( { emailHeading } ) }
                                                    />
                                                    <RichText
                                                        tagName="p"
                                                        value={ emailContent }
                                                        onChange={ ( emailContent ) => setAttributes( { emailContent } ) }
                                                    />
                                                </div>
                                            }
                                            {
                                                showAddress &&
                                                <div class="footer-cnt-inner">
                                                    <RichText
                                                        tagName="h4"
                                                        value={ addressHeading }
                                                        onChange={ ( addressHeading ) => setAttributes( { addressHeading } ) }
                                                    />
                                                    <RichText
                                                        tagName="p"
                                                        value={ addressContent }
                                                        onChange={ ( addressContent ) => setAttributes( { addressContent } ) }
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
            </div>
        )
    }
}
export default ContactSection;