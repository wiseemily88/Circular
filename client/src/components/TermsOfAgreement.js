import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalWrapper from '../components/ModalWrapper';
// import GoogleButton from 'react-google-button';
// import { addSignatureToCampaign } from '../redux/actions/signature';

class TermsOfAgreement extends Component {
  render(){
    return (
      <div>By signing, you accept our Terms of Agreement and Privacy Policy</div >

      )
  }
}

TermsOfAgreement.defaultProps = {
  ModalOpen: PropTypes.bool
};

export default (TermsOfAgreement);
