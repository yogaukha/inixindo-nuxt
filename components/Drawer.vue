<template>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay"></label>
		<div class="flex flex-col bg-base-100 h-screen">
			<header class="text-white text-center">
				<div class="navbar bg-secondary sticky top-0 lg:z-30">
					<div class="px-2 mx-2">
						<!-- <img src="/images/navbar-rice.png" style="height: 30px" /> -->
					</div>
				</div>
			</header>
			<main class="flex-1 overflow-y-auto mb-[1.9rem] mt-1">
				<!-- <ul v-if="menuItems.length > 0" class="menu w-72">
					<template v-for="menuItem in menuItems" :key="menuItem.name">
						<li class="text-[#BBBCB7]">
							<NuxtLink :to="menuItem.path" active-class="active">
								<Icon :name="menuItem.icon" color="black" />
								{{ menuItem.name }}
							</NuxtLink>
						</li>
					</template>
				</ul> -->
				<ul class="menu w-72">
					<template v-if="cookieRole == 'admin'">
						<li class="text-[#BBBCB7]">
							<NuxtLink :to="'/dashboard'" active-class="active">
								<Icon :name="'dashboard'" color="black" />
								Dashboard
							</NuxtLink>
						</li>
						<li class="text-[#BBBCB7]">
							<NuxtLink :to="'/courses'" active-class="active">
								<Icon :name="'courses'" color="black" />
								Manajemen Kursus
							</NuxtLink>
						</li>
					</template>
					<template v-else>
						<li class="text-[#BBBCB7]">
							<NuxtLink :to="'/participants'" active-class="active">
								<Icon :name="'participants'" color="black" />
								Kursus
							</NuxtLink>
						</li>
					</template>
				</ul>
			</main>
			<footer class="text-center ml-3 ">
				<div class="bg-base-100 border-t border-yellow-400 mt-2 pt-2 fixed bottom-1 w-[90%]">
					<p class="text-center text-gray-600 text-xs">
						&copy; 2024 yogaukha.
					</p>
				</div>
			</footer>
		</div>
	</div>
</template>

<script setup lang="ts">
  const cookieRole = useCookie('role')
</script>
<style>
	.menu {
		font-size: 0.95rem;
	}
</style>
