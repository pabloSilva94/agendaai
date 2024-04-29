import { Input, Modal, Space, notification } from "antd";
import { useState } from "react";
import ListServices from "../ListCascade/ListServices";

export const ModalAgendamento = ({ open, setOpen, setIsBlock }) => {
  const [api, contextHolder] = notification.useNotification();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setIsBlock(false);
      const message = "Sucesso";
      const description = "Agendandado com sucesso";
      const placement = "topLeft";
      openNotification("success", message, description, placement);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
    setIsBlock(false);
    setIsClear(true);
  };
  const openNotification = (type, message, description, placement) => {
    if (type === "error") {
      api.error({
        message: message,
        description: description,
        placement: placement,
      });
    } else if (type === "info") {
      api.info({
        message: message,
        description: description,
        placement: placement,
      });
    } else if (type === "success") {
      api.success({
        message: message,
        description: description,
        placement: placement,
      });
    }
  };
  return (
    <>
      <Modal
        title="Agendamento"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <ListServices isClear={isClear} setIsClear={setIsClear} />
        <p>Você deseja agendar o horario das 08:00 ?</p>
      </Modal>
      {contextHolder}
    </>
  );
};
export const ModalProvider = ({ open, setOpen }) => {
  const [api, contextHolder] = notification.useNotification();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      const message = "Sucesso";
      const description = "Agendandado com sucesso";
      const placement = "topLeft";
      openNotification("success", message, description, placement);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const openNotification = (type, message, description, placement) => {
    if (type === "error") {
      api.error({
        message: message,
        description: description,
        placement: placement,
      });
    } else if (type === "info") {
      api.info({
        message: message,
        description: description,
        placement: placement,
      });
    } else if (type === "success") {
      api.success({
        message: message,
        description: description,
        placement: placement,
      });
    }
  };
  return (
    <>
      <Modal
        title="Cadastrar Prestador"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input placeholder="Nome" style={{ marginBottom: 10 }} />
        <Input placeholder="Email" />
      </Modal>
      {contextHolder}
    </>
  );
};
export const ModalServices = ({ open, setOpen }) => {
  const [api, contextHolder] = notification.useNotification();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      const message = "Sucesso";
      const description = "Serviço criado com sucesso";
      const placement = "topLeft";
      openNotification("success", message, description, placement);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const openNotification = (type, message, description, placement) => {
    if (type === "error") {
      api.error({
        message: message,
        description: description,
        placement: placement,
      });
    } else if (type === "info") {
      api.info({
        message: message,
        description: description,
        placement: placement,
      });
    } else if (type === "success") {
      api.success({
        message: message,
        description: description,
        placement: placement,
      });
    }
  };
  return (
    <>
      <Modal
        title="Cadastrar Serviço"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Space>
          <Input placeholder="Titulo" />
          <Input placeholder="Valor" />
        </Space>
      </Modal>
      {contextHolder}
    </>
  );
};
