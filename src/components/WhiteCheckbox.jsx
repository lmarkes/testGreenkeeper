import React from 'react';

import Checkbox from 'material-ui/Checkbox';
import ToggleCheckbox from 'material-ui/svg-icons/toggle/check-box';
import ToggleCheckboxBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';

import {white, blue600} from 'material-ui/styles/colors';

export default class WhiteCheckbox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const checkboxStyle = {
            style: {
                width: 'inherit'
            },
            labelStyle: {
                color: white,
                fontWeight: '300',
                fontSize: '14px',
                marginRight: '5px',
                lineHeight: this.props.size
            },
            inputStyle: {
                marginRight: '2px'
            },
            iconStyle: {
                marginRight: '2px',
                height: this.props.size,
                width: this.props.size
            }
        };
        return (
            <Checkbox
                checked={this.props.checked}
                label={this.props.label}
                style={checkboxStyle.style}
                labelStyle={checkboxStyle.labelStyle}
                inputStyle={checkboxStyle.inputStyle}
                iconStyle={checkboxStyle.iconStyle}
                checkedIcon={<ToggleCheckbox style={{color: blue600, fill: blue600}}/>}
                uncheckedIcon={<ToggleCheckboxBlank style={{color: white, fill: white}}/>}
            />
        )
    }
}