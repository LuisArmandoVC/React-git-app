export const getGifts = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iQdsZR8OK9aexMp01TgW0BexDd0ha9AF&q=${ category }&limit=20`;
    const resp = await fetch(url)
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;
}