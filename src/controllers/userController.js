exports.create = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain user create information"
    })

 };


exports.read = async (req, res) => { 
    res.status(200).json({
        status:"success",
        data: "contain user read information"
    })
};


exports.delete = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain user delete information"
    })
 };


exports.update = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain user update information"
    })
};