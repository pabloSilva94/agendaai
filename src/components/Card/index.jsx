import { Avatar, Button, Card } from "antd"
import { FieldTimeOutlined } from '@ant-design/icons';
import Meta from "antd/es/card/Meta"

function CardUser() {
  return (
    <Card
    style={{
      width: 280,
      height:100,
    }}
    actions={[
     <FieldTimeOutlined key={"horario"} type="primary"/>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
      title="Prestador"
      description="Tem 5 agendamentos"
      
    />
  </Card>
  )
}

export default CardUser