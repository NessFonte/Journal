<template>
    <nav class="navbar bg-primary">
        <a href="navbar-brand">
            <img src="@/assets/logo.png" alt="Vue logo" class="d-inline-block align-text-top mx" height="24">
            {{ username }}
        </a>

        <div class="d-flex">
            <button class="btn btn-outline-info mx-2" @click="onLogout">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const {username, logout} = useAuth()   
        
        return {
            username,
            
            onLogout: () => {
                router.push({name: 'login'})
                logout()
            }
        }
    },
}
</script>


<style scoped>
nav a {
    text-decoration: none;
    height: 24px;
    color: white;
    margin-left: 5px;
}
</style>