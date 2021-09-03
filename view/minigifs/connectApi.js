export const loadApiData = async () => {
    let apiKey = 'yourApiKey'
    try {
        let response = await fetch(`https://rebrickable.com/api/v3/lego/minifigs/?key=${apiKey}`)
        let json = await response.json()

        let { results } = json
        let data = results.map((item) => ({
            setNum: item.set_num,
            name: item.name,
            numPart: item.num_parts,
            img: item.set_img_url,
            url: item.set_url
        }))
        return await data

    } catch (error) {
        console.error(error)
    }
}


