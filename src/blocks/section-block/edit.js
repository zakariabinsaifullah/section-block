import { InnerBlocks, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Button, ButtonGroup, ColorPalette, PanelBody, SelectControl, TextControl, ToggleControl, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const colors = [
    { 
        name: 'Green', 
        color: '#0e9b75'
    },
    { 
        name: 'Red', 
        color: '#ff0000'
    },
    { 
        name: 'Black', 
        color: '#000000'
    },
    { 
        name: 'White', 
        color: '#ffffff'
    },
    { 
        name: 'Light Yellow', 
        color: '#E9F7CA'
    }
];
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
];

const positions = [
    {
        label: 'Top Center',
        value: 'top center'
    }, 
    {
        label: 'Center Center',
        value: 'center center'
    },
    {
        label: 'Bottom Center',
        value: 'bottom center'
    }
]

class SectionBlock extends Component {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { sectionId, padding, pressed, notPressed, bgColor, bgImage, enableOverlay, overlayType, bgPositions } = attributes; 
        return (
            <div>
                <InspectorControls>        
                    <PanelBody 
                        title={__("Section Block Settings")}
                        initialOpen= { true }
                    >
                        <TextControl
                            label="Section ID"
                            onChange={ ( sectionId ) => setAttributes( { sectionId } ) }
                            value={ sectionId }
                        />
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
                        <ButtonGroup 
                            style={{ paddingBottom: 20, marginTop: 10 }}
                        >
                            <Button 
                                isSmall = { true }
                                isPressed={ pressed }
                                onClick={ () => setAttributes({ 
                                    pressed: !pressed, 
                                    notPressed: !notPressed, 
                                    bgImage: null
                                }) }
                            >
                                Color Background
                            </Button>
                            <Button 
                                isSmall = { true }
                                isPressed={ notPressed }
                                onClick={ () => setAttributes({ 
                                    pressed: !pressed, 
                                    notPressed: !notPressed,
                                    bgColor: null
                                }) }
                            >
                                Image Background
                            </Button>
                        </ButtonGroup>
                        {
                            pressed &&
                            <ColorPalette
                                colors={ colors }
                                onChange={ ( bgColor ) => setAttributes( { bgColor } ) }
                                value={ bgColor }
                            />
                        }
                        {
                           notPressed &&
                           <>
                                <MediaUpload
                                    onSelect={ (newImage) => setAttributes({ bgImage: newImage.sizes.full.url }) }
                                    type="image"
                                    value={ bgImage }
                                    render={ ( { open } ) => (
                                        <Button
                                            className="editor-media-placeholder__button is-button is-default is-large"
                                            icon="upload"
                                            onClick={ open }>
                                            Add Background Image
                                        </Button>
                                    )}
                                />
                                <SelectControl
                                    label="Background Position"
                                    options={ positions }
                                    onChange={ ( bgPositions ) => { setAttributes( { bgPositions } ) } }
                                    value={ bgPositions }
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
                            </>
                        }
                    </PanelBody>
                </InspectorControls>
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
                        <InnerBlocks
                            allowedBlocks={ true }
                        />
                    </div>
                </section>
            </div>
        )
    }
}
export default SectionBlock;