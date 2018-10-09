import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './supporting-device-menu.scss'

export default class SupportingDeviceMenu extends Component {
  static propTypes = {
    onClickMenu: PropTypes.func.isRequired,
    activeDeviceType: PropTypes.string.isRequired
  }

  static defaultProps = {
    activeDeviceType: 'desktop'
  }

  render() {
    const { activeDeviceType, onClickMenu } = this.props
    return (
      <div className="supporting-devices">
        <div className="ui secondary pagination pointing menu">
          <a
            className={`item ${activeDeviceType === 'desktop' ? 'active' : ''}`}
            onClick={() => onClickMenu('desktop')}
          >
            <i className="desktop icon" /> for Desktop
          </a>
          <a
            className={`item ${activeDeviceType === 'mobile' ? 'active' : ''}`}
            onClick={() => onClickMenu('mobile')}
          >
            <i className="mobile alternate icon" /> for Mobile
          </a>
        </div>
      </div>
    )
  }
}
