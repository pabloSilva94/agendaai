import { supabase } from "../services/supabase/supabase";
export const getDate = async (selectedDate) => {
  const { date, id_loja } = selectedDate;

  try {
    if (!date || !id_loja) {
      return {
        success: false,
        error: "Data inválida",
        message: "Data inválida",
      };
    }

    const { data: allDate, error: allDateError } = await supabase
      .from("providers")
      .select(
        "name, phone, avatar, id_loja, schedule: schedule(id, time, date, created_at)"
      )
      .eq("id_loja", id_loja)
      .eq("schedule.date", date);
    if (allDateError) {
      return { success: false, message: allDateError.message };
    }

    if (allDate.length > 0) {
      if (allDate[0].schedule.length === 0) {
        localStorage.setItem("s", JSON.stringify(allDate));
        return {
          success: true,
          message: `A loja não possui agendamentos neste dia ${date}`,
        };
      }
      localStorage.setItem("s", JSON.stringify(allDate));
      return { success: true, message: "Dados salvos no localStorage" };
    }
  } catch (error) {
    return { success: false, error: error.message, message: error.message };
  }
};
