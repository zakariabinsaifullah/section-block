import { InspectorControls, MediaUpload, RichText } from '@wordpress/block-editor';
import { IconButton, PanelBody, RangeControl, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
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
class HeroSection extends Component {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { backgroundImage, title, desc, titleTag, btnLabel, btnLink, bntMinWidth, showBtn, sectionId } = attributes; 
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
                        title={__("Section Background")}
                        initialOpen= { false }
                    >
                        <MediaUpload
                            onSelect={ (newImage) => setAttributes({ backgroundImage: newImage.sizes.full.url }) }
                            type="image"
                            value={ backgroundImage }
                            render={ ( { open } ) => (
                                <IconButton
                                    className="editor-media-placeholder__button is-button is-default is-large"
                                    icon="upload"
                                    onClick={ open }>
                                    Add Background Image
                                </IconButton>
                            )}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Title Tag")}
                        initialOpen= { false }
                    >
                        <SelectControl
                            label={ __("Select Tag for Title") }
                            options={ headingTags }
                            onChange={ ( titleTag ) => { setAttributes( { titleTag } ) } }
                            value={ titleTag }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Button Settings")}
                        initialOpen= { false }
                    >
                        <ToggleControl
                            label="Show Button"
                            checked={ showBtn }
                            onChange={ () => setAttributes({ showBtn: ! showBtn }) }
                        />
                        {
                            showBtn &&
                            <>
                                <RangeControl
                                    label={ __( 'Min Width' ) }
                                    value={ bntMinWidth }
                                    onChange={ ( bntMinWidth ) => setAttributes( { bntMinWidth } ) }
                                    min={ 0 }
                                    max={ 500 }
                                />
                                <TextControl
                                    label={ __( "Link" ) }
                                    onChange={ ( btnLink ) => setAttributes( { btnLink } ) }
                                    value={ btnLink }
                                />
                            </>
                        }
                    </PanelBody>
                </InspectorControls>
                <section className={ `${className} hero-slider` } id={sectionId} style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
				}}>
                    <div className="overlay">
                        <div className="container">
                            <div className="hero-sld-cnt">
                                <RichText
                                    tagName={ titleTag }
                                    value={ title }
                                    onChange={ ( title ) => setAttributes( { title } ) }
                                />
                                <RichText
                                    tagName="p"
                                    value={ desc }
                                    onChange={ ( desc ) => setAttributes( { desc } ) }
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
                                        <RichText
                                            tagName="span"
                                            value={ btnLabel }
                                            onChange={ ( btnLabel ) => setAttributes( { btnLabel } ) }
                                        />
                                    </a>
                                }
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default HeroSection;