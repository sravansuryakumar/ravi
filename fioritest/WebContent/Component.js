jQuery.sap.declare("test3.Component");

sap.ui.core.UIComponent.extend("test3.Component",{

	
	createContent:function(){
		
		//this.setDisplayBlock(true);
		var view = sap.ui.view(
				         {
				        	 id:"root", 
				        	 viewName:"test3.VIEWS.App", 
				        	 type:sap.ui.core.mvc.ViewType.JS,
				        	 data :{component : this}});
		
		
		var omodel = new sap.ui.model.json.JSONModel();
		$.ajax({
		url:'http://services.odata.org/V4/Northwind/Northwind.svc/Customers',
		type:'GET',
		success:function(osucc){
		
			omodel.setData({cust:osucc.value});
		}
		
		});
		
		
		
		view.setModel(omodel);
		
		var i18n = new sap.ui.model.resource.ResourceModel({bundleUrl:"i18n/messagebundle.properties"});
		view.setModel(i18n,"srinivas");
		
		var mydevice = new sap.ui.model.json.JSONModel({
		
			device:jQuery.device.is.phone
			
		});
		
		view.setModel(mydevice,"device");
		
		return view;
		
	}
	
	
	
});











