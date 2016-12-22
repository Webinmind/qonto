import DS from 'ember-data';
// import attachement from "attachement";

export default DS.Model.extend({
	"created_at": 				DS.attr('date', {defaultValue:function(){return new Date()}}),
  "counterparty_name": 	DS.attr('string'),
  "debit": 							DS.attr('boolean'),
  "credit": 						DS.attr('boolean'),
  "amount": 						DS.attr('number'),
  "currency": 					DS.attr('string'),
  "operation_type": 		DS.attr('string'),
  // "attachements": 			DS.hasMany('attachement')
});
