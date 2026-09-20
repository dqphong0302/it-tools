<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

useHead({ title: 'About - IT Tools | Phong Đặng' });

const { locale } = useI18n();

const contentVi = `
# Giới thiệu IT-Tools | Phong Đặng

Chào mừng bạn đến với phiên bản **IT-Tools** được cá nhân hóa và vận hành bởi **[Phong Đặng](https://phongdang.io.vn)**. Trang web tổng hợp các công cụ tiện ích cần thiết cho lập trình viên, kỹ sư hệ thống và chuyên gia công nghệ thông tin.

Toàn bộ các tác vụ tính toán, mã hóa, giải mã và xử lý dữ liệu đều được thực hiện **100% Client-Side** ngay trên trình duyệt của bạn, đảm bảo tối đa về quyền riêng tư và tốc độ xử lý.

## Hệ sinh thái & Liên hệ

- 🌐 **Website cá nhân:** [phongdang.io.vn](https://phongdang.io.vn)
- 💻 **GitHub:** [@dqphong0302](https://github.com/dqphong0302)
- 📦 **Mã nguồn dự án:** [github.com/dqphong0302/it-tools](https://github.com/dqphong0302/it-tools)
- 📧 **Email:** \`phong.dang@samedtech.edu.vn\`

## Công nghệ sử dụng

Hệ thống được xây dựng trên nền tảng **Vue 3**, **Vite**, **Naive UI**, và **UnoCSS**, tự động triển khai trên hạ tầng **Cloudflare Workers (Edge Network)** với độ trễ cực thấp trên toàn cầu.

*Lời cảm ơn chân thành đến tác giả gốc [Corentin Thomasset](https://corentin.tech) vì đã khởi xướng dự án mã nguồn mở tuyệt vời này.*
`.trim();

const contentEn = `
# About IT-Tools | Phong Đặng

Welcome to **IT-Tools**, customized and hosted by **[Phong Đặng](https://phongdang.io.vn)**. This website aggregates essential online utilities for software developers, sysadmins, and IT engineers.

All computation, conversion, encryption, and analysis tasks are performed **100% Client-Side** in your browser, guaranteeing absolute privacy and maximum speed.

## Ecosystem & Contact

- 🌐 **Personal Website:** [phongdang.io.vn](https://phongdang.io.vn)
- 💻 **GitHub:** [@dqphong0302](https://github.com/dqphong0302)
- 📦 **Project Repository:** [github.com/dqphong0302/it-tools](https://github.com/dqphong0302/it-tools)
- 📧 **Email:** \`phong.dang@samedtech.edu.vn\`

## Technologies

Built with **Vue 3**, **Vite**, **Naive UI**, and **UnoCSS**, automatically deployed on the **Cloudflare Workers Edge Network** for low-latency worldwide delivery.

*Special thanks to original author [Corentin Thomasset](https://corentin.tech) for creating the initial open-source foundation.*
`.trim();

const currentContent = computed(() => (locale.value === 'vi' ? contentVi : contentEn));
</script>

<template>
  <c-markdown :markdown="currentContent" mx-auto mt-50px max-w-600px />
</template>

