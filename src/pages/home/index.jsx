import { useEffect, useState } from "react";
import CalendarList from "../../components/calendarList";
import { Calendar } from "antd";
import moment from "moment";
import "./home.css"
import CardUser from "../../components/Card";

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
      setIsMobileCalendar(window.innerWidth < 400);
    }

    window.addEventListener("resize", handleResizeCalendar);
    handleResizeCalendar();

    return () => {
      window.removeEventListener("resize", handleResizeCalendar);
    };
  }, []);
  return (
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
            {isMoblieCalnedar && <CalendarList onDaySelect={handleDaySelect} />}
            {!isMoblieCalnedar && (
              <Calendar fullscreen={false} disabledDate={disabledDate} style={{height:370}} />
            )}
          </div>
          <div className="minfos">
            <CardUser/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
