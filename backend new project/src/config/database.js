const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://vishvavijayabaskar534:uMVEzcA3ao5N3dGD@cluster0.vfxs3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    .then(() => {
        console.log("mongo db is connected");

    })
    .catch((error) => {
        console.log("mongo db is not connected", error);
    })

    module.exports = mongoose.connection
