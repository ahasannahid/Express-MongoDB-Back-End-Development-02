exports.create = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain subAdmin create information"
    })

 };


exports.read = async (req, res) => { 
    res.status(200).json({
        status:"success",
        data: "contain subAdmin read information"
    })
};


exports.delete = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain subAdmin delete information"
    })
 };


exports.update = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain subAdmin update information"
    })
};