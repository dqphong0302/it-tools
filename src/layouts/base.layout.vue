<script lang="ts" setup>
import { NIcon, useThemeVars } from 'naive-ui';

import { RouterLink } from 'vue-router';
import { Heart, Home2, Menu2 } from '@vicons/tabler';

import { storeToRefs } from 'pinia';
import HeroGradient from '../assets/hero-gradient.svg?component';
import MenuLayout from '../components/MenuLayout.vue';
import NavbarButtons from '../components/NavbarButtons.vue';
import { useStyleStore } from '@/stores/style.store';
import { config } from '@/config';
import type { ToolCategory } from '@/tools/tools.types';
import { useToolStore } from '@/tools/tools.store';
import { useTracker } from '@/modules/tracker/tracker.services';
import CollapsibleToolMenu from '@/components/CollapsibleToolMenu.vue';

const themeVars = useThemeVars();
const styleStore = useStyleStore();
const version = config.app.version;
const commitSha = config.app.lastCommitSha.slice(0, 7);

const { tracker } = useTracker();
const { t } = useI18n();

const toolStore = useToolStore();
const { favoriteTools, toolsByCategory } = storeToRefs(toolStore);

const tools = computed<ToolCategory[]>(() => [
  ...(favoriteTools.value.length > 0 ? [{ name: t('tools.categories.favorite-tools'), components: favoriteTools.value }] : []),
  ...toolsByCategory.value,
]);
</script>

<template>
  <MenuLayout class="menu-layout" :class="{ isSmallScreen: styleStore.isSmallScreen }">
    <template #sider>
      <RouterLink to="/" class="hero-wrapper">
        <HeroGradient class="gradient" />
        <div class="text-wrapper">
          <div class="title tracking-wide font-700">
            PHONG ĐẶNG
          </div>
          <div class="divider" />
          <div class="subtitle text-emerald-400 font-600">
            IT - TOOLS & DEV UTILITIES
          </div>
        </div>
      </RouterLink>

      <div class="sider-content">
        <div v-if="styleStore.isSmallScreen" flex flex-col items-center>
          <locale-selector w="90%" />

          <div flex justify-center>
            <NavbarButtons />
          </div>
        </div>

        <CollapsibleToolMenu :tools-by-category="tools" />

        <div class="footer">
          <div class="font-600 text-sm">
            PHONG ĐẶNG DEVTOOLS
            <c-link target="_blank" rel="noopener" :href="`https://github.com/dqphong0302/it-tools/tree/v${version}`">
              v{{ version }}
            </c-link>
          </div>
          <div class="mt-1 text-xs text-neutral-400">
            © {{ new Date().getFullYear() }}
            <c-link target="_blank" rel="noopener" href="https://phongdang.io.vn">
              phongdang.io.vn
            </c-link>
            •
            <c-link target="_blank" rel="noopener" href="https://github.com/dqphong0302">
              Đặng Quốc Phong
            </c-link>
          </div>
        </div>
      </div>
    </template>

    <template #content>
      <div flex items-center justify-center gap-2>
        <c-button
          circle
          variant="text"
          :aria-label="$t('home.toggleMenu')"
          @click="styleStore.isMenuCollapsed = !styleStore.isMenuCollapsed"
        >
          <NIcon size="25" :component="Menu2" />
        </c-button>

        <router-link to="/" class="no-underline flex items-center mr-1">
          <span class="font-700 text-15px tracking-wide text-white hidden sm:inline-block">
            PHONG ĐẶNG
          </span>
        </router-link>

        <c-tooltip :tooltip="$t('home.home')" position="bottom">
          <c-button to="/" circle variant="text" :aria-label="$t('home.home')">
            <NIcon size="25" :component="Home2" />
          </c-button>
        </c-tooltip>

        <c-tooltip :tooltip="$t('home.uiLib')" position="bottom">
          <c-button v-if="config.app.env === 'development'" to="/c-lib" circle variant="text" :aria-label="$t('home.uiLib')">
            <icon-mdi:brush-variant text-20px />
          </c-button>
        </c-tooltip>

        <command-palette />

        <locale-selector v-if="!styleStore.isSmallScreen" />

        <div>
          <NavbarButtons v-if="!styleStore.isSmallScreen" />
        </div>

        <c-tooltip position="bottom" tooltip="Hệ sinh thái phongdang.io.vn">
          <c-button
            round
            href="https://phongdang.io.vn"
            rel="noopener"
            target="_blank"
            class="portal-button"
            :bordered="false"
          >
            phongdang.io.vn
            <NIcon v-if="!styleStore.isSmallScreen" :component="Home2" ml-2 />
          </c-button>
        </c-tooltip>
      </div>
      <slot />
    </template>
  </MenuLayout>
</template>

<style lang="less" scoped>
.portal-button {
  background: linear-gradient(135deg, #0f172a 0%, #0284c7 50%, #10b981 100%);
  color: #fff !important;
  box-shadow: 0 2px 10px rgba(16, 185, 129, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  transition: all ease 0.2s !important;

  &:hover {
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
  }
}

.footer {
  text-align: center;
  color: #838587;
  margin-top: 20px;
  padding: 20px 0;
}

.sider-content {
  padding-top: 160px;
  padding-bottom: 200px;
}

.hero-wrapper {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  z-index: 10;
  overflow: hidden;

  .gradient {
    margin-top: -65px;
  }

  .text-wrapper {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    top: 16px;
    color: #fff;

    .title {
      font-size: 25px;
      font-weight: 600;
    }

    .divider {
      width: 50px;
      height: 2px;
      border-radius: 4px;
      background-color: v-bind('themeVars.primaryColor');
      margin: 0 auto 5px;
    }

    .subtitle {
      font-size: 16px;
    }
  }
}
</style>
