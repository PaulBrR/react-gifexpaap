

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=lrzQSU4jF22sTNtfmKao2swlw4np1h58`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => { // esto tambien se puede usar con desestructuración 
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs ;
     
    
}

//======================PETICION A LA API
// const getGifs = async() => {
//     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=lrzQSU4jF22sTNtfmKao2swlw4np1h58`;
//     const resp = await fetch( url );
//     const { data } = await resp.json();

//     const gifs = data.map( img => { // esto tambien se puede usar con desestructuración 
//         return {
//             id: img.id,
//             title: img.title,
//             url: img.images?.downsized_medium.url
//         }
//     })
//     console.log(gifs);
//     setImages( gifs );
     
    
// }