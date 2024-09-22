import axios from "axios";

export async function getDashBoardData(
  setDashboardData,
  setLoding,
  setError,
  toast
) {
    const toastId = toast.loading("Loading data...");
  try {
    setError("");
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!baseUrl) {
      setError("server base URL not found");
      toast.success("data fetch successfully..", {
        id: toastId,
      });
      return;
    }
    setLoding(true);
    const { data } = await axios.get(`${baseUrl}/get-dashboard-data`);
    console.log(data);
    setDashboardData(data);
    setLoding(false);
    toast.success("data fetch successfully..", {
      id: toastId,
    });
  } catch (error) {
    console.log(error);
   toast.success("data fetch successfully..", {
     id: toastId,
   });
    setError("error occurred while fetching dashboard data");
  }
}
