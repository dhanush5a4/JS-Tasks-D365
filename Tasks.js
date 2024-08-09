function setName(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	console.log("inside fun()");
	var first_name = formContext.getAttribute("cr837_firstname").getValue();
	var last_name = formContext.getAttribute("cr837_lastname").getValue();
	formContext.getAttribute("cr837_fullname").setValue(first_name + " " + last_name);
}

function defaultValue(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	formContext.getAttribute("it_defaultvalue").setValue("Setted Default Value");
}

function setTrueFalse(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	var status = formContext.getAttribute("statuscode").getText();
	if (status === "Active")
	{
		formContext.getAttribute("it_settruefalse").setValue(true);
	}
	else if (status === "Inactive")
	{
		formContext.getAttribute("it_settruefalse").setValue(false);
	}
}

function aletonLoad(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	var content = formContext.getAttribute("it_email").getValue();
	if (content)
	{
		alert("value is" + content);
	}
	else
	{
		alert("provide some values");
	}
}

function alertonSave(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	var content = formContext.getAttribute("it_coursename").getValue();
	if (content)
	{
		alert("value is" + content);
	}
	else
	{
		alert("provide some values");
	}
}

function alertonoptionSet(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	var field = formContext.getAttribute("it_settruefalse").getValue();
	if (field)
	{
		alert("field value is" + field);
	}
	else
	{
		alert("field value is" + field);
	}
}

function setFocus(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	formContext.getControl("it_settruefalse").setFocus();
}

function newTabSaveLockUnlock(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	var field = formContext.getAttribute("it_accountname").getValue();
	if (field)
	{
		formContext.getControl("it_accountaddress").setDisabled(true);
	}
	else
	{
		formContext.getControl("it_accountaddress").setDisabled(false);
	}
}
/*
function hideShowTab(executionContext) {
    var formContext = executionContext.getFormContext();

    // Get the tab
    var tab = formContext.ui.tabs.get("tab_2");

    // Check if the tab is found
    if (tab) {
        // Show the tab
        //tab.setVisible(true);

        // Or hide the tab
         tab.setVisible(false);
    }
}
*/
function hideShowsection(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	// Get the tab
	var tab = formContext.ui.tabs.get("tab_2");
	var field = formContext.getAttribute("it_accountname").getValue();
	// Get the section within the tab
	var section = tab.sections.get("tab_2_section_3");
	// Check if the section is found
	if (field) //Conditional check
	{
		// Show the section
		//section.setVisible(true);
		// Or hide the section
		section.setVisible(false);
	}
	else
	{
		section.setVisible(true);
	}
}


function showErrormsg(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	var content = formContext.getAttribute("it_showerrormessage").getValue();
	if (!content)
	{
		formContext.getControl("it_showerrormessage").setNotification("error field must be filled"); // Display error message
	}
}

function filterSubCategories(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	var lap = formContext.getAttribute("it_subcategorysa").getOption(0);
	var smart = formContext.getAttribute("it_subcategorysa").getOption(2);
	var wc = formContext.getAttribute("it_subcategorysa").getOption(3);
	var bed = formContext.getAttribute("it_subcategorysa").getOption(4);
	var shirt = formContext.getAttribute("it_subcategorysa").getOption(5);
	var jean = formContext.getAttribute("it_subcategorysa").getOption(6);
	//removing all values by default
	formContext.getControl("it_subcategorysa").removeOption(0)
	formContext.getControl("it_subcategorysa").removeOption(2)
	formContext.getControl("it_subcategorysa").removeOption(3)
	formContext.getControl("it_subcategorysa").removeOption(4)
	formContext.getControl("it_subcategorysa").removeOption(5)
	formContext.getControl("it_subcategorysa").removeOption(6)
	var category = formContext.getAttribute("it_category").getValue();
	if (category == 0)
	{
		formContext.getControl("it_subcategorysa").addOption(lap);
		formContext.getControl("it_subcategorysa").addOption(smart);
	}
	else if (category == 1)
	{
		formContext.getControl("it_subcategorysa").addOption(wc);
		formContext.getControl("it_subcategorysa").addOption(bed);
	}
	else if (category == 2)
	{
		formContext.getControl("it_subcategorysa").addOption(shirt);
		formContext.getControl("it_subcategorysa").addOption(jean);
	}
	//Set required fields based on sub-category values
	var selectedSubCategories = formContext.getAttribute("it_subcategorysa").getValue();
	// Resetting the required level for all fields first
	formContext.getAttribute("it_field1").setRequiredLevel("none");
	formContext.getAttribute("it_field2").setRequiredLevel("none");
	formContext.getAttribute("it_field3").setRequiredLevel("none");
	if (selectedSubCategories)
	{
		console.log(selectedSubCategories);
		selectedSubCategories.forEach(function (option)
		{
			if (option == lap.value || option == smart.value)
			{
				formContext.getAttribute("it_field1").setRequiredLevel("required");
				formContext.getControl("it_field1").setVisible(true);
			}
			if (option == wc.value || option == bed.value)
			{
				formContext.getAttribute("it_field2").setRequiredLevel("required");
				formContext.getControl("it_field2").setVisible(true);
			}
			if (option == shirt.value || option == jean.value)
			{
				formContext.getAttribute("it_field3").setRequiredLevel("required");
				formContext.getControl("it_field3").setVisible(true);
			}
		});
	}
	else
	{
		// Hide and set required level to none if no sub-category is selected
		formContext.getControl("it_field1").setVisible(false);
		formContext.getControl("it_field2").setVisible(false);
		formContext.getControl("it_field3").setVisible(false);
	}
}

