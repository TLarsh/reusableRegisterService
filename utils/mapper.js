const mapFunction = async(func, ...args) => {
    try{
        const result = await func(...args);
        return{
            message: 'Operation Successful',
            status: true,
            data: result,
            errors: null
        };
    } catch(error) {
        return{
            message: 'Operation Failed',
            status: false,
            data: null,
            errors: error.message || error
        };
    }
};

module.exports = { mapFunction }