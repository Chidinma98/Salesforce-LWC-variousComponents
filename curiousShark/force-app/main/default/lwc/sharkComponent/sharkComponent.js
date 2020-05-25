import { LightningElement, api, wire, track } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'
// import CLIENT_FIELD from '@salesforce/schema/Expense__c.Client__c'
const fields = [
    'Expense__c.Client__c'
];
// import { getRecord } from 'lightning/uiRecordApi';
// @wire(getRecord, { recordId: string, fields: string|string[], 
//optionalFields?: string|string[])
// propertyOrFunction
export default class SharkComponent extends LightningElement {
person;
@api recordId;
@wire(getRecord,{recordId:'$recordId', fields})
client ({error, data}){
if(error){

} else if (data){
    this.person = data.fields.Client__c.value;
}
}
get personName(){   
    return (this.person) ? `${this.person} is 
    the person you should contact:contact information` 
    : `client is still working `;
    // return `${this.person}`
}


}
