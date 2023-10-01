exports.create = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain post create information"
    })

 };


exports.read = async (req, res) => { 
    res.status(200).json({
        status:"success",
        data: "contain post read information"
    })
};


exports.delete = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain post delete information"
    })
 };


exports.update = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain post update information"
    })
};