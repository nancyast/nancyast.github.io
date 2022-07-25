import { Button } from 'components';
import { useState, useCallback } from 'react';

const ExpandButton = ({ onClick = () => ({}) }) => {
  const [expanded, setExpand] = useState(false);

  const open = useCallback(() => {
    setExpand(true);
    onClick();
  }, [onClick]);

  const close = useCallback(() => {
    setExpand(false);
    onClick();
  }, [onClick]);

  return expanded ? (
    <Button small={true} fitContent={true} onClick={close} type="secondary">
      近い
    </Button>
  ) : (
    <Button small={true} fitContent={true} onClick={open} type="primary">
      開いた
    </Button>
  );
};

export default ExpandButton;
