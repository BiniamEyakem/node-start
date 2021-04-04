
const stringHelper = require('./helpers/stringHelper');
 

const yargs = require('yargs')
const util = require('util')
yargs.command({
    command: 'count',
    describe: 'counts characters in a given string',
    builder: {
        input: {
            describe: 'the input to count characters from',
            demandOption: true,
            type: 'string'
        },
        withoutWhitespace: {
            describe: 'omit white space, optional argument',
            demandOption: false,
            type: 'boolean'
        }
    },    
    handler: (argv) => {
        console.log(util.format('The length of %s is %d, %s', 
            argv.input, 
            stringHelper.getLengthOfString(argv.input, argv.withoutWhitespace),
            argv.withoutWhitespace?' omitted white spaces':'including white spaces (default)'))
    }
})
yargs.parse();

/* usage 
    node .\app.js count --input='you are learning'
    node .\app.js count --input='you are learning' --withoutWhitespace=true
*/

