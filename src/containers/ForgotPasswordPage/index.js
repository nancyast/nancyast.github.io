import { ForgotPasswordForm, ChangePasswordForm } from 'components';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { message } from 'antd';
import { authenticate } from 'api';

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const code = searchParams.get('code');

  const onSendLinkToEmail = async (values) => {
    try {
      setLoading(true);
      await authenticate.forgotPassword({ email: values.email });
      setLoading(false);
      message.success('Email has been sent!');
    } catch (error) {
      message.error(error.message);
      setLoading(false);
    }
  };

  const onResetPassword = async (values) => {
    try {
      setLoading(true);
      await authenticate.resetPassword({
        code,
        email,
        password: values.password
      });
      setLoading(false);
      await message.success('Reset password successfully');
      navigate('/login');
    } catch (error) {
      setLoading(false);
      message.error(error?.message);
    }
  };

  if (typeof email === 'string' && typeof code === 'string' && email && code) {
    return <ChangePasswordForm onSubmit={onResetPassword} loading={loading} />;
  }

  return <ForgotPasswordForm onSubmit={onSendLinkToEmail} loading={loading} />;
};

export default ForgotPasswordPage;
