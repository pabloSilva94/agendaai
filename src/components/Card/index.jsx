import { Avatar, Button, Card, Flex, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import "../../pages/home/home.css";
import { FieldTimeOutlined } from "@ant-design/icons";

function CardUser() {
  return (
    <Card className="cardProvider" bordered={false}>
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/8.x/thumbs/svg?seed=Charlie" />
        }
        title="Pedro"
        description={
          <div>
            <p>Tem 5 agendamentos</p>
            <p>
              <strong>Horários disponíveis para este dia:</strong>
            </p>
            <Flex gap="4px 0" wrap="wrap">
              <Tag bordered={true} color="green">
                <Button type="text"  icon={<FieldTimeOutlined />} style={{color:"#87d068"}} >
                  08:00
                </Button>
              </Tag>
              <Tag bordered={false} color="green">
                <Button type="text" icon={<FieldTimeOutlined />} style={{color:"#87d068"}}>
                  09:00
                </Button>
              </Tag>
              <Tag bordered={false} color="green">
                <Button type="text" icon={<FieldTimeOutlined />} style={{color:"#87d068"}}>
                  10:00
                </Button>
              </Tag>
              <Tag bordered={false} color="green">
                <Button type="text" icon={<FieldTimeOutlined />} style={{color:"#87d068"}}>
                  11:00
                </Button>
              </Tag>
              <Tag bordered={false} color="green">
                <Button type="text" icon={<FieldTimeOutlined />} style={{color:"#87d068"}}>
                  12:00
                </Button>
              </Tag>
              <Tag bordered={false} color="green">
                <Button type="text" icon={<FieldTimeOutlined />} style={{color:"#87d068"}}>
                  13:00
                </Button>
              </Tag>
            </Flex>
          </div>
        }
      />
    </Card>
  );
}

export default CardUser;
