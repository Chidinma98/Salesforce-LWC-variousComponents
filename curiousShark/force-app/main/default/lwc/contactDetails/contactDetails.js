import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CONTACT_FIELD from '@salesforce/schema/Expense__c.Agent__c';
const agentFields = [CONTACT_FIELD]


// Why do you need lightning-record-form when you are using the @wire adapter
export default class ContactDetails extends LightningElement {
@api recordId;

@wire(getRecord, {recordId: '$recordId', fields: agentFields})
agent;

get agentId() {

    return getFieldValue(this.agent.data, CONTACT_FIELD)
}






}