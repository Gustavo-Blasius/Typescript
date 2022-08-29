"use strict";
// Permite criar estruturas que serão adaptáveis a vários tipos de dados
// Ajuda a reaproveitar melhor o código e deixa-lo mais flexível
function withInterface() {
    function testInterface(data) {
        console.log('data testInterface', data);
        return data;
    }
    return { testInterface };
}
function repository() {
    let data;
    function getData() {
        return data;
    }
    function setData(newData) {
        data = newData;
    }
    return { getData, setData };
}
const interface01 = withInterface();
interface01.testInterface({ id: 10, name: 'gustavo', value: 10000 });
const repo1 = repository(); // dessa forma, definimos a tipagem da função no momento em que chamamos ela
repo1.setData(100);
