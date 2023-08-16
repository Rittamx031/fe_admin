class ConVertData {
  formatDateToDDMMYYYY(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object");
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  formatMoneyInVietnam(amount) {
    amount = typeof amount === "string" ? parseFloat(amount) : amount;

    if (isNaN(amount)) {
      return "0 d";
    }
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0, // Set the minimum number of decimal places to 0
      maximumFractionDigits: 0, // Set the maximum number of decimal places to 0
    });
  }
  dateInNav(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object");
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.getDay();

    const daysOfWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
    const dayOfWeekAbbreviation = daysOfWeek[dayOfWeek];

    return (
      <>
        <span className="date">{day}</span>
        <span className="mouth">/{month}</span>
        <span> - </span>
        <span className="dayofweek">{dayOfWeekAbbreviation}</span>
      </>
    );
  }
  convertDate(datetime) {
    if (datetime != null) {
      let d = new Date(datetime);
      let day = d.getDate();
      let month = d.getMonth() + 1; // Months are 0-based, so we add 1 to get the correct month
      let year = d.getFullYear();

      // Add leading zeros if needed
      day = day < 10 ? "0" + day : day;
      month = month < 10 ? "0" + month : month;

      return day + "/" + month + "/" + year;
    } else {
      return "Không xác định";
    }
  }
}
export default new ConVertData();
