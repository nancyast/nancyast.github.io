import React from 'react';
import { ReactComponent as Add } from './add.svg';
import { ReactComponent as Heart } from './heart.svg';
import { ReactComponent as HeartFilled } from './heart-filled.svg';
import { ReactComponent as TrashBin } from './trash-bin.svg';
import { ReactComponent as Pen } from './pen.svg';
import { ReactComponent as Play } from './play.svg';
import { ReactComponent as Close } from './close.svg';
import { ReactComponent as Check } from './check.svg';
import { ReactComponent as Back } from './back.svg';
import { ReactComponent as Dropdown } from './dropdown.svg';

const icons = {
  add: <Add />,
  heart: <Heart />,
  heartFilled: <HeartFilled />,
  trashBin: <TrashBin />,
  pen: <Pen />,
  play: <Play />,
  close: <Close />,
  check: <Check />,
  back: <Back />,
  dropdown: <Dropdown />,
  empty: ''
};

const Icon = ({ name = 'empty' }) => {
  return icons[name];
};

export default Icon;
