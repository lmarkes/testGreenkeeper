import React from 'react';

import {grey600} from 'material-ui/styles/colors';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles= {
            afterLogo: {
                borderLeft: '1px solid ' + grey600,
                marginLeft: '15px',
                paddingLeft: '15px',
                height: '35px',
                lineHeight: '35px',
                display: 'inline-block'
            }
        };

        return (
            <div>
                <img height="35px" style={{verticalAlign: 'middle'}} src={this.props.logoUrl}/>
                <span style={styles.afterLogo}>Financials Configuration</span>
            </div>
        )
    }
}

