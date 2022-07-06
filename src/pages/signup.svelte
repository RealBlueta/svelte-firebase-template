<script lang="ts">
    import { auth } from "../lib/firebase";
    import { routeTo } from "../lib/router";
    
    auth.onAuthStateChanged(function(user) {
        if (user) routeTo('profile');
    });
</script>

<main>
    <h3>Signup Page</h3>
</main>  

<style>
</style>
