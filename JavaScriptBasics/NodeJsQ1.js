var fs = require('fs');
var parse = require('xml-parser');
var inspect = require('util').inspect;

// exporting the helper function
module.exports = function parseGivenXMLToJson(Options){
    var filePath=Options.filePath;
    try {
        var xml = fs.readFileSync(filePath, 'utf8');
        var obj = parse(xml);
        console.log(inspect(obj, { colors: true, depth: Infinity }));
        return;
    } catch (error) {
        console.log("file doesn't exists")
        return;
    }
    
}

