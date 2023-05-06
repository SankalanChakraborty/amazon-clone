const currDate = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export const deliveryTimeline = months[currDate.getMonth()] + " " + currDate.getDate() + " - " + (currDate.getDate()+4); 