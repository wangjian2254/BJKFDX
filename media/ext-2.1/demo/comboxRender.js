// JavaScript Document
Ext.onReady(function(){
		var textdiv1_store = new Ext.data.SimpleStore({
			fields: ['pz', 'dm'],
			data :[['记','01'],['收','02'],['转','03'],['现收','04'],['现付','05'],['银收','06'],['银付','07'],['付','08']] // from states.js
		});	
	var com1 = new Ext.form.ComboBox({
					id:'pz',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv1_store,
					displayField:'pz',
					valueField:'pz',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'记',
					handleHeight:10,
					width:48
				});
	com1.render(document.getElementById("textdiv1"));
	
	var textdiv2_store = new Ext.data.SimpleStore({
			fields: ['pz', 'dm'],
			data :[['记','01'],['收','02'],['转','03'],['现收','04'],['现付','05'],['银收','06'],['银付','07'],['付','08']] // from states.js
		});	
	var com2 = new Ext.form.ComboBox({
					id:'pz',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv2_store,
					displayField:'pz',
					valueField:'pz',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'记',
					handleHeight:10,
					width:234
				});
	com2.render(document.getElementById("textdiv2"));
	
	var textdiv3_store = new Ext.data.SimpleStore({
			fields: ['pz', 'dm'],
			data :[['记','01'],['收','02'],['转','03'],['现收','04'],['现付','05'],['银收','06'],['银付','07'],['付','08']] // from states.js
		});	
	var com3 = new Ext.form.ComboBox({
					id:'pz',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv3_store,
					displayField:'pz',
					valueField:'pz',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'记',
					handleHeight:10,
					width:274
				});
	com3.render(document.getElementById("textdiv3"));
	
	var textdiv4_store = new Ext.data.SimpleStore({
			fields: ['pz', 'dm'],
			data :[['记','01'],['收','02'],['转','03'],['现收','04'],['现付','05'],['银收','06'],['银付','07'],['付','08']] // from states.js
		});	
	var com4 = new Ext.form.ComboBox({
					id:'pz',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv4_store,
					displayField:'pz',
					valueField:'pz',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'记',
					handleHeight:10,
					width:234
				});
	com4.render(document.getElementById("textdiv4"));
	
	var textdiv5_store = new Ext.data.SimpleStore({
			fields: ['pz', 'dm'],
			data :[['记','01'],['收','02'],['转','03'],['现收','04'],['现付','05'],['银收','06'],['银付','07'],['付','08']] // from states.js
		});	
	var com5 = new Ext.form.ComboBox({
					id:'pz',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv5_store,
					displayField:'pz',
					valueField:'pz',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'记',
					handleHeight:10,
					width:274
				});
	com5.render(document.getElementById("textdiv5"));
	
	var textdiv6_store = new Ext.data.SimpleStore({
			fields: ['pz', 'dm'],
			data :[['记','01'],['收','02'],['转','03'],['现收','04'],['现付','05'],['银收','06'],['银付','07'],['付','08']] // from states.js
		});	
	var com6 = new Ext.form.ComboBox({
					id:'pz',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv6_store,
					displayField:'pz',
					valueField:'pz',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'记',
					handleHeight:10,
					width:234
				});
	com6.render(document.getElementById("textdiv6"));
	
	var textdiv7_store = new Ext.data.SimpleStore({
			fields: ['pz', 'dm'],
			data :[['记','01'],['收','02'],['转','03'],['现收','04'],['现付','05'],['银收','06'],['银付','07'],['付','08']] // from states.js
		});	
	var com7 = new Ext.form.ComboBox({
					id:'pz',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv7_store,
					displayField:'pz',
					valueField:'pz',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'记',
					handleHeight:10,
					width:274
				});
	com7.render(document.getElementById("textdiv7"));
	
	var textdiv8_store = new Ext.data.SimpleStore({
			fields: ['pz', 'dm'],
			data :[['记','01'],['收','02'],['转','03'],['现收','04'],['现付','05'],['银收','06'],['银付','07'],['付','08']] // from states.js
		});	
	var com8 = new Ext.form.ComboBox({
					id:'pz',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv8_store,
					displayField:'pz',
					valueField:'pz',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'记',
					handleHeight:10,
					width:234
				});
	com8.render(document.getElementById("textdiv8"));
	
	var textdiv9_store = new Ext.data.SimpleStore({
			fields: ['pz', 'dm'],
			data :[['记','01'],['收','02'],['转','03'],['现收','04'],['现付','05'],['银收','06'],['银付','07'],['付','08']] // from states.js
		});	
	var com9 = new Ext.form.ComboBox({
					id:'pz',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv9_store,
					displayField:'pz',
					valueField:'pz',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'记',
					handleHeight:10,
					width:274
				});
	com9.render(document.getElementById("textdiv9"));
	});