import sanityClient  from '@sanity/client';

export const client = sanityClient({
    projectId: "u6rijwfp",
    dataset: "production",
    apiVersion: "2021-03-25",
    token: "skPKOXORw5lFl92FiEiwuaqV0ivToef9DzpD72fQKJInwxvy5PdX1sqelluxwC2AwSUl0it8zgwuB5bZcbgL7GdfwX5DBC2vxtJQJ559EakCC5iJkvKtTnaNLpQ3JQafrfBJCuO8jXHc2KQpiWIZLSkkj74wIONrTAixBQaHB5eFCLrPsfC8",
    useCdn: false
})