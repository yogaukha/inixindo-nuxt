<template>
        <div class="relative flex flex-col justify-center h-screen overflow-hidden">
            <div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                <h1 class="text-3xl font-semibold text-center text-purple-700">Login Kursus Inixindo</h1>
                <form class="space-y-4">
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Email</span>
                        </label>
                        <input v-model.lazy="form.email" type="text" placeholder="Email Address" class="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Password</span>
                        </label>
                        <input v-model.lazy="form.password" type="password" placeholder="Enter Password" class="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <button class="btn btn-primary" @click="handleLogin()">Login</button>
                    </div>
                </form>
            </div>
        </div>
</template>

<script setup lang="ts">
    import { useAuthStore } from '~/stores/auth'

    definePageMeta({
        layout: 'login'
    })

    const cookieLoggedIn = useCookie('logged_i')
    const cookieUsername = useCookie('username')
    const cookieRole = useCookie('role')
    const router = useRouter()
    const storeAuth = useAuthStore();
    const { form } = storeToRefs(storeAuth);

    if (cookieLoggedIn.value == "true") {
        if (cookieRole.value == "admin") {
            router.push("/dashboard")
        } else {
            router.push("/participant")
        }
    }

    const handleLogin = async () => {
        cookieLoggedIn.value = "true"
        cookieUsername.value = "admin@locahost.com"
        cookieRole.value = "admin"
    }
</script>