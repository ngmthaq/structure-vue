<template>
  <div class="timeline-container">
    <div class="timeline" :style="{ marginTop: index === 0 ? `0px` : `24px` }" v-for="(item, index) in data" :key="index">
      <div class="company-image-container">
        <img :src="item.company.image" :alt="item.company.name" />
      </div>
      <div class="timeline-item">
        <div class="company-description-container">
          <div class="header">
            <a target="_blank" :href="item.company.url">{{ item.company.name }}</a>
            <p>commented in/on/at {{ item.company.time }}</p>
          </div>
          <div class="body">
            <p>{{ item.company.description }}</p>
            <div class="image-container" v-if="Boolean(item.company.descriptionImage)">
              <img
                v-for="(descriptionImage, descriptionImageIndex) in item.company.descriptionImage"
                :key="descriptionImageIndex"
                :src="descriptionImage"
                :alt="item.company.description"
              />
            </div>
          </div>
        </div>
        <div class="action-container">
          <div class="action-item" v-for="(actionItem, actionIndex) in item.actions" :key="actionIndex">
            <div class="line"></div>
            <div class="item">
              <div class="label">
                <font-awesome-icon :icon="actionItem.label" />
              </div>
              <div class="data">
                <img :src="actionItem.image" :alt="actionItem.name" />
                <a :href="actionItem.url" target="_blank">{{ actionItem.name }}</a>
                <p>{{ actionItem.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "@/core/component.core";

type Props = {
  data: Array<{
    company: {
      name: string;
      image: string;
      url: string;
      time: string;
      description: string;
      descriptionImage?: string[];
    };
    actions: Array<{
      name: string;
      image: string;
      url: string;
      title: string;
      label: string;
    }>;
  }>;
};

defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.timeline-container {
  max-width: 1200px;
  margin: 0 auto;

  & .timeline {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    & .company-image-container {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
      margin-right: 8px;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    & .timeline-item {
      width: 100%;

      & .company-description-container {
        width: 100%;

        & .header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background-color: #161b22;
          border: 1px solid #586472;
          padding: 8px 16px;
          border-radius: 8px 8px 0 0;

          & a {
            margin-right: 4px;
            color: $light;
            text-decoration: none;
            font-weight: 500;
            font-size: 16px;
          }

          & p {
            color: $gray;
            font-size: 14px;
          }
        }

        & .body {
          color: $light;
          font-weight: 400;
          font-size: 14px;
          border: 1px solid #586472;
          border-top: unset;
          padding: 8px 16px;
          border-radius: 0 0 8px 8px;

          & .image-container {
            display: flex;
            flex-wrap: wrap;
            margin-top: 16px;

            & img {
              width: 50%;
            }
          }
        }
      }

      & .action-container {
        width: 100%;

        & .action-item {
          width: 100%;

          & .line {
            height: 20px;
            width: 100%;
            border-left: 2px solid $gray;
            margin-left: 20px;
          }

          & .item {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            & .label {
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background-color: rgba($color: #21262d, $alpha: 1);
              margin-left: 2px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: $gray;
              margin-right: 16px;
            }

            & .data {
              display: flex;
              align-items: center;
              justify-content: flex-start;

              & img {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                margin-right: 4px;
                object-fit: cover;
              }

              & a {
                color: $light;
                font-size: 14px;
                text-decoration: none;
              }

              & p {
                color: $gray;
                font-size: 14px;
                padding-left: 4px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
