<template>
    <div class="drawer lg:drawer-open bg-[#F3F4EE]">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div
          class="md:sticky top-0 lg:z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm">
          <!-- Navbar -->
          <nav class="navbar w-full bg-secondary">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-2" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                  </path>
                </svg>
              </label>
            </div>
            <div class="flex flex-1 md:gap-1 lg:gap-2">
              <!-- <a class="btn btn-ghost normal-case text-xl">RICE</a> -->
            </div>
            <div class="flex-0">
              <label class="text-md text-white">{{ cookieUsername }}</label>
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-7 rounded-full">
                    <img src="/images/ava-default.png" />
                  </div>
                </label>
                <ul tabindex="0"
                  class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-64 overflow-x-auto">
                  <li><a @click="handleLogout()">Keluar</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <!-- end navbar -->
        </div>
        <div class="max-w-[79vw] px-6 pb-16 xl:pr-2">
          <slot />
        </div>
      </div>
      <Drawer />
    </div>
  </template>
  <script setup lang="ts">
  import Drawer from '@/components/Drawer.vue'
  
  const cookieLoggedIn = useCookie('logged_in')
  const cookieUsername = useCookie('username')
  const cookieRole = useCookie('role')
  const router = useRouter()
  
  const handleLogout = () => {
    cookieLoggedIn.value = null
    cookieUsername.value = null
    cookieRole.value = null

    router.push("/")
  }
  
  </script>
  
  <style>
  .menu li>*:not(ul):not(.menu-title):not(details).active {
    background-color: #fbc707;
    border-color: #fbc707;
    color: black;
  }
  
  :where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):not(.active):hover {
    background-color: #fbc707;
    border-color: #fbc707;
    color: #000000;
  }
  
  .router-link-exact-active {
    color: #000000 !important;
  }
  
  .menu li > *:not(ul):not(.menu-title):not(details).active .icon-nav path {
    fill: black;
  }
  
  .menu li > *:not(ul):not(.menu-title):not(details).active .icon-nav rect {
    fill: black;
  }
  
  .menu li > *:not(ul):not(.menu-title):not(details).active .icon-nav circle {
    stroke: black;
  }
  
  :where(
      .menu
        li:not(.menu-title):not(.disabled)
        > *:not(ul):not(details):not(.menu-title)
    ):not(.active):hover
    .icon-nav
    path {
    fill: black;
  }
  
  :where(
      .menu
        li:not(.menu-title):not(.disabled)
        > *:not(ul):not(details):not(.menu-title)
    ):not(.active):hover
    .icon-nav
    rect {
    fill: black;
  }
  
  :where(
      .menu
        li:not(.menu-title):not(.disabled)
        > *:not(ul):not(details):not(.menu-title)
    ):not(.active):hover
    .icon-nav
    circle {
    stroke: black;
  }
  
  :where(.menu li:not(.menu-title):not(.disabled) > details > summary:not(.menu-title)):not(.active):hover {
    background-color: #fbc707;
    border-color: #fbc707;
    color: #000000;
  }
  
  :where(
      .menu
        li:not(.menu-title):not(.disabled)
        > details
        > summary:not(.menu-title)
    ):not(.active):hover
    path {
    fill: black;
  }
  </style>
  