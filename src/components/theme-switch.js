import * as React from 'react'
import { useCallback } from 'react'
import PropTypes from 'prop-types'
import './theme-switch.less'
import { ReactComponent as SunIcon } from '../images/icons/sun.svg'
import { ReactComponent as MoonIcon } from '../images/icons/moon.svg'

const ThemeSwitch = props => {
  const { enabled, onChange } = props
  const handleChange = useCallback(
    e => {
      onChange && onChange(e.target.checked)
    },
    [onChange]
  )
  return (
    <div className="theme-switch">
      <label>
        <SunIcon className="svg-icon light" />
      </label>
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={enabled}
          onChange={handleChange}
        />
        <label>
          <MoonIcon className="svg-icon dark" />
        </label>
      </div>
    </div>
  )
}

ThemeSwitch.propTypes = {
  enabled: PropTypes.bool,
  onChange: PropTypes.func
}

export default ThemeSwitch
