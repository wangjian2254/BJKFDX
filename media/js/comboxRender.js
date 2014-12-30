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
					value:'',
					handleHeight:10,
					width:48
				});
	com1.render(document.getElementById("textdiv1"));
	
	var textdiv2_store = new Ext.data.SimpleStore({
			fields: ['pz2', 'dm'],
			data :[['销售商品','01'],['取现，支票','02'],['支付广告费','03'],['支付办公费','04'],['支付交通费','05'],['购入固定资产','06'],['购入商品','07'],['购入材料','08'],['计提并发放工资','09']] // from states.js
		});	
	var com2 = new Ext.form.ComboBox({
					id:'pz2',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv2_store,
					displayField:'pz2',
					valueField:'pz2',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'',
					handleHeight:10,
					width:234
				});
	com2.render(document.getElementById("textdiv2"));
	
	var textdiv3_store = new Ext.data.SimpleStore({
			fields: ['pz3', 'dm'],
			data :[['1002:银行存款','01'],['1002001:工行','02'],['1002002:邮政银行','03'],['1122:应收账款','04'],['1122001:天津舒优美有限公司','05'],['1122002:天津易广通科技有限公司','06'],['1122003:天津速霸电子有限公司','07'],
			['2202:应收账款','08'],['2202001:天津舒优美有限公司','09'],['2202002:天津易广通科技有限公司','10'],['2202003:天津速霸电子有限公司','11'],['2221:应交税费','12'],['2221001:应交增值税','13'],['2221001001:进项税额','14'],['2221001002:销项税额','15'],
			['2221001003:出口税额','16'],['2221001004:进项税额出','17'],['2221001005:出口抵减内销产品应纳税额','18'],['2221001006:已交税额','19'],
			['2221001007:减免税额','20'],['5001:主营业务收入','21']] // from states.js
		});	
	var com3 = new Ext.form.ComboBox({
					id:'pz3',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv3_store,
					displayField:'pz3',
					valueField:'pz3',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'',
					handleHeight:10,
					width:274
				});
	com3.render(document.getElementById("textdiv3"));
	
	var textdiv4_store = new Ext.data.SimpleStore({
			fields: ['pz4', 'dm'],
			data :[['销售商品','01'],['取现，支票','02'],['支付广告费','03'],['支付办公费','04'],['支付交通费','05'],['购入固定资产','06'],['购入商品','07'],['购入材料','08'],['计提并发放工资','09']] // from states.js
		});	
	var com4 = new Ext.form.ComboBox({
					id:'pz4',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv4_store,
					displayField:'pz4',
					valueField:'pz4',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'',
					handleHeight:10,
					width:234
				});
	com4.render(document.getElementById("textdiv4"));
	
	var textdiv5_store = new Ext.data.SimpleStore({
			fields: ['pz5', 'dm'],
			data :[['1002:银行存款','01'],['1002001:工行','02'],['1002002:邮政银行','03'],['1122:应收账款','04'],['1122001:天津舒优美有限公司','05'],['1122002:天津易广通科技有限公司','06'],['1122003:天津速霸电子有限公司','07'],
			['2202:应收账款','08'],['2202001:天津舒优美有限公司','09'],['2202002:天津易广通科技有限公司','10'],['2202003:天津速霸电子有限公司','11'],['2221:应交税费','12'],['2221001:应交增值税','13'],['2221001001:进项税额','14'],['2221001002:销项税额','15'],
			['2221001003:出口税额','16'],['2221001004:进项税额出','17'],['2221001005:出口抵减内销产品应纳税额','18'],['2221001006:已交税额','19'],
			['2221001007:减免税额','20'],['5001:主营业务收入','21']] // from states.js
		});	
	var com5 = new Ext.form.ComboBox({
					id:'pz5',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv5_store,
					displayField:'pz5',
					valueField:'pz5',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'',
					handleHeight:10,
					width:274
				});
	com5.render(document.getElementById("textdiv5"));
	
	var textdiv6_store = new Ext.data.SimpleStore({
			fields: ['pz6', 'dm'],
			data :[['销售商品','01'],['取现，支票','02'],['支付广告费','03'],['支付办公费','04'],['支付交通费','05'],['购入固定资产','06'],['购入商品','07'],['购入材料','08'],['计提并发放工资','09']] // from states.js
		});	
	var com6 = new Ext.form.ComboBox({
					id:'pz6',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv6_store,
					displayField:'pz6',
					valueField:'pz6',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'',
					handleHeight:10,
					width:234
				});
	com6.render(document.getElementById("textdiv6"));
	
	var textdiv7_store = new Ext.data.SimpleStore({
			fields: ['pz7', 'dm'],
			data :[['1002:银行存款','01'],['1002001:工行','02'],['1002002:邮政银行','03'],['1122:应收账款','04'],['1122001:天津舒优美有限公司','05'],['1122002:天津易广通科技有限公司','06'],['1122003:天津速霸电子有限公司','07'],
			['2202:应收账款','08'],['2202001:天津舒优美有限公司','09'],['2202002:天津易广通科技有限公司','10'],['2202003:天津速霸电子有限公司','11'],['2221:应交税费','12'],['2221001:应交增值税','13'],['2221001001:进项税额','14'],['2221001002:销项税额','15'],
			['2221001003:出口税额','16'],['2221001004:进项税额出','17'],['2221001005:出口抵减内销产品应纳税额','18'],['2221001006:已交税额','19'],
			['2221001007:减免税额','20'],['5001:主营业务收入','21']] // from states.js
		});	
	var com7 = new Ext.form.ComboBox({
					id:'pz7',
					fieldLabel:'凭证代码',
					triggerAction:'all',
					store:textdiv7_store,
					displayField:'pz7',
					valueField:'pz7',
					mode:'local',
					forceSelection:true,
					resizable:true,
					typeAhead:true,
					value:'',
					handleHeight:10,
					width:274
				});
	com7.render(document.getElementById("textdiv7"));
	});