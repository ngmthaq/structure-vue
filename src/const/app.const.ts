export default class AppConst {
  public static CUSTOM_EVENTS: CustomEvents = {
    onChangeTab: "onChangeTab",
  };
}

export type CustomEvents = {
  onChangeTab: string;
};
