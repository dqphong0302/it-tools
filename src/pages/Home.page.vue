<script setup lang="ts">
import { IconDragDrop, IconHeart } from '@tabler/icons-vue';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import Draggable from 'vuedraggable';
import ColoredCard from '../components/ColoredCard.vue';
import ToolCard from '../components/ToolCard.vue';
import { useToolStore } from '@/tools/tools.store';
import { config } from '@/config';

const toolStore = useToolStore();

useHead({ title: 'IT Tools | Phong Đặng - Developer Utilities' });
const { t } = useI18n();

const favoriteTools = computed(() => toolStore.favoriteTools);

// Update favorite tools order when drag is finished
function onUpdateFavoriteTools() {
  toolStore.updateFavoriteTools(favoriteTools.value); // Update the store with the new order
}
</script>

<template>
  <div class="pt-50px">
    <div class="grid-wrapper">
      <!-- Welcome Hero Banner -->
      <div class="welcome-hero mb-25px p-20px rounded-16px border border-white/10 relative overflow-hidden">
        <div class="relative z-2">
          <div class="flex items-center gap-2 mb-2">
            <span class="inline-block px-10px py-2px text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Phong Đặng DevTools
            </span>
            <span class="text-xs text-neutral-400">
              • Phiên bản cá nhân hóa trên Cloudflare
            </span>
          </div>
          <h2 class="text-22px font-700 text-white m-0 tracking-tight">
            Bộ công cụ tiện ích lập trình & hạ tầng số
          </h2>
          <p class="text-14px text-neutral-400 mt-2 mb-4 max-w-700px leading-relaxed">
            Tổng hợp hơn 80+ tiện ích trực tuyến phục vụ phát triển phần mềm, DevOps, mạng và mã hóa bảo mật. Chạy trực tiếp 100% Client-side an toàn và bảo mật.
          </p>
          <div class="flex flex-wrap gap-2 text-xs">
            <a
              href="https://phongdang.io.vn"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 px-12px py-6px rounded-8px bg-slate-800/80 hover:bg-slate-700 text-white transition no-underline border border-slate-700"
            >
              🌐 phongdang.io.vn
            </a>
            <a
              href="https://github.com/dqphong0302/it-tools"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 px-12px py-6px rounded-8px bg-slate-800/80 hover:bg-slate-700 text-white transition no-underline border border-slate-700"
            >
              ⭐ GitHub Repository
            </a>
          </div>
        </div>
        <div class="absolute -right-20px -bottom-20px w-200px h-200px rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div class="absolute -left-20px -top-20px w-160px h-160px rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      </div>

      <transition name="height">
        <div v-if="toolStore.favoriteTools.length > 0">
          <h3 class="mb-5px mt-25px text-neutral-400 font-500">
            {{ $t('home.categories.favoriteTools') }}
            <c-tooltip :tooltip="$t('home.categories.favoritesDndToolTip')">
              <n-icon :component="IconDragDrop" size="18" />
            </c-tooltip>
          </h3>
          <Draggable
            :list="favoriteTools"
            class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4"
            ghost-class="ghost-favorites-draggable"
            item-key="name"
            @end="onUpdateFavoriteTools"
          >
            <template #item="{ element: tool }">
              <ToolCard :tool="tool" />
            </template>
          </Draggable>
        </div>
      </transition>

      <div v-if="toolStore.newTools.length > 0">
        <h3 class="mb-5px mt-25px text-neutral-400 font-500">
          {{ t('home.categories.newestTools') }}
        </h3>
        <div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <ToolCard v-for="tool in toolStore.newTools" :key="tool.name" :tool="tool" />
        </div>
      </div>

      <h3 class="mb-5px mt-25px text-neutral-400 font-500">
        {{ $t('home.categories.allTools') }}
      </h3>
      <div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
        <ToolCard v-for="tool in toolStore.tools" :key="tool.name" :tool="tool" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.welcome-hero {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(11, 15, 25, 0.95) 100%);
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.height-enter-active,
.height-leave-active {
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  max-height: 500px;
}

.height-enter-from,
.height-leave-to {
  max-height: 42px;
  overflow: hidden;
  opacity: 0;
  margin-bottom: 0;
}

.ghost-favorites-draggable {
  opacity: 0.4;
  background-color: #ccc;
  border: 2px dashed #666;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  animation: ghost-favorites-draggable-animation 0.2s ease-out;
}

@keyframes ghost-favorites-draggable-animation {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 0.4;
    transform: scale(1.0);
  }
}
</style>
