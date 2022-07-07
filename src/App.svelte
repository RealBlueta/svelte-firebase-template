<script lang="ts">
    import Router from "./Router.svelte";

    import Home from "./pages/home.svelte";
    import Login from "./pages/login.svelte";
    import Signup from "./pages/signup.svelte";
    import Profile from "./pages/profile.svelte";
    import Error from "./pages/error.svelte";
    
    const routes = {
        '/': Home,
        '/login': Login,
        '/signup': Signup,
        '/profile': Profile,
        '*': Error
    };
</script>

<main>
    <Router routes={routes} />
</main>