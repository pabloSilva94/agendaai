import { Modal, notification } from "antd";
import { useState } from "react";
import ListServices from "../ListCascade/ListServices";

function ModalAgendamento({ open, setOpen, setIsBlock  }) {
  const [api, contextHolder] = notification.useNotification();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isClear, setIsClear] = useState(false)
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setIsBlock(false)
      const message = "Sucesso";
      const description = "Agendandado com sucesso";
      const placement = "topLeft";
      openNotification("success", message, description, placement);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
    setIsBlock(false)
    setIsClear(true)
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
        <ListServices isClear={isClear} setIsClear={setIsClear}/>
        <p>Você deseja agendar o horario das 08:00 ?</p>
      </Modal>
      {contextHolder}
    </>
  );
}

export default ModalAgendamento;
