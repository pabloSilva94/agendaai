import { useContext, useEffect, useRef, useState } from "react";
import CalendarList from "../../components/calendarList";
import { Calendar, FloatButton } from "antd";
import moment from "moment";
import "./home.css";
import CardUser from "../../components/Card";
import { getDate } from "../../hooks/useGetData";
import { ScrollProvider } from "../../context/scrollContext";
import { AuthContext } from "../../context/authContext";

function Home() {

  const [selectedDay, setSelectedDay] = useState("");
  const [user, setUser] = useState([]);
  const [isMoblieCalnedar, setIsMobileCalendar] = useState(false);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };
  function disabledDate(current) {
    return current && current < moment().startOf("day");
  }

  useEffect(() => {
    function handleResizeCalendar() {
      setIsMobileCalendar(window.innerWidth < 431);
    }

    window.addEventListener("resize", handleResizeCalendar);
    handleResizeCalendar();
    return () => {
      window.removeEventListener("resize", handleResizeCalendar);
    };
  }, []);
  

  const handleDateSelect = async (value) => {
    let date = value.format("DD/MM/YYYY");
    let id_loja = "dxvku708pyo";
    const selectedDate = {
      date,
      id_loja,
    };
    const res = await getDate(selectedDate);
    if (res.error) {
      console.log(res.message);
    }
    return console.log(res.success, res.message);
  };

  return (
    <ScrollProvider>
      <div className="containerDashboard">
        <div className="mainDashboard">
          <div className="hUser">
            <div className="hTitle">
              <h1>Home</h1>
            </div>
            <div className="hNameAvatar">
              <p>Olá, {user?.data?.user?.name}</p>
            </div>
          </div>
          <div className="main">
            <div className="mCalendar">
              {isMoblieCalnedar && (
                <CalendarList
                  onDaySelect={handleDaySelect}
                />
              )}
              {!isMoblieCalnedar && (
                <Calendar
                  fullscreen={false}
                  disabledDate={disabledDate}
                  style={{ height: 370 }}
                  onSelect={(value) => handleDateSelect(value)}
                />
              )}
            </div>
            <div className="minfos">
              <CardUser
            />
            </div>
          </div>
        </div>
      </div>
    </ScrollProvider>
  );
}

export default Home;
