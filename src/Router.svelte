<script lang="ts">
    import Home from "./pages/home.svelte";
    import Login from "./pages/login.svelte";
    import Signup from "./pages/signup.svelte";
    import Profile from "./pages/profile.svelte";
    import Error from "./pages/error.svelte";

    if (location.hash.length == 0) location.hash = '/';
    let route = location.hash;

    window.onhashchange = () => {
        route = location.hash;
    }
</script>

{#if route == '#/' } 
    <Home />
{:else if route == '#/login'}
    <Login />
{:else if route == '#/signup'}
    <Signup />
{:else if route == '#/profile'}
    <Profile />
{:else}
    <Error />
{/if}