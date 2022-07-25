import { ChangePasswordForm } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import localStorage, { SESSION } from 'utils/localStorage';
import { message } from 'antd';
import { authenticate } from 'api';

const ChangePasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const email = useSelector((state) => {
    return state?.authenticate?.email;
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const session = localStorage.load(SESSION);
      await authenticate.changePassword({
        session,
        email,
        password: values.password
      });
      setLoading(false);
      await message.success('Change password successfully');
      localStorage.clear(SESSION);
      navigate('/login');
    } catch (error) {
      setLoading(false);
      message.error(error?.message);
    }
  };

  useEffect(() => {
    const { session } = localStorage.loadTokens();
    if (!session) {
      navigate('/login');
    }
  }, [navigate]);

  return <ChangePasswordForm onSubmit={handleSubmit} loading={loading} />;
};

export default ChangePasswordPage;
