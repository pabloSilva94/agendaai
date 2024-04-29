import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, PlusOutlined, SettingOutlined, ToolOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';
const { Meta } = Card;
export const CardDashProviders = ({showModal}) => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <Card
    hoverable
    bordered={false}
    style={{
      width: 350,
      height:150,
      marginTop: 16,
    }}
    actions={[
      <UserAddOutlined key="addUser" onClick={showModal} />,
      <EditOutlined key="edit" />,
    ]}
  >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
        title="Prestadores"
        description="Gerenciar prestadores"
      />
  </Card>
  );
};
export const CardDashServices = ({showModal}) => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <Card
    hoverable
    bordered={false}
    style={{
      width: 350,
      height:150,
      marginTop: 16,
    }}
    actions={[
      <PlusOutlined onClick={showModal} key="addService"/>,
      <EditOutlined key="edit" />,
    ]}
  >
      <Meta
        avatar={<Avatar icon={<ToolOutlined />}/>}
        title="Serviços"
        description="Gerenciar Serviços"
      />
  </Card>
  );
};
export const CardDashUsers = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <Card
    hoverable
    bordered={false}
    style={{
      width: 350,
      height:150,
      marginTop: 16,
    }}
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
    ]}
  >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
        title="Usuarios"
        description="Gerenciar usuarios"
      />
  </Card>
  );
};