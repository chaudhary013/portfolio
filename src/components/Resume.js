import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Resume = () => (
  <div style={{ padding: '50px 0', textAlign: 'center' }}>
    <Button type="primary" icon={<DownloadOutlined />} size="large">
      <a  href="resume(5).pdf" download >Download CV</a>
    </Button>
  </div>
);

export default Resume;
