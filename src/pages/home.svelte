<script lang="ts">
    import { routeTo } from "../lib/router";
</script>

<main>
    <h3>Home Page</h3>
    <button on:click={() => routeTo('login')}>Go to Login Page</button>  
    <br>
    <button on:click={() => routeTo('signup')}>Go to Signup Page</button>  
    <br>
    <button on:click={() => routeTo('profile')}>Go to Profile Page</button>  
</main>  

<style>
</style>
