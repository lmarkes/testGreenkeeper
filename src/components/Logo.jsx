import React from 'react';
import Dropzone from 'react-dropzone';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import {grey100, grey400, grey600, red700, white} from 'material-ui/styles/colors';

import Title from './Title.jsx';
import Client from '../clients/InstitutionPreferencesClient.js';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: '',
            hasChanges: false,
            saveButtonText: 'SAVE CHANGES',
            snackbarOpen: false,
            snackbarMessage: ''
        };

        // this.onDrop = this.onDrop.bind(this);
        // this.saveChanges = this.saveChanges.bind(this);
    }

    // componentDidMount() {
    //     Client.getLogo(
    //         response => {
    //             const logo = response.data;
    //             this.setState({logo: logo.logoUrl});
    //         },
    //         error => {
    //             this.setState({ error: 'Error loading logo' });
    //         }
    //     );
    // }

    // onDrop(files) {
    //     console.log('onDrop');
    //     let data = new FormData();
    //     data.append('logo', files[0]);
    //
    //     Client.uploadLogo(data,
    //         response => {
    //             const logo = response.data;
    //             this.setState({
    //                 hasChanges: true,
    //                 logo: logo.logoUrl,
    //                 error: undefined,
    //                 snackbarOpen: true,
    //                 snackbarMessage: 'Logo Uploaded!'
    //             });
    //         },
    //         error => {
    //             let message = error.response.data ? error.response.data.error : 'Upload failed.';
    //             this.setState({
    //                 error: message,
    //                 snackbarOpen: true,
    //                 snackbarMessage: message
    //             });
    //             console.error(error.response.data);
    //         }
    //     );
    // }

    // saveChanges() {
    //     let data = {'logoUrl': this.state.logo};
    //     let logoPath = 'api/v1/sys/preferences/config/logo';
    //     // TODO: this needs to be updated to axios - api probably doesn't exist for it either
    //     utils.ajaxCall({
    //         url: logoPath,
    //         dataType: 'json',
    //         contentType: 'application/json',
    //         cache: false,
    //         method: 'PUT',
    //         data: JSON.stringify(data),
    //         success: function() {
    //             let spanStyle = {
    //                 color: '#6DA487'
    //             };
    //             this.setState({
    //                 hasChanges: false,
    //                 saveButtonText: <span style={spanStyle}><span className="glyphicon glyphicon-ok"></span>SAVED</span>,
    //                 error: undefined,
    //                 snackbarOpen: true,
    //                 snackbarMessage: 'Save Successful!'
    //             });
    //         }.bind(this),
    //         error: function(xhr, status, err) {
    //             let message = xhr.responseText ? xhr.responseText : 'Save failed.';
    //             console.error(status, err.toString());
    //             this.setState({
    //                 error: message,
    //                 snackbarOpen: true,
    //                 snackbarMessage: message
    //             });
    //         }.bind(this)
    //     });
    // }

    render() {
        const styles = {
            title: {
                height: '60px',
                lineHeight: '60px',
                fontSize: '26px',
                paddingLeft: '70px ',
                color: grey600
            },
            instructions: {
                width: '65%',
                margin: '30px auto',
                fontSize: '16px',
                textAlign: 'center'
            },
            preview: {
                margin: '0 0 3px 0',
                fontSize: '16px',
                fontWeight: '500'
            },
            dropzone: {
                width: '50%',
                margin: '40px auto 20px auto',
                padding: '35px 0',
                textAlign: 'center',
                cursor: 'pointer',
                borderWidth: '2px',
                borderColor: grey400,
                borderStyle: 'dashed',
                borderRadius: '5px'
            },
            snackbarSuccess: {
                backgroundColor: '#6DA487',
                textAlign: 'center'
            },
            snackbarError: {
                backgroundColor: red700,
                textAlign: 'center'
            }
        };

        let logoUrl = this.state.logo;

        let saveDisabled;
        let saveButtonText = this.state.saveButtonText;
        // if (!this.state.hasChanges) {
        //     saveDisabled = true;
        // } else {
        //     saveButtonText = 'SAVE CHANGES';
        // }

        let snackbarStyle;
        // if (this.state.error) {
        //     snackbarStyle = styles.snackbarError;
        // } else {
        //     snackbarStyle = styles.snackbarSuccess;
        // }
        return (
            <div className="main-panel">
                <div className="panel-header">
                    <h1>Logo Upload</h1>
                </div>

                <div style={{color: grey600, padding: '20px'}}>
                    <h4 style={styles.preview}>Preview</h4>

                    <AppBar
                        title={<Title logoUrl={logoUrl}/>}
                        titleStyle={styles.title}
                        showMenuIconButton={false}
                        style={{backgroundColor: grey100}}
                    />
                    <div style={styles.instructions}>
                        If you would like to brand Kuali Financials for your institution, we recommend that you upload
                        an image that contains your institution's insignia (left) and name (right). We require that the
                        image you upload be at least 70 pixels tall, be no larger than 100kb, and have a transparent background.
                    </div>

                    <Dropzone onDrop={this.onDrop} multiple={false} style={styles.dropzone}>
                        <div>Drag &amp; drop logo here or click to select a logo to upload.</div>
                    </Dropzone>

                    <div style={{textAlign: 'center', color: red700}}>{this.state.error}</div>
                    <div style={{textAlign: 'center', paddingTop: '20px'}}>
                        <RaisedButton
                            label={saveButtonText}
                            backgroundColor='#6DA487'
                            labelColor={white}
                            disabled={saveDisabled}
                            onClick={this.saveChanges}
                        />
                    </div>
                </div>
                <Snackbar
                    open={this.state.snackbarOpen}
                    message={this.state.snackbarMessage}
                    contentStyle={snackbarStyle}
                    bodyStyle={snackbarStyle}
                    autoHideDuration={3000}
                />
            </div>
        );
    }
}
