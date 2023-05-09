import dataSet from './DataSet';

const dataObject = {id:1,value:"value"}
for(let i =0;i<100;i++){
    dataSet.push({id:dataObject.id+i,value:dataObject.value+i});   
}

console.log(dataSet);