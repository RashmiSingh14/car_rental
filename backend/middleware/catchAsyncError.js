module.exports = (code) => (req, res, next) => {
    Promise.resolve(code(req, res, next)).catch(next);
}