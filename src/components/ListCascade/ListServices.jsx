import React from "react";
import { Space, Cascader } from "antd";
const ListServices = ({isClear,setIsClear}) => {
  const handleChange = (value) => {
    if (value !== undefined && value !== null) {
      console.log(value[0]);
    } else {
      return setIsClear(true)
    }
  };
  return (
    <Space wrap>
      <Cascader
        mode="tags"
        placeholder="Escolha"
        allowClear={isClear}
        style={{
          width: 290,
        }}
        onChange={handleChange}
        options={[
          {
            value: "Corte",
            label: "R$30,00 Corte",
          },
          {
            value: "Corte e Barba",
            label: "R$50,00 Corte e Barba",
          },
          {
            value: "Corte, Barba e Sombrancelhas",
            label: "R$60,00 Corte, Barba e Sombrancelhas",
          },
          {
            value: "Corte e Sombrancelhas",
            label: "R$40,00 Corte e Sombrancelhas",
          },
        ]}
      />
    </Space>
  );
};
export default ListServices;
