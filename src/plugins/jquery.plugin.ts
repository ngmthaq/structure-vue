import $ from "jquery";
import "slick-carousel";

function jQueryReady(callback: JQueryCallback) {
  $(function () {
    callback($);
  });
}

export { $, jQueryReady };

export type JQueryCallback = ($: JQueryStatic) => void;

declare global {
  interface JQuery {
    slick: (options: any) => void;
  }
}
