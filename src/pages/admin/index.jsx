import { useState } from "react";
import { Avatar, Card, Divider, Space, Statistic } from "antd";
import {
  CardDashProviders,
  CardDashServices,
  CardDashUsers,
} from "../../components/Card/CardDash";
import "./admin.css";
import {
  ModalProvider,
  ModalServices,
} from "../../components/Modal/ModalAgendamento";
import { ArrowUpOutlined, DollarOutlined } from "@ant-design/icons";
import { ChartProvider, ChartServices } from "../../components/Grafico";
function Admin() {
  const [open, setOpen] = useState(false);
  const [openModalServices, setOpenModalServices] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const showService = () => {
    setOpenModalServices(true);
  };
  return (
    <>
      <div className="container">
        <header className="hDashboard">
          <h1>Dashboard</h1>
          <Space>
            <Avatar src="https://api.dicebear.com/8.x/thumbs/svg?seed=Charlie" />
          </Space>
        </header>
        <Space
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#413ED0",
          }}
        >
          <Statistic
            style={{
              background: "#413ED0",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            title={<h2>Total neste mês</h2>}
            value={550}
            precision={2}
            valueStyle={{
              color: "#7dff0b",
            }}
            prefix={<DollarOutlined />}
          />
        </Space>
        <div className="mainDash">
          <Space>
            <CardDashProviders showModal={showModal} />
            <CardDashServices showModal={showService} />
            <CardDashUsers />
          </Space>
        </div>
        <div className="chartProvider">
          <h2>Atendimentos neste mês</h2>
          <ChartProvider />
        </div>
        <div className="chartProvider">
          <h2>Serviços neste mês</h2>
          <ChartServices />
        </div>
        <ModalProvider open={open} setOpen={setOpen} />
        <ModalServices
          open={openModalServices}
          setOpen={setOpenModalServices}
        />
      </div>
    </>
  );
}

export default Admin;
