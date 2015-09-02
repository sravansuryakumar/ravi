sap.ui.jsview("test3.VIEWS.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf VIEWS.App
	*/ 
	getControllerName : function() {
		return "test3.VIEWS.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf VIEWS.App
	*/ 
	createContent : function(oController) {
 		
		this.app = new sap.m.SplitApp('myapp',{
			
			mode :sap.m.SplitAppMode.PopoverMode 
			
		});
		
		var master = new sap.ui.view({
			
		                   id : 'msaterid',
		                   viewName: 'test3.VIEWS.Masterpage',
		                   type:'XML'
		
		                  });
		
		
		master.getController().direct = oController; 
		this.app.addPage(master,true);
		
		var detail = new sap.ui.view({
			
            id : 'detailid',
            viewName: 'test3.VIEWS.details',
            type:'XML'

           });

		detail.getController().direct = oController;

        this.app.addPage(detail);
		
		return this.app;
		
	}

});