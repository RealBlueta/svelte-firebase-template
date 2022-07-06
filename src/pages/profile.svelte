<script lang="ts">
    import { auth } from "../lib/firebase";
    import { routeTo } from "../lib/router";

    const user = auth.currentUser;
    if (!user) routeTo('login');
</script>

<main>
    <h3>Profile Page</h3>
</main>  

<style> 
</style>
