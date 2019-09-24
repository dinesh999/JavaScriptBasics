// Code goes here

// Code goes here  
class MetadataParser {
  _version = 0.0;
  _channel = "";
  _keyField = "";
  constructor(version, channel, keyField) {
    this._channel = channel;
    this._keyField = keyField;
    this._version = version;
  }
  
  setKeyField(keyField){
    _keyField=keyField;
  }
  setChannel(channel){
    _channel=channel;
  }
  setVersion(version){
    _version=version;
  }
  
  getKeyField(keyField){
    return _keyField;
  }
  getChannel(channel){
    return _channel;
  }
  getVersion(version){
    return _version;
  }

  getKeyFields(inputArray) {
    let keyFieldsArray=[];
    inputArray.forEach(function(element) {
      keyFieldsArray.push(element._keyField);
    });
    return keyFieldsArray;
  }
  
  groupObjectsBy(inputArray){
    var keyFieldsMap=new Map();
    inputArray.forEach(function(element) {
      var elementArray=[];
      elementArray.push(element);
      if(keyFieldsMap.has(element._keyField)){
        var existingElementsArray=[];
        existingElementsArray=keyFieldsMap.get(element._keyField);
        keyFieldsMap.set(element._keyField,existingElementsArray.concat(elementArray));
      }else{
        keyFieldsMap.set(element._keyField,elementArray);
      }
      
    });
    return keyFieldsMap;
  }
}

let md1 = new MetadataParser(1, "ch1", "A");
let md2 = new MetadataParser(2, "ch2", "A");
let md3 = new MetadataParser(3, "ch3", "B");
let md4 = new MetadataParser(4, "ch4", "C");
let md5 = new MetadataParser(5, "ch5", "C");

let md = new MetadataParser();

let inputArray = [];
inputArray.push(md1);
inputArray.push(md2);
inputArray.push(md3);
inputArray.push(md4);
inputArray.push(md5);

keyFields=md.getKeyFields(inputArray);
console.log(keyFields)

keyFieldsMap=md.groupObjectsBy(inputArray);
console.log(keyFieldsMap);

// console.log(metaDataParser);