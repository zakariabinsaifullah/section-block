import { InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const types = [
    {
        label: 'Iconic Button',
        value: 'iconic_btn'
    },
    {
        label: 'Only Text Button',
        value: 'text_btn'
    }
];

const styles = [
    {
        label: 'Outline',
        value: 'btn_outline'
    },
    {
        label: 'Fill',
        value: 'btn_fill'
    }
];

const aligns = [
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
    }
];

class AdvancedButton extends Component {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { label, link, alignment, type, style, newWindow, window, color, background } = attributes;
        if(newWindow){
            setAttributes({ window: 'blank' })
        }else{
            setAttributes({ window: 'self' })
        }
        return (
            <div>
                <InspectorControls>        
                    <PanelBody 
                        title={__("Button Options")}
                        initialOpen= { true }
                    >
                        <TextControl
                            label="Button Link"
                            onChange={ ( link ) => setAttributes( { link } ) }
                            value={ link }
                        />
                        <ToggleControl
                            label="Open at New Window"
                            checked={ newWindow }
                            onChange={ () => setAttributes({ newWindow: ! newWindow }) }
                        />
                        <SelectControl
                            label="Button Type"
                            options={ types }
                            onChange={ ( type ) => { setAttributes( { type } ) } }
                            value={ type }
                        />
                        <SelectControl
                            label="Button Style"
                            options={ styles }
                            onChange={ ( style ) => { setAttributes( { style } ) } }
                            value={ style }
                        />
                        <SelectControl
                            label="Button Alignment"
                            options={ aligns }
                            onChange={ ( alignment ) => { setAttributes( { alignment } ) } }
                            value={ alignment }
                        />
                    </PanelBody>
                     <PanelColorSettings 
                            title="Button Colors"
                            initialOpen={ false }
                            colorSettings={[
                                {
                                    value: color,
                                    onChange: ( colorValue ) => setAttributes( { color: colorValue } ),
                                    label: __( 'Color' ),
                                },
                                {
                                    value: background,
                                    onChange: ( colorValue ) => setAttributes( { background: colorValue } ),
                                    label: __( 'Background Color' ),
                                }
                            ]}
                    />
                </InspectorControls>
                <div className={ `${className} advanced_btn` } style={{ textAlign: alignment }}>
                    <a href={ link } rel="nofollow noopener" target={`_${window}`} className={ `${type} ${style}` } style={{ color: color, backgroundColor: background, borderColor: color }}>
                        <RichText
                            tagName="span"
                            value={ label }
                            onChange={ ( label ) => setAttributes( { label } ) }
                        />
                        {
                            type == 'iconic_btn' &&
                            <span class="dashicons dashicons-arrow-right-alt"></span>
                        }
                    </a>
                </div>
            </div>
        )
    }
}
export default AdvancedButton;