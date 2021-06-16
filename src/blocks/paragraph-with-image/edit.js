import { BlockControls, InnerBlocks, InspectorControls, MediaPlaceholder, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { ColorPalette, IconButton, PanelBody, RangeControl, SelectControl, TextControl, ToggleControl, Toolbar } from '@wordpress/components';
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
    },
    { 
        name: 'Orange', 
        color: '#f0a83c'
    },
];
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

class ServiceSection extends Component {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { serviceTitle, desc, url, id, alt, boxShadow, boxRightWidth, boxBottomWidth, borderColor, imagePosition, btnLabel, btnLink, titleTag, showBtn, sectionId, sectionBg } = attributes; 
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
                        <ColorPalette
                            colors={ colors }
                            onChange={ ( sectionBg ) => setAttributes( { sectionBg } ) }
                            value={ sectionBg }
                        />
                    </PanelBody>
                    <PanelBody
                        title= { __( "Title Tag" ) }
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
                            <TextControl
                                label={ __( "Link" ) }
                                onChange={ ( btnLink ) => setAttributes( { btnLink } ) }
                                value={ btnLink }
                            />
                        }
                    </PanelBody>

                    <PanelBody
                        title={__("Image Settings")}
                        initialOpen= { false }
                    >
                        <ToggleControl
                            label={ __( "Enable Border Box" ) }
                            checked={ boxShadow }
                            onChange={ () => setAttributes({ boxShadow: ! boxShadow }) }
                        />
                        {
                            boxShadow &&
                            <>
                                <RangeControl
                                    label={ __( 'Box Right Width' ) }
                                    value={ boxRightWidth }
                                    onChange={ ( boxRightWidth ) => setAttributes( { boxRightWidth } ) }
                                    min={ 0 }
                                    max={ 50 }
                                />
                                <RangeControl
                                    label={ __( 'Box Bottom Width' ) }
                                    value={ boxBottomWidth }
                                    onChange={ ( boxBottomWidth ) => setAttributes( { boxBottomWidth } ) }
                                    min={ 0 }
                                    max={ 50 }
                                />
                                <ColorPalette
                                    colors={ colors }
                                    onChange={ ( borderColor ) => setAttributes( { borderColor } ) }
                                    value={ borderColor }
                                />
                            </>
                        }

                    </PanelBody>
                    <PanelBody
                        title={__("Image Position")}
                        initialOpen= { false }
                    >
                        <ToggleControl
                            label={ __( "Show Image at Left Side" ) }
                            checked={ imagePosition }
                            onChange={ () => setAttributes({ imagePosition: ! imagePosition }) }
                        />
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    {
                    url &&
                        <Toolbar>
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={ media => setAttributes({ 
                                        url:media.url, 
                                        id: media.id,
                                        alt: media.alt
                                    })}
                                    allowedTypes={["image"]}
                                    value={id}
                                    render={({ open }) => {
                                        return (
                                            <IconButton
                                                className="components-icon-button components-toolbar__control"
                                                label={__(
                                                    "Edit Image"
                                                )}
                                                onClick={open}
                                                icon="edit"
                                            />
                                        );
                                    }}
                                />
                            </MediaUploadCheck>
                            <IconButton
                                className="components-icon-button components-toolbar__control"
                                label={__(
                                    "Delete Image"
                                )}
                                onClick={ () => setAttributes({ url:'', id: null, alt: '' }) }
                                icon="trash"
                            />
                        </Toolbar>
                    }
                </BlockControls>
                <div className="paragraph-img" id={ sectionId } style={{ backgroundColor: sectionBg }}>
                    <div className="container">
                        <div className="row align-items-center box-cont">
                                {
                                    imagePosition ? 
                                    <div className="col-md-5">
                                        <div className="box-image">
                                            {
                                                url ? (
                                                    <>
                                                        {
                                                            boxShadow ? (
                                                                <>
                                                                    <img src={url} alt={alt} style={{ boxShadow: `${boxRightWidth}px ${boxBottomWidth}px 0`, color: borderColor }} className="img-fluid" />
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <img src={url} alt={alt} className="img-fluid" />
                                                                </>
                                                            )
                                                        }
                                                    </>
                                                ) : (
                                                    <MediaPlaceholder
                                                        icon="format-image"
                                                        onSelect={ media => setAttributes({ 
                                                            url:media.url, 
                                                            id: media.id,
                                                            alt: media.alt
                                                        })}
                                                        onFilesPreUpload={ media => setAttributes({ 
                                                            url:media.url, 
                                                            id: media.id,
                                                            alt: media.alt
                                                        })}
                                                        onSelectURL={ url => setAttributes({ url })}
                                                        allowedTypes={["image"]}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                    :
                                    <div class="col-md-7">
                                        <div className="box-detail detail-left">
                                            <RichText
                                                tagName={ titleTag }
                                                className={ className }
                                                value={ serviceTitle }
                                                onChange={ ( serviceTitle ) => setAttributes( { serviceTitle } ) }
                                            />
                                            <RichText
                                                tagName="p"
                                                className={ className }
                                                value={ desc }
                                            onChange={ ( desc ) => setAttributes( { desc } ) }
                                            />
                                            <InnerBlocks
                                                allowedBlocks={ ['core/list'] }
                                                template={[
                                                    [
                                                        'core/list', { placeholder: 'Enter a List' }
                                                    ]
                                                ]}
                                            />
                                            {
                                                showBtn && 
                                                <div className="btn">
                                                    <a 
                                                        href={ btnLink } 
                                                        rel="nofollow noopener"
                                                    >
                                                        <RichText
                                                            value={ btnLabel }
                                                            onChange={ ( btnLabel ) => setAttributes( { btnLabel } ) }
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
                                            <RichText
                                                tagName={ titleTag }
                                                className={ className }
                                                value={ serviceTitle }
                                                onChange={ ( serviceTitle ) => setAttributes( { serviceTitle } ) }
                                            />
                                            <RichText
                                                tagName="p"
                                                className={ className }
                                                value={ desc }
                                            onChange={ ( desc ) => setAttributes( { desc } ) }
                                            />
                                            <InnerBlocks
                                                allowedBlocks={ ['core/list'] }
                                                template={[
                                                    [
                                                        'core/list', { placeholder: 'Enter a List' }
                                                    ]
                                                ]}
                                            />
                                            {
                                                showBtn &&
                                                <div className="btn">
                                                    <a 
                                                        href={ btnLink } 
                                                        rel="nofollow noopener"
                                                    >
                                                        <RichText
                                                            value={ btnLabel }
                                                            onChange={ ( btnLabel ) => setAttributes( { btnLabel } ) }
                                                        />
                                                    </a>                                             
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    :
                                    <div class="col-md-5">
                                        <div className="box-image">
                                            {
                                                url ? (
                                                    <>
                                                        {
                                                            boxShadow ? (
                                                                <>
                                                                    <img src={url} alt={alt} style={{ boxShadow: `${boxRightWidth}px ${boxBottomWidth}px 0`, color: borderColor }} className="img-fluid" />
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <img src={url} alt={alt} className="img-fluid" />
                                                                </>
                                                            )
                                                        }
                                                    </>
                                                ) : (
                                                    <MediaPlaceholder
                                                        icon="format-image"
                                                        onSelect={ media => setAttributes({ 
                                                            url:media.url, 
                                                            id: media.id,
                                                            alt: media.alt
                                                        })}
                                                        onFilesPreUpload={ media => setAttributes({ 
                                                            url:media.url, 
                                                            id: media.id,
                                                            alt: media.alt
                                                        })}
                                                        onSelectURL={ url => setAttributes({ url })}
                                                        allowedTypes={["image"]}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default ServiceSection;