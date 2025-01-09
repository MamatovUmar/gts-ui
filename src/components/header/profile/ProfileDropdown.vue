<script setup lang="ts">
import EasyDropdown from '../../dropdown/EasyDropdown.vue';
import EasyAvatar from '../../avatar/EasyAvatar.vue';
import { IUser } from '@/types/user';
import { computed } from 'vue';
import { IItem } from '@/types/ui';

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
        <a v-for="link in links" :key="link.label" :href="link.value" class="profile-dropdown__link">
          <i :class="link.icon"></i>
          {{ link.label }}
        </a>
      </div>
    </EasyDropdown>
  </div>
</template>

<style lang="scss">
.profile-dropdown__op {
  box-shadow: 0px 8px 12px 0px #1018280A;

  .p-overlaypanel-content {
    padding: 0;
  }
}
</style>
<style lang="scss" scoped>
.profile-dropdown {
  display: flex;
  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid var(--border-default);
    padding-bottom: 8px;
    padding-top: 2px;
  }
  &__link {
    font-size: 16px;
    color: var(--text-default);
    line-height: 18px;
    text-decoration: none;
    height: 44px;
    display: flex;
    align-items: center;
    width: 100%;
    padding-inline: 12px;
    &:hover {
      background: var(--background-neutral-subtle-hovered)
    }
    i {
      margin-right: 8px;
      font-size: 20px;
    }
  }
  &__content {
    width: 232px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 12px;
  }
  &__username {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-default);
    line-height: 18px;
    margin-top: 12px;
  }
  &__user-role {
    font-size: 14px;
    color: var(--text-subtle);
    line-height: 18px;
    margin-top: 2px;
  }
}
</style>
