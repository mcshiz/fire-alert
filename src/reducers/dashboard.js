export default (state = {
    mapOptions: {
        lat: 39.707187, //good view of the west
        lon: -118.696289, //good view of the west
        zoom: 5, //good view of the west
        scrollEnabled: false,
    },
}, payload) =>  {
    switch (payload.type) {
        default:
            return state
    }
}