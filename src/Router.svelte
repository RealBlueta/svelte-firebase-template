<script lang="ts">
    if (location.hash.length == 0) location.hash = '/';

    interface Routes {
        [route: string]: any;
    }

    let current_route = location.hash.substring(1);
    window.onhashchange = () => {
        current_route = location.hash.substring(1);
    }

    export let routes: Routes = {};
</script>

{#each Object.entries(routes) as [_route, clazz]}
    {#if current_route == _route}
        <svelte:component this={clazz} />
    {/if}
{/each}

{#if routes[current_route] == null}
    <svelte:component this={routes['*']} />
{/if}