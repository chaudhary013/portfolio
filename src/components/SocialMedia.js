import React from 'react';
import { Space, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const SocialMedia = () => (
  <Space size="large" style={{ padding: '50px 0' }}>
    <Button shape="circle" icon={<GithubOutlined />} href="https://github.com/your_username" target="_blank" />
    <Button shape="circle" icon={<LinkedinOutlined />} href="https://linkedin.com/in/your_username" target="_blank" />
    {/* Add more social media icons as needed */}
  </Space>
);

export default SocialMedia;
