sap.ui.controller("test3.VIEWS.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf VIEWS.App
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf VIEWS.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf VIEWS.App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf VIEWS.App
*/
//	onExit: function() {
//
//	}
	
	to:function(pageid,context){
		
		var app = this.getView().app;
		app.to(pageid);
		
		var det = app.getPage("detailid");
		//det.setModel(context);
		det.setBindingContext(context);
		
	},
	
	back:function(pageid){
		
		var app = this.getView().app;
		app.back(pageid);
		
	},

	

});