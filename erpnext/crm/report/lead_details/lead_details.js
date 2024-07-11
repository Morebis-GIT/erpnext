// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.query_reports["Lead Details"] = {
	filters: [
		{
			fieldname: "company",
			label: __("Company"),
			fieldtype: "Link",
			options: "Company",
			default: frappe.defaults.get_user_default("Company"),
			reqd: 1,
		},
		{
			fieldname: "from_date",
			label: __("From Date"),
			fieldtype: "Date",
			default: frappe.datetime.add_months(frappe.datetime.get_today(), -12),
			reqd: 1,
		},
		{
			fieldname: "to_date",
			label: __("To Date"),
			fieldtype: "Date",
			default: frappe.datetime.get_today(),
			reqd: 1,
		},
		{
			fieldname: "status",
			label: __("Status"),
			fieldtype: "Select",
			// Devtorium changes start
			options: [
				{ "value": "empty", "label": __("All") },
				{ "value": "No reply", "label": __("No reply") },
				{ "value": "Replied", "label": __("Replied") },
				{ "value": "Cold", "label": __("Cold") },
				{ "value": "Warm", "label": __("Warm") },
				{ "value": "Hot", "label": __("Hot") },
				{ "value": "Closed", "label": __("Closed") },
				{ "value": "Lost", "label": __("Lost") },
				{ "value": "On hold", "label": __("On hold") },
			],
			// Devtorium changes end
		},
		// Devtorium changes start
		{
			"fieldname":"lead_owner",
			"label": __("Lead Owner"),
			"fieldtype": "Link",
			"options": "User",
		},
		{
			"fieldname":"lead_source",
			"label": __("Lead Source"),
			"fieldtype": "Link",
			"options": "Lead Source",
		},
		// Devtorium changes end
	],
};
