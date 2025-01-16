<script setup lang="ts">
import EasyDropdown from "@/components/dropdown/EasyDropdown.vue";
import EasyButton from "@/components/button/EasyButton.vue";
import EasyIcon from "@/components/icon/EasyIcon.vue";

import './EasyNotificationDropdown.scss'
import {IItem} from "@/types/ui";
import EasyTabs from "@/components/tabs/EasyTabs.vue";
import {ref} from "vue";

const tabs: IItem[] = [
  {
    label: '<div class="event-wrap">События <p class="event-wrap-count">25</p></div>',
    value: 'event'
  },
  {
    label: 'Сообщения',
    value: 'message'
  },
  {
    label: 'Системные',
    value: 'systems'
  },
];

const activeTab = ref(tabs[0].value);
const isOpen = ref(false)
</script>

<template>
  <EasyDropdown @toggle="isOpen = $event">
    <template #trigger>
      <EasyButton
        plain
        aria-label="Уведомления"
        v-tooltip.bottom="'Уведомления'"
        :class="{'no-background': isOpen}"
      >
        <EasyIcon class="icon" name="icon-Notification" :size="24">
          <span class="notification-count">24</span>
        </EasyIcon>
      </EasyButton>
    </template>

    <template #default>
      <div class="dropdown-header-navigation">
        <h5 class="dropdown-header-navigation-title">Уведомления</h5>
        <div class="flex items-center" :style="{gap: '12px'}">
          <EasyButton plain>
            <EasyIcon class="icon" name="icon-arrow-up-right-from-square-1" :size="20"/>
          </EasyButton>
          <EasyButton plain>
            <EasyIcon class="icon" name="icon-Setting-Outline" :size="20"/>
          </EasyButton>
        </div>
      </div>
      <div class="tabs-container">
        <EasyTabs :items="tabs" v-model="activeTab"/>
      </div>
      <div class="event-container scrollbar" v-if="activeTab === 'event'">
        <div class="event-item" v-for="item in 5" :key="item">
          <div class="event-item-icon">
            <EasyIcon name="icon-Document" :size="24"/>
          </div>
          <div class="event-item-main">
            <div class="event-item-header">
              <div>
                <h6 class="event-item-header-title">Сумма активации договора снизилась  </h6>
                <p class="event-item-header-subtitle">#9601912 • RizoTravel</p>
              </div>
              <time class="event-item-header-time">2 ч.</time>
            </div>
            <p class="event-item-desc">
              Сумма активации договора с агентом {имя агента} снизилась до {новая сумма} USD. Пожалуйста, внесите дополнительные средства
            </p>
          </div>
        </div>
      </div>
    </template>
  </EasyDropdown>
</template>

<style scoped lang="scss">

</style>
