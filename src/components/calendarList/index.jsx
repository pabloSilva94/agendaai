import { useEffect, useState } from "react";
import moment from "moment";
import "moment/dist/locale/pt-br";
import "./calendarLineStyle.css";
import { Button } from "antd";
import { Select } from "antd";
import { getDate } from "../../hooks/useGetData";
import { useScrollContext } from "../../context/scrollContext";
const { Option } = Select;
moment.locale("pt-br");

const CalendarList = ({ onDaySelect }) => {
  const { scrollToCurrentDay, containerRef } = useScrollContext();
  
  const [selectedMonth, setSelectedMonth] = useState(moment().month());
  const [daysOfMonth, setDaysOfMonth] = useState([]);
  const [selectedDay, setSelectedDay] = useState(moment().startOf("day"));

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const hoje = moment().startOf("day");
  const handleDateSelect = async (selectedDate) => {
    const res = await getDate(selectedDate);
    if (res.error) {
      console.log(res.message);
    }
    return console.log(res.success, res.message);
  };
  useEffect(() => {
    const primeiroDiaDoMes = moment().month(selectedMonth).startOf("month");
    const ultimoDiaDoMes = moment().month(selectedMonth).endOf("month");
    const diasNoMes = [];
    let diaMapeado = primeiroDiaDoMes.clone();
    while (diaMapeado.isSameOrBefore(ultimoDiaDoMes, "day")) {
      diasNoMes.push(diaMapeado.clone());
      diaMapeado.add(1, "day");
    }
    setDaysOfMonth(diasNoMes);
    let id_loja = "dxvku708pyo";
    let date = hoje.format("DD/MM/YYYY");
    const selectedDate = {
      date,
      id_loja,
    };
    setTimeout(() => {
      handleDateSelect(selectedDate);
    }, 1500);
    scrollToCurrentDay();

    document.getElementById("monthTitle").innerText = capitalizeFirstLetter(
      moment().month(selectedMonth).format("MMMM")
    );
  }, [selectedMonth]);
  const handleDayClick = (dia) => {
    setSelectedDay(dia);
    onDaySelect(dia);
    let id_loja = "dxvku708pyo";
    let date = dia.format("DD/MM/YYYY");
    const selectedDate = {
      date,
      id_loja,
    };
    setTimeout(() => {
      return handleDateSelect(selectedDate);
    }, 1500);
  };

  return (
    <div>
      <div ref={containerRef} className="lHeaderCalendar">
        <Select defaultValue={moment().month()} onChange={handleMonthChange}>
          {moment.months().map((month, index) => (
            <Option key={index} value={index}>
              {month}
            </Option>
          ))}
        </Select>
        <h1 id="monthTitle">
          {capitalizeFirstLetter(moment().format("MMMM"))}
        </h1>
      </div>
      <div ref={containerRef} className="dLineCalendar">
        {daysOfMonth.map((dia, index) => {
          const diaPassado = dia.isBefore(hoje, "day");
          return (
            <Button
              key={index}
              className={`lContainerDias ${
                dia.isSame(hoje, "day") ? "currentDay" : ""
              }`}
              type={dia.isSame(hoje, "day") ? "primary" : "default"}
              disabled={diaPassado}
              onClick={() => handleDayClick(dia)}
            >
              <p className="lDias">{`${dia.format("ddd")}`}</p>
              <p>{`${dia.format("D")}`}</p>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarList;
