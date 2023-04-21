<template>
  <div :id="id" :dir="rtl ? 'rtl' : 'ltr'">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineClassComponent, defineProps, defineEmits, Component } from "@/core/component.core";
import { jQueryReady } from "@/plugins/jquery.plugin";

const props = defineProps({
  id: { type: String, required: true },
  accessibility: { type: Boolean, default: true },
  adaptiveHeight: { type: Boolean, default: false },
  appendArrows: { type: String },
  appendDots: { type: String },
  arrows: { type: Boolean, default: true },
  asNavFor: { type: String },
  autoplay: { type: Boolean, default: false },
  autoplaySpeed: { type: Number, default: 3000 },
  centerMode: { type: Boolean, default: false },
  centerPadding: { type: String, default: "50px" },
  cssEase: { type: String, default: "ease" },
  customPaging: { type: Function, default: () => {} },
  dots: { type: Boolean, default: false },
  dotsClass: { type: String, default: "slick-dots" },
  draggable: { type: Boolean, default: true },
  easing: { type: String, default: "linear" },
  edgeFriction: { type: Number, default: 0.15 },
  fade: { type: Boolean, default: false },
  focusOnSelect: { type: Boolean, default: false },
  focusOnChange: { type: Boolean, default: false },
  infinite: { type: Boolean, default: true },
  initialSlide: { type: Number, default: 0 },
  lazyLoad: { type: String, default: "ondemand" },
  mobileFirst: { type: Boolean, default: false },
  nextArrow: { type: String, default: `<button type="button" class="slick-next">Next</button>` },
  pauseOnDotsHover: { type: Boolean, default: false },
  pauseOnFocus: { type: Boolean, default: true },
  pauseOnHover: { type: Boolean, default: true },
  prevArrow: { type: String, default: `<button type="button" class="slick-prev">Previous</button>` },
  respondTo: { type: String, default: "window" },
  responsive: { type: Array, default: () => [] },
  rows: { type: Number, default: 1 },
  rtl: { type: Boolean, default: false },
  slide: { type: String, default: "" },
  slidesPerRow: { type: Number, default: 1 },
  slidesToScroll: { type: Number, default: 1 },
  slidesToShow: { type: Number, default: 1 },
  speed: { type: Number, default: 300 },
  swipe: { type: Boolean, default: true },
  swipeToSlide: { type: Boolean, default: false },
  touchMove: { type: Boolean, default: true },
  touchThreshold: { type: Number, default: 5 },
  useCSS: { type: Boolean, default: true },
  useTransform: { type: Boolean, default: true },
  variableWidth: { type: Boolean, default: false },
  vertical: { type: Boolean, default: false },
  verticalSwiping: { type: Boolean, default: false },
  waitForAnimate: { type: Boolean, default: true },
  zIndex: { type: Number, default: 1000 },
});

const emit = defineEmits([
  "afterChange",
  "beforeChange",
  "breakpoint",
  "destroy",
  "edge",
  "init",
  "reInit",
  "setPosition",
  "swipe",
  "lazyLoaded",
  "lazyLoadError",
]);

defineClassComponent(
  class SlickCarosel extends Component {
    public onMounted: () => void = () => {
      jQueryReady(($) => {
        $("#" + props.id).slick(props);

        $("#" + props.id).on("afterChange", (e, currentSlide) => {
          emit("afterChange", e, currentSlide);
        });

        $("#" + props.id).on("beforeChange", (e, currentSlide, nextSlide) => {
          emit("beforeChange", e, currentSlide, nextSlide);
        });

        $("#" + props.id).on("breakpoint", (e, slick, breakpoint) => {
          emit("breakpoint", e, slick, breakpoint);
        });

        $("#" + props.id).on("destroy", (e, slick) => {
          emit("destroy", e, slick);
        });

        $("#" + props.id).on("edge", (e, direction) => {
          emit("edge", e, direction);
        });

        $("#" + props.id).on("init", (e, slick) => {
          emit("init", e, slick);
        });

        $("#" + props.id).on("reInit", (e, slick) => {
          emit("reInit", e, slick);
        });

        $("#" + props.id).on("setPosition", (e, slick) => {
          emit("setPosition", e, slick);
        });

        $("#" + props.id).on("swipe", (e, slick, direction) => {
          emit("swipe", e, slick, direction);
        });

        $("#" + props.id).on("lazyLoaded", (e, slick, image, imageSource) => {
          emit("lazyLoaded", e, slick, image, imageSource);
        });

        $("#" + props.id).on("lazyLoadError", (e, slick, image, imageSource) => {
          emit("lazyLoadError", e, slick, image, imageSource);
        });
      });
    };
  },
);
</script>
