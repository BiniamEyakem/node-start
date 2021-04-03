
module.exports = {
    getLengthOfString: (input, withoutWhitespace) => withoutWhitespace ? input.replace(/\s/g, '').length : input.length,    
}