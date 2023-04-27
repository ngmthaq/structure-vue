import Luxon from "luxon";

export default class DatetimeHelper {
  public static getCurrentUTCMilliseconds() {
    return Luxon.DateTime.now().toUTC().toMillis();
  }
}
