export function routeTo(page: string) {
    location.hash = page == '/' ? '/' : '/' + page;
}