function movetoNextBpfStage(executionContext)
{
	debugger;
	// Get the form context from the execution context
	var formContext = executionContext.getFormContext();
	var qual = formContext.getAttribute("it_settruefalse").getValue();
	if (qual)
	{
		// Move to the next stage in the Business Process Flow
		formContext.data.process.moveNext();
	}
	else
	{
		// Move to the previous stage in the Business Process Flow
		alert('provide some values');
	}
}
//related record retrieve and set in fields.

function setTaskNameOnProject(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	// Get the lookup value (id) of the related entity (Task)
	var taskLookup = formContext.getAttribute("it_relatedtasks").getValue();
	if (taskLookup != null)
	{
		var taskId = taskLookup[0].id.replace("{", "").replace("}", "");
		// Retrieve the Task record
		//it_task is Task Ent -logical name & it_name is Task ent ->task name field name 
		Xrm.WebApi.retrieveRecord("it_task", taskId, "?$select=it_name,it_taskdescription,it_taskdate").then(

		function success(result)
		{
			var taskName = result.it_name;
			var taskDescription = result.it_taskdescription;
			var taskDueDate = result.it_taskdate;
			// Set the retrieved value to the field on the Project entity
			formContext.getAttribute("it_taskname").setValue(taskName);
			formContext.getAttribute("it_taskdescription").setValue(taskDescription);
			if (taskDueDate)
			{
				var dueDate = new Date(taskDueDate);
				formContext.getAttribute("it_taskduedate").setValue(dueDate);
			}
		},

		function (error)
		{
			console.log(error.message);
		});
	}
}
//12 th task 
/*function getAndSetLookupValue(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	// Get the lookup value from the 'it_task' field
	var taskLookup = formContext.getAttribute("it_relatedtasks").getValue();
	if (taskLookup != null && taskLookup.length > 0)
	{
		var taskId = taskLookup[0].id;
		var taskName = taskLookup[0].name;
		var taskEntityType = taskLookup[0].entityType;
		// Create the lookup value object to set on another field
		var lookupValue = [
		{
			id: taskId,
			name: taskName,
			entityType: "it_project" // entity name
			}];
		// Set the lookup value to the 'it_relatedtask' field
		formContext.getAttribute("it_tasknamelookup").setValue(lookupValue);
	}
}
*/
//Lookup filter based on ooption set

function filterParentProjectLookup(executionContext) {
debugger;
    // Get the form context
    var formContext = executionContext.getFormContext();

    // Get the value of the option set field 'task type'
    var taskType = formContext.getAttribute("it_tasktype").getValue();

    // Define the FetchXML filter based on task type
    var fetchXML = "";
    if (taskType == 0) { // Example value for task type 'Individual Projects'
        fetchXML = "<filter><condition attribute='it_tasktype' operator='eq' value='0'/></filter>";
    } else if (taskType == 1) { // Example value for task type 'Group Projects'
        fetchXML = "<filter><condition attribute='it_tasktype' operator='eq' value='1'/></filter>";
    }
    else if (taskType == 2) { // Example value for task type 'Group Projects'
        fetchXML = "<filter><condition attribute='it_tasktype' operator='eq' value='2'/></filter>";
    }
    else if (taskType == null) {
        // Apply an empty filter if task type is not selected
        fetchXML = "<filter><condition attribute='it_tasktype' operator='eq' value='-1'/></filter>";
    } 
    else{
        fetchXML = "<filter><condition attribute='it_tasktype' operator='eq' value='2'/></filter>";
    }
    // Apply the custom filter to the 'parent project' lookup field
    formContext.getControl("it_parentproject").addCustomFilter(fetchXML);
}

function addPreSearchToParentProject(executionContext) {
debugger;
    var formContext = executionContext.getFormContext();
    formContext.getControl("it_parentproject").addPreSearch(function() {
        filterParentProjectLookup(executionContext);
    });
}

