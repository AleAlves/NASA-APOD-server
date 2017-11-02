module.exports = function (app) {

    var schema = require('mongoose').Schema;

    var device = schema({
        imei: { type: String, riquered: true },
        deviceName: String,
        screenSize: String,
        manufacturer: String,
        rateValue: { type: Number, required: true }
    });

    var apod = schema({
        copyright: { type: String, required: false },
        date: { type: String, unique: true, riquered: true },
        explanation: { type: String, required: true },
        hdurl: { type: String, required: true },
        media_type: { type: String, required: true },
        service_version: String,
        title: { type: String, required: true },
        url: { type: String, required: true },
        averageRate: { type: Number, required: false },
        rates: Number,
        device: [device]
    });

    return db.model('apod', apod);
}



// "copyright": "Fabian Neyer",
// "date": "2017-10-21",
// "explanation": "Beverly Lynds Dark Nebula 183 lies a mere 325 light-years away, drifting high above the plane of our Milky Way Galaxy. Obscuring the starlight behind it when viewed at optical wavelengths, the dark, dusty molecular cloud itself seems starless. But far infrared explorations reveal dense clumps within, likely stars in the early stages of formation as enhanced regions of the cloud undergo gravitational collapse. One of the closest molecular clouds, it is seen toward the constellation Serpens Caput. This sharp cosmic cloud portrait spans about half a degree on the sky. That's about 3 light-years at the estimated distance of Lynds Dark Nebula 183.",
// "hdurl": "https://apod.nasa.gov/apod/image/1710/ldn183neyer_l1.jpg",
// "media_type": "image",
// "service_version": "v1",
// "title": "Lynds Dark Nebula 183",
// "url": "https://apod.nasa.gov/apod/image/1710/ldn183neyer_1024.jpg"