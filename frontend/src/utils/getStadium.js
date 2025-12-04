import stadions from "../data/stadions.json"

const GetStadium = (ID) => {
    const stadion = stadions.filter((stad) => stad.id === ID)
    return stadion
}

export default GetStadium