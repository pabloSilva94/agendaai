import { useEffect, useRef, useState } from "react";
import CalendarList from "../../components/calendarList";
import { Calendar, FloatButton } from "antd";
import moment from "moment";
import "./home.css";
import CardUser from "../../components/Card";

function Home() {
  const containerRef = useRef(null);
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
  useEffect(() => {
    if (containerRef.current) {
      const diaAtualElement = containerRef.current.querySelector('.currentDay');
      if (diaAtualElement) {
        diaAtualElement.scrollIntoViewIfNeeded({ behavior: 'smooth', block: 'center' });
      }
    }
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
            {isMoblieCalnedar && <CalendarList containerRef={containerRef} onDaySelect={handleDaySelect} />}
            {!isMoblieCalnedar && (
              <Calendar
                fullscreen={false}
                disabledDate={disabledDate}
                style={{ height: 370 }}
              />
            )}
          </div>
          <div className="minfos">
            <CardUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
