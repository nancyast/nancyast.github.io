import { useCallback, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout } from 'components';
import { message, Modal } from 'antd';
import { authenticate } from 'api';

const keyMappings = ['dashboard', 'user-list', 'data-register'];

const LayoutContainer = (props) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const path = useMemo(() => {
    const pathToCheck = location?.pathname?.slice(1);
    const isValidPath = keyMappings.includes(pathToCheck);
    if (isValidPath) {
      return pathToCheck;
    }
    return keyMappings[0];
  }, [location]);

  const selectedKeys = useMemo(() => {
    return [path];
  }, [path]);

  const { isAdmin, email } = useSelector((state) => {
    return {
      isAdmin: state?.authenticate.isAdmin,
      email: state?.authenticate.email
    };
  });

  const onRequestLogout = useCallback(() => {
    setVisible(true);
  }, []);

  const onConfirmLogout = async () => {
    try {
      await authenticate.logout();
      navigate('/login');
      setVisible(false);
    } catch (error) {
      message.error(error?.message);
    }
  };

  const onCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  const handleMenuItemChage = useCallback(
    (key) => {
      navigate(`/${key}`);
    },
    [navigate]
  );

  return (
    <>
      <Layout
        {...props}
        userName="Nhung Nguyen"
        onRequestLogout={onRequestLogout}
        selectedKeys={selectedKeys}
        onMenuItemChage={handleMenuItemChage}
      />
      <Modal
        centered
        visible={visible}
        onOk={onConfirmLogout}
        onCancel={onCloseModal}
        width={300}
      >
        <p>Do you really want to leave?</p>
      </Modal>
    </>
  );
};

export default LayoutContainer;
