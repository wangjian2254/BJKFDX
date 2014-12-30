Ext.onReady(function(){
	// dateformat yyyy-MM-dd
	df = new Ext.form.DateField({
		id:'datesel',
		format:'Y-m-d',
		width:88
	});
	df.render(document.getElementById("textinput3"));
	
	// dateformat yyyy年MM月dd日
	df2 = new Ext.form.DateField({
		id:'datesel2',
		format:'Y-m-d',
		width:88
	});
	df2.render(document.getElementById("textinput1"));
});
