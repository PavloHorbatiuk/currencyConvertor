import axios from "axios";

const instance = axios.create({
    baseURL: 'https://bank.gov.ua/',
})
export const currencyAPI = {
    getCourseCurrency() {
        return instance.get('/NBUStatService/v1/statdirectory/exchange?json')
    }
}