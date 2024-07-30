import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';
import { keyframes } from '@emotion/react';

// Keyframe animations
const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Contact = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    // Send email logic goes here
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: `${fadeIn} 2s ease-in-out`,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 3, color: '#4CAF50' }}>
          Contact Me
        </Typography>
        <Box
          component="div"
          sx={{
            width: '100%',
            animation: `${floatAnimation} 3s ease-in-out infinite`,
          }}
        >
          <Form
            name="contact"
            onFinish={onFinish}
            layout="vertical"
            initialValues={{ remember: true }}
            style={{ width: '100%' }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
              style={{ marginBottom: 16 }}
            >
              <Input
                prefix={<UserOutlined style={{ color: '#4CAF50' }} />}
                placeholder="Your Name"
                style={{ borderColor: '#4CAF50' }}
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
              style={{ marginBottom: 16 }}
            >
              <Input
                prefix={<MailOutlined style={{ color: '#4CAF50' }} />}
                placeholder="Your Email"
                style={{ borderColor: '#4CAF50' }}
              />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}
              style={{ marginBottom: 16 }}
            >
              <Input.TextArea
                prefix={<MessageOutlined style={{ color: '#4CAF50' }} />}
                rows={4}
                placeholder="Your Message"
                style={{ borderColor: '#4CAF50' }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#4CAF50',
                  borderColor: '#4CAF50',
                }}
              >
                Send
              </Button>
            </Form.Item>
          </Form>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
