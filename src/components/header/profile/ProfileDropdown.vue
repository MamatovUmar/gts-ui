<script setup lang="ts">
import EasyDropdown from '../../dropdown/EasyDropdown.vue';
import EasyAvatar from '../../avatar/EasyAvatar.vue';
import { IUser } from '@/types/user';
import { computed } from 'vue';
import { IItem } from '@/types/ui';
import './ProfileDropdown.scss'

const props = defineProps<{
  user: IUser
  links: IItem[]
}>()

const imageUrl = computed(() => {
  if (props.user.profile_image && !props.user.profile_image.includes('default_profile')) {
    return `https://api2.globaltravel.space${props.user.profile_image}`
  }
  return undefined
})

const name = computed(() => {
  if (props.user.type_cabinet === 'BUSINESS') {
    return props.user?.company_info?.name
  }
  return props.user?.username || props.user?.email
})

</script>

<template>
  <div class="profile-dropdown">
    <EasyDropdown dropdown-class="profile-dropdown__op">
      <template #trigger>
        <EasyAvatar size="36px" :url="imageUrl" :username="name" class="pointer" />
      </template>

      <div class="profile-dropdown__content">
        <EasyAvatar size="64px" :url="imageUrl" :username="name" />
        <div class="profile-dropdown__username">{{ name }}</div>
        <div v-if="user.type_cabinet !== 'BUSINESS'" class="profile-dropdown__user-role">Проект менеджер</div>
      </div>

      <div class="profile-dropdown__links">
        <a v-for="link in links" :key="link.label" :href="String(link.value)" class="profile-dropdown__link">
          <i :class="link.icon"></i>
          {{ link.label }}
        </a>
      </div>
    </EasyDropdown>
  </div>
</template>
