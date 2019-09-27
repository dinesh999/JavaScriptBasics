class MetadataParser {
  constructor(version, channel, keyField) {
    this._channel = channel;
    this._keyField = keyField;
    this._version = version;
  }
  
  setKeyField(keyField){
    this._keyField=keyField;
  }
  setChannel(channel){
    this._channel=channel;
  }
  setVersion(version){
    this._version=version;
  }
  
  getKeyField(keyField){
    return this._keyField;
  }
  getChannel(channel){
    return this._channel;
  }
  getVersion(version){
    return this._version;
  }

  getKeyFields(inputArray) {
    let keyFieldsArray = inputArray.map(element => element.getKeyField());
    return keyFieldsArray;
  }

  groupObjectsBy(inputArray, key){
    let keyFieldsMap = {};
    inputArray.forEach(element => {
      if(keyFieldsMap[element[key]]){
        keyFieldsMap[element[key]].push(element);
      }else{
        keyFieldsMap[element[key]] = [element];
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

keyFieldsMap=md.groupObjectsBy(inputArray, '_channel');
console.log(keyFieldsMap);

// console.log(metaDataParser);