import axios from "axios"

export const getDrivers = () => {
    return async (dispatch) => {
        axios.get('http://ergast.com/api/f1/drivers.json')
            .then(res => {
                dispatch({
                    type: 'GET_DATA',
                    payload: res.data.MRData.DriverTable.Drivers
                })
            })
    }
}