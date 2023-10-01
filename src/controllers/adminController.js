exports.create = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain admin create information"
    })

 };


exports.read = async (req, res) => { 
    res.status(200).json({
        status:"success",
        data: "contain admin read information"
    })
};


exports.delete = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain admin delete information"
    })
 };


exports.update = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain admin update information"
    })
};