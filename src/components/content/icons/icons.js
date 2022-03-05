import React from 'react';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBeer,
  faUserCircle,
  faComment,
  faInfo,
  faUsers,
  faHome,
  faCamera,
  faEnvelope,
  faUtensils,
  faTshirt,
  faLock,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = (props) => {
  const icons = {
    "faBeer": faBeer,
    "faUsers": faUsers,
    "faUserCircle": faUserCircle,
    "faComment": faComment,
    "faInfo": faInfo,
    "faCamera": faCamera,
    "faHome": faHome,
    "faEnvelope": faEnvelope,
    "faFacebook": faFacebook,
    "faGithub": faGithub,
    "faUtensils": faUtensils,
    "faTshirt": faTshirt,
    "faLock": faLock,
    "faInstagram": faInstagram,
    "faTwitter": faTwitter,
    "faCalendar": faCalendar
  }
  return (
    <FontAwesomeIcon icon={icons[props.iconName]} style={props.style} fixedWidth />
  )
}
