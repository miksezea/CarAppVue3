const baseUrl = "https://anbo-restcarswithmanager.azurewebsites.net/api/cars"

Vue.createApp({
    data() {
        return {
            cars: [],
            vendorToGetBy: "",
            idToGetBy: -1,
            singleCar: null,
            deleteId: 0,
            deleteMessage: "",
        }
    },
    methods: {
        getAllCars() {

        },
        getByVendor() {

        },
        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.cars = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async getById(id) {

        },
        async deleteCar(deleteId) {

        }

    }
})