//change form on option change
function CallMethodToChangeForm(executionContext)
{
	//Generating Form Context
	var formContext = executionContext.getFormContext();
	//Retrieving Field Data
	var FieldValue = formContext.getAttribute("it_changeform").getText();
	var currentForm = formContext.ui.formSelector.getCurrentItem();
	//alert(FieldValue);
	alert(currentForm.getLabel().toLowerCase())
	ChangeForm(FieldValue, formContext);
}

function ChangeForm(FieldValue, formContext)
{
	//Retrieve Current Form
	var currentForm = formContext.ui.formSelector.getCurrentItem();
	//Retrieve Available Forms
	var availableForms = formContext.ui.formSelector.items.get();
	if (currentForm.getLabel().toLowerCase() != FieldValue.toLowerCase())
	{
		//Looping Through Available Forms
		for (var i in availableForms)
		{
			var form = availableForms[i];
			if (form.getLabel().toLowerCase() == FieldValue.toLowerCase())
			{
				//Programmatically Changing The Form Using "navigate" Client API
				form.navigate();
				return true;
			}
		}
	}
}

//BPF change on form change
function formBasedBPF(executionContext)
{
	debugger;
	var formType = Xrm.Page.ui.getFormType();
	
	formContext = executionContext.getFormContext();
	
	var formName = Xrm.Page.ui.formSelector.getCurrentItem().getLabel();
	
	var activeProcess = Xrm.Page.data.process.getActiveProcess();

	if (activeProcess.getId() != null)
	{
		var activeProcessID = activeProcess.getId();
		if (formType != 1 && formName == "Project main form" && activeProcessID.toUpperCase()!== "2A723D33-EE52-EF11-BFE3-000D3AF2A6F6")
	
		{
			formContext.data.process.setActiveProcess("2A723D33-EE52-EF11-BFE3-000D3AF2A6F6", "success");
		}
		else if (formName == "Information Main Form" && activeProcessID.toUpperCase() != "E2CE1127-634E-EF11-ACCD-000D3AF2A6F6")
		
		{
			formContext.data.process.setActiveProcess("E2CE1127-634E-EF11-ACCD-000D3AF2A6F6", "success");
		}
	}
}


//BPF change on one entity
function MoveBPFStage(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();

    var activeStage = formContext.data.process.getActiveStage();
    var stageId = activeStage.getId();
    var stageName = activeStage.getName();
    var currentBPFInstanceID = formContext.data.process.getInstanceId();
    var email = formContext.getAttribute("emailaddress1").getValue();

    if (email !== undefined && email !== "") {
        // Stage2 ID – bfc9108c-8389-406b-9166-2c3298a2e41f
        if (stageName !== null && stageName === "Qualify") {
            var Stage2 = "3a275c22-fc45-4e89-97fc-41e5ec578743";
            var entity = {};
            entity["activestageid@odata.bind"] = "/processstages(" + Stage2 + ")";
            entity["traversedpath"] = stageId + "," + Stage2;

            var req = new XMLHttpRequest();
            req.open("PATCH", Xrm.Page.context.getClientUrl() + "/api/data/v9.0/leadtoopportunitysalesprocess(" + currentBPFInstanceID + ")", true);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 204) {
                        // Success – No Return Data – Do Something
                        alert("Success");
                    } else {
                        alert("Error");
                        Xrm.Utility.alertDialog(this.statusText);
                    }
                }
            };
            req.send(JSON.stringify(entity));
        }
    }
}

//PArty lookup Filter
function filterPartyLookup(executionContext)
{
	var formContext = executionContext.getFormContext();
	// Get the value of the "Preferred Method of Contact" field
	var preferredMethod = formContext.getAttribute("preferredcontactmethodcode").getValue();
	// Define the FetchXML filter based on preferred method
	var fetchXML = "";
	var entityTypes = [];
	if (preferredMethod == 2)
	{ // If preferred method is 'Mail'
		fetchXML = "<filter type='and'><condition attribute='contactid' operator='not-null' /></filter>";
		entityTypes = ["contact"];
	}
	else if (preferredMethod == 3)
	{ // If preferred method is 'Phone'
		fetchXML = "<filter type='and'><condition attribute='accountid' operator='not-null' /></filter>";
		entityTypes = ["account"];
	}
	else if (preferredMethod == 1 || 4 || 5)
	{
		// If no preferred method is selected, show both
		entityTypes = ["contact", "account"];
	}
	// Apply the custom filter to the 'Account Name' lookup field
	var partyListControl = formContext.getControl("parentcustomerid");
	partyListControl.addCustomFilter(fetchXML);
	partyListControl.setEntityTypes(entityTypes);
}

function addPreSearchToPartyLookup(executionContext)
{
	debugger;
	var formContext = executionContext.getFormContext();
	formContext.getControl("parentcustomerid").addPreSearch(function ()
	{
		filterPartyLookup(executionContext);
	});
}
