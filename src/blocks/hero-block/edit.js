import { InspectorControls, MediaUpload, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl, SelectControl, ToggleControl, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const overlay = [
    {
        label: 'Select Overlay Type',
        value: null
    },
    {
        label: 'Black',
        value: 'black_overlay'
    },
    {
        label: 'White',
        value: 'white_overlay'
    },
]

const align = [
    {
        label: 'Left',
        value: 'left' 
    },
    {
        label: 'Center',
        value: 'center' 
    },
    {
        label: 'Right',
        value: 'right' 
    },
]

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

const styles = [
    {
        label: 'Normal Style',
        value: 'normal'
    },
    {
        label: 'Box Style',
        value: 'box'
    }
];

class HeroBlock extends Component {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { backgroundImage, title, titleTag, titleColor, titleFontSize, alignment, boxContent, boxContentColor, boxContentFontSize, padding, boxStyle, enableOverlay, overlayType } = attributes; 
        return (
            <div>
                <InspectorControls>        
                    <PanelBody 
                        title={__("Section Settings")}
                        initialOpen= { true }
                    >
                        <BoxControl
                            values={ padding }
                            label={ __( "Section Padding" ) }
                            onChange={ 
                                ( newValue ) => setAttributes({
                                    ...padding,
                                    padding: {
                                        top: newValue.top,
                                        left: newValue.left,
                                        right: newValue.right,
                                        bottom: newValue.bottom,
                                    } 
                                })
                            }
                        />
                        <SelectControl
                            label={ __("Content Alignment") }
                            options={ align }
                            onChange={ ( alignment ) => { setAttributes( { alignment } ) } }
                            value={ alignment }
                        />
                        <MediaUpload
                            onSelect={ (newImage) => setAttributes({ backgroundImage: newImage.sizes.full.url }) }
                            type="image"
                            value={ backgroundImage }
                            render={ ( { open } ) => (
                                <Button
                                    className="editor-media-placeholder__button is-button is-default is-large"
                                    icon="upload"
                                    onClick={ open }>
                                    Add Background Image
                                </Button>
                            )}
                        />
                        <ToggleControl
                            label="Enable Overlay"
                            checked={ enableOverlay }
                            onChange={ () => setAttributes ({ enableOverlay: ! enableOverlay }) }
                        />
                        {
                            enableOverlay ?
                            <SelectControl
                                label="Overlay Type"
                                options={ overlay }
                                onChange={ ( overlayType ) => { setAttributes( { overlayType } ) } }
                                value={ overlayType }
                            />
                            :
                            setAttributes({ overlayType: null })
                        }
                    </PanelBody>
                    <PanelBody
                        title={__("Heading Options")}
                        initialOpen= { false }
                    >
                        <SelectControl
                            label={ __("Tag") }
                            options={ headingTags }
                            onChange={ ( titleTag ) => { setAttributes( { titleTag } ) } }
                            value={ titleTag }
                        />
                        <RangeControl
                            label="Font Size"
                            value={ titleFontSize }
                            onChange={ ( titleFontSize ) => setAttributes( { titleFontSize } ) }
                            min={ 1 }
                            max={ 200 }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Box Content Options")}
                        initialOpen= { false }
                    >
                        <RangeControl
                            label="Font Size"
                            value={ boxContentFontSize }
                            onChange={ ( boxContentFontSize ) => setAttributes( { boxContentFontSize } ) }
                            min={ 1 }
                            max={ 200 }
                        />
                        <SelectControl
                            label="Style"
                            options={ styles }
                            onChange={ ( boxStyle ) => { setAttributes( { boxStyle } ) } }
                            value={ boxStyle }
                        />
                    </PanelBody>
                    <PanelColorSettings 
                            title="Color Settings"
                            initialOpen={ false }
                            colorSettings={[
                                {
                                    value: titleColor,
                                    onChange: ( titleColor ) => setAttributes( { titleColor } ),
                                    label: __( 'Heading Color' ),
                                },
                                {
                                    value: boxContentColor,
                                    onChange: ( boxContentColor ) => setAttributes( { boxContentColor } ),
                                    label: __( 'Box Content Color' ),
                                }
                            ]}
                    />
                </InspectorControls>
                <section className={ `${className}  ${overlayType} hero-block` } style={{
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
                            <RichText
                                tagName={ titleTag }
                                value={ title }
                                onChange={ ( title ) => setAttributes( { title } ) }
                                style={{ fontSize: titleFontSize, color: titleColor }}
                            />
                            <RichText
                                tagName="span"
                                value={ boxContent }
                                className= { boxStyle }
                                onChange={ ( boxContent ) => setAttributes( { boxContent } ) }
                                style={{ fontSize: boxContentFontSize, color: boxContentColor }}
                            />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default HeroBlock;