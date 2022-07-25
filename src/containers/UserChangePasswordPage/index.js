import { ChangePasswordForm } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import localStorage from 'utils/localStorage';
import { message } from 'antd';
import { authenticate } from 'api';

const UserChangePasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const email = useSelector((state) => {
    return state?.authenticate?.email;
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const { accessToken } = localStorage.loadTokens();
      await authenticate.changePassword({
        email,
        accessToken,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword
      });
      setLoading(false);
      await message.success('Change password successfully');
      await authenticate.logout();
      navigate('/login');
    } catch (error) {
      setLoading(false);
      message.error(error?.message);
    }
  };

  useEffect(() => {
    const { idToken, accessToken } = localStorage.loadTokens();
    if (!idToken && !accessToken) {
      navigate('/login');
    }
  }, [navigate]);

  return <ChangePasswordForm onSubmit={handleSubmit} loading={loading} />;
};

export default UserChangePasswordPage;
