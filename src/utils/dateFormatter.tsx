import "moment/locale/th";

import moment from "moment";

const dateFormatter = (dateString: string) => {
  return moment(dateString, undefined, "th").format("DD MMM YYYY, hh:mm:ss");
};

export default dateFormatter;
