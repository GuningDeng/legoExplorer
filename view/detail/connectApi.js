export const loadApiDataParts = async(setNum) => {
    let apiKey = 'yourApiKey'
    try {
        let response = await fetch(`https://rebrickable.com/api/v3/lego/minifigs/${setNum}/parts/?key=${apiKey}`);
        let json = await response.json();

        let { results } = json;
        let data = results.map((item) => ({
            partNum: item.part.part_num,
            partName: item.part.name,
            partImg: item.part.part_img_url,
            partUrl: item.part.part_url
        }))
        return await data

    } catch (error) {
        console.error(error)
    }    
}