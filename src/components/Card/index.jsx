
import { Avatar, Button, Card, Flex, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import "../../pages/home/home.css";
import { FieldTimeOutlined } from "@ant-design/icons";
import { useState } from "react";
import {ModalAgendamento} from "../Modal/ModalAgendamento";

function CardUser({ horariosBloqueados, onHorarioSelect }) {
  const [open, setOpen] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const showModal = () => {
    setOpen(true);
    setIsBlock(true);
  };
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
              {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map(horario => (
                <Tag bordered={true} color={horario ? "default" : "green"} key={horario}>
                  <Button
                    type="text"
                    onClick={() => {
                      showModal();
                    }}
                    icon={<FieldTimeOutlined />}
                    style={{ color:horario  ? "#acacac" : "#87d068" }}
                  >
                    {horario}
                  </Button>
                </Tag>
              ))}
            </Flex>
          </div>
        }
      />
      <ModalAgendamento
        setOpen={setOpen}
        open={open}
        setIsBlock={setIsBlock}
        isBlock={isBlock}
      />
    </Card>
  );
}

export default CardUser;