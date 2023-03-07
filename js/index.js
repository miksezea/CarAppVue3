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
            addData: { model: "", vendor: "", price: 0 },
            addMessage: "",
            updateData: { id: 0, model: "", vendor: "", price: 0 },
            updateMessage: ""
        }
    },
    methods: {
        getAllCars() {
            this.helperGetAndShow(baseUrl)
        },
        getByVendor() {
            const url = baseUrl + "?vendor=" + vendor
            this.helperGetAndShow(url)
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

        },
        async addCar() {

        },
        async updateCar() {

        }
    }
})