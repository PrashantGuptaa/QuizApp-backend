const defaultResponse = (req, res) => {
    try {
        res.status(200).send({ message: 'Responsed' });
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { defaultResponse };