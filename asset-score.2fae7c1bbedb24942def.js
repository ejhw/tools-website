(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{p6Ex:function(e,t,s){"use strict";s.r(t),s.d(t,"AssetScoreModule",function(){return S});var o=s("ofXK"),r=s("PCNd"),n=s("tyNb"),a=s("fXoL"),i=s("NLSS");let c=(()=>{class e{constructor(){this.navItems=[{title:"Asset Score",icon:"fa-info-circle",route:"/asset-score"},{title:"Goals & Outcomes",icon:"fa-bullseye",route:"goals"},{title:"Resources",icon:"fa-file-alt",route:"resources"},{title:"Links for Developers",icon:"fa-wrench",route:"dev"},{title:"Get Help",icon:"fa-comments",route:"help"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["ng-component"]],decls:2,vars:1,consts:[[3,"navItems"],["slot","logo","src","assets/images/asset-score-logo.svg","alt","Asset Score Logo"]],template:function(e,t){1&e&&(a.Sb(0,"app-tool",0),a.Nb(1,"img",1),a.Rb()),2&e&&a.gc("navItems",t.navItems)},directives:[i.a],encapsulation:2}),e})(),l=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["ng-component"]],decls:96,vars:0,consts:[[1,"mat-h2","mb-4"],[1,"mat-h3","color-3","mt-4"],["href","http://en.wikipedia.org/wiki/Representational_state_transfer","target","_blank",1,"color-3"],["href","mailto:asset.score@ee.doe.gov?subject=Request API Token",1,"color-3"],["href","https://buildingenergyscore.energy.gov/apidoc/v2/users/create.html","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/apidoc/v2/users/authenticate.html","target","_blank",1,"color-3"],[1,"pl-3"],["href","https://buildingenergyscore.energy.gov/apidoc","target","_blank",1,"color-3"],["href","https://help.buildingenergyscore.com/","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/EnergyAssetScoreDataModel.v1.pdf","target","_blank",1,"color-3"],[1,"center","p-2"],["width","50%","src","assets/md/asset-score/img/asset-score-diagram.png","alt","asset score diagram"],[1,"center"]],template:function(e,t){1&e&&(a.Sb(0,"h2",0),a.sc(1,"Links for Developers"),a.Rb(),a.Sb(2,"p"),a.sc(3,"We welcome use of the Asset Score by energy services companies, consultants, software providers and other parties that offer services to building owners to improve the energy efficiency of buildings. Such providers can integrate their tools seamlessly with the Asset Score through an application programming interface (API)."),a.Rb(),a.Sb(4,"h3",1),a.sc(5,"RESTful Web Service"),a.Rb(),a.Sb(6,"p"),a.sc(7,"The Asset Score API is a RESTful style web service. For more information about REST, please visit: "),a.Sb(8,"a",2),a.sc(9,"http://en.wikipedia.org/wiki/Representational_state_transfer"),a.Rb(),a.Rb(),a.Sb(10,"h3",1),a.sc(11,"API Organization Token"),a.Rb(),a.Sb(12,"p"),a.sc(13,'In order to create an account to authenticate and utilize the API, users must first get an API Organization Token. The token must be passed along with the parameters used when creating a new account. Please send an email with the subject line "Request API Token" to: '),a.Sb(14,"a",3),a.sc(15,"asset.score@ee.doe.gov"),a.Rb(),a.Rb(),a.Sb(16,"p"),a.sc(17,"Once the organization token is received the API can be utilized to create a user account. A user account is used to obtain an API Access Token, described below. Follow the API documentation for details of the parameters needed: "),a.Sb(18,"a",4),a.sc(19,"POST /api/v2/users"),a.Rb(),a.Rb(),a.Sb(20,"h3",1),a.sc(21,"API Access Token"),a.Rb(),a.Sb(22,"p"),a.sc(23,"Once a user account has been created the user can authenticate against the API to generate a user-specific access token. All subsequent interactions with the API must include the authenticated user's API token. Follow the API documentation for details of authentication method: "),a.Sb(24,"a",5),a.sc(25,"POST /api/v2/users/authenticate"),a.Rb(),a.Rb(),a.Sb(26,"p"),a.sc(27,"The API Access Token is specific to an individual user, and is distinct from the API Organization Token. The API Organization Token is used only to create user accounts and to authenticate those accounts in order to receive the API Access Token."),a.Rb(),a.Sb(28,"p"),a.sc(29,"To use your API access token, simply pass the key as a URL parameter when making requests. For example:"),a.Rb(),a.Sb(30,"p",6),a.Sb(31,"code"),a.sc(32,"GET https://api.labworks.org/api/v2/preview_buildings?token=YOUR_UNIQUE_TOKEN"),a.Rb(),a.Rb(),a.Sb(33,"h3",1),a.sc(34,"API Documentation"),a.Rb(),a.Sb(35,"p"),a.sc(36,"All API documentation can be found at: "),a.Sb(37,"a",7),a.sc(38,"API Documentation"),a.Rb(),a.Rb(),a.Sb(39,"h3",1),a.sc(40,"Summary of Steps"),a.Rb(),a.Sb(41,"ul"),a.Sb(42,"li"),a.sc(43,'Request an API Organization Token. Send email with subject line "Request API Token" to: '),a.Sb(44,"a",3),a.sc(45,"asset.score@ee.doe.gov"),a.Rb(),a.Rb(),a.Sb(46,"li"),a.sc(47,"Use the API Organization Token to create a user account: "),a.Sb(48,"a",4),a.sc(49,"POST /api/v2/users"),a.Rb(),a.Rb(),a.Sb(50,"li"),a.sc(51,"Authenticate the user account using the API Organization Token to receive an API Access Token: "),a.Sb(52,"a",5),a.sc(53,"POST /api/v2/users/authenticate"),a.Rb(),a.Rb(),a.Sb(54,"li"),a.sc(55,"Use the API Access Token in further API requests."),a.Rb(),a.Rb(),a.Sb(56,"h3",1),a.sc(57,"Data Documentation"),a.Rb(),a.Sb(58,"p"),a.sc(59,"The help desk website help documentation provides detail into how the tool works and is recommended reading: "),a.Sb(60,"a",8),a.sc(61,"Asset Score Help"),a.Rb(),a.Rb(),a.Sb(62,"p"),a.sc(63,"See below for a high-level overview of the data model. For more detail, download a description of the data elements as described in: "),a.Sb(64,"a",9),a.sc(65,"EnergyAssetScoreDataModel.v1.pdf"),a.Rb(),a.Rb(),a.Sb(66,"div",10),a.Nb(67,"img",11),a.Rb(),a.Sb(68,"h3",1),a.sc(69,"Notice"),a.Rb(),a.Sb(70,"p"),a.sc(71,"This material was prepared as an account of work sponsored by an agency of the United States Government. Neither the United States Government nor the United States Department of Energy, nor the Contractor, nor any or their employees, nor any jurisdiction or organization that has cooperated in the development of these materials, "),a.Sb(72,"strong"),a.Sb(73,"em"),a.sc(74,"makes any warranty, express or implied, or assumes any legal liability or responsibility for the accuracy, completeness, or usefulness or any information, apparatus, product, software, or process disclosed, or represents that its use would not infringe privately owned rights."),a.Rb(),a.Rb(),a.Rb(),a.Sb(75,"p"),a.sc(76,"Reference herein to any specific commercial product, process, or service by trade name, trademark, manufacturer, or otherwise does not necessarily constitute or imply its endorsement, recommendation, or favoring by the United States Government or any agency thereof, or Battelle Memorial Institute. The views and opinions of authors expressed herein do not necessarily state or reflect those of the United States Government or any agency thereof."),a.Rb(),a.Sb(77,"div",12),a.sc(78," PACIFIC NORTHWEST NATIONAL LABORATORY "),a.Nb(79,"br"),a.Sb(80,"em"),a.sc(81,"operated"),a.Rb(),a.Nb(82,"br"),a.sc(83," BATTELLE"),a.Nb(84,"br"),a.Sb(85,"em"),a.sc(86,"for the"),a.Rb(),a.Nb(87,"br"),a.sc(88," UNITED STATES DEPARTMENT OF ENERGY"),a.Nb(89,"br"),a.Sb(90,"em"),a.sc(91,"under Contract DE-AC05-76RL01830"),a.Rb(),a.Nb(92,"br"),a.Nb(93,"br"),a.sc(94," ALL RIGHTS RESERVED"),a.Nb(95,"br"),a.Rb())},encapsulation:2}),e})(),b=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["ng-component"]],decls:4,vars:0,consts:[[1,"mat-h2","mb-4"],[1,"mx-5","mt-5"]],template:function(e,t){1&e&&(a.Sb(0,"h2",0),a.sc(1,"Goals & Outcomes"),a.Rb(),a.Sb(2,"p",1),a.sc(3,"Use the Asset Score tool to identify a compliance pathway for any buildings which don\u2019t meet your program\u2019s performance criteria. After entering audit data into Audit Template, you can create an Asset Score report with one click. This report will include a customized, prioritized list of cost-effective upgrade recommendations which can be shared with building owners."),a.Rb())},encapsulation:2}),e})(),g=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["ng-component"]],decls:4,vars:0,consts:[[1,"mat-h2","mb-4"]],template:function(e,t){1&e&&(a.Sb(0,"h2",0),a.sc(1,"Get Help"),a.Rb(),a.Sb(2,"p"),a.sc(3,"Visit the Data Tools Help Desk for help getting started with or using Asset Score. "),a.Rb())},encapsulation:2}),e})();var d=s("XiUz"),p=s("7EHt");const u=[{path:"",component:c,children:[{path:"",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["ng-component"]],decls:64,vars:0,consts:[["fxLayout","row","fxLayoutAlign","space-around"],["fxFlex","50"],["width","90%","height","70%","src","https://www.youtube.com/embed/A9THtQg5lHU","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen",""],[1,"mat-h3","color-3"],["href","https://buildingenergyscore.energy.gov/d/users/sign_up","target","_blank",1,"color-3"],["href","https://help.buildingenergyscore.com/support/home","target","_blank",1,"color-3"],[1,"mb-1"],[1,"color-3"],["fxLayout","row",1,"mb-4"],["fxFlex","50","fxLayoutGap","20px"],["href","https://www.seattle.gov/environment/climate-change/buildings-and-energy/building-tune-ups/tune-up-accelerator","target","_blank",1,"color-3"]],template:function(e,t){1&e&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Nb(2,"iframe",2),a.Rb(),a.Sb(3,"div",1),a.Sb(4,"p"),a.sc(5,"The Building Energy Asset Score (Asset Score) is a free, web-based tool for assessing the physical and structural energy efficiency of commercial and multifamily residential buildings. "),a.Rb(),a.Sb(6,"p"),a.sc(7,"Asset Score assesses the energy efficiency of building assets (including envelope, mechanical, electrical and service hot water systems) and generates an Energy Asset Score Report which includes: "),a.Rb(),a.Sb(8,"ul"),a.Sb(9,"li"),a.sc(10,"An overall efficiency score ranging from 1-10"),a.Rb(),a.Sb(11,"li"),a.sc(12,"An energy efficiency assessment of the building\u2019s individual systems"),a.Rb(),a.Sb(13,"li"),a.sc(14,"Total estimated building energy usage under standard operation and by end use"),a.Rb(),a.Sb(15,"li"),a.sc(16,"Opportunities to improve building efficiency, and a \u201cpotential\u201d energy efficiency score based on identified upgrades"),a.Rb(),a.Rb(),a.Sb(17,"p"),a.sc(18,"Because Asset Score reflects the energy efficiency of a building based solely on its design, construction, and energy systems, users can:"),a.Rb(),a.Sb(19,"ul"),a.Sb(20,"li"),a.sc(21,"Quickly compare the physical energy efficiency of their building with other buildings"),a.Rb(),a.Sb(22,"li"),a.sc(23,"Communicate building efficiency to the marketplace"),a.Rb(),a.Sb(24,"li"),a.sc(25,"Identify opportunities to invest in energy efficiency upgrades"),a.Rb(),a.Rb(),a.Sb(26,"h3",3),a.sc(27,"Getting Started"),a.Rb(),a.Sb(28,"p"),a.sc(29,"To get started, "),a.Sb(30,"a",4),a.sc(31,"register for an Asset Score account"),a.Rb(),a.sc(32,". View the Introduction to Asset Score webinar on this page and review the additional resources on this page as well as the "),a.Sb(33,"a",5),a.sc(34,"Asset Score User Guide"),a.Rb(),a.sc(35,". "),a.Rb(),a.Rb(),a.Rb(),a.Sb(36,"mat-expansion-panel",6),a.Sb(37,"mat-expansion-panel-header"),a.Sb(38,"mat-panel-title",7),a.sc(39," Asset Score & ENERGY STAR Portfolio Manager "),a.Rb(),a.Rb(),a.Sb(40,"div",8),a.Sb(41,"div",9),a.Sb(42,"p"),a.sc(43,"An ENERGY STAR Portfolio Manager score enables the comparison of buildings based on their energy consumption, as indicated by actual energy bills (how a building "),a.Sb(44,"strong"),a.sc(45,"actually"),a.Rb(),a.sc(46," performs based on use). The Portfolio Manager score may reflect how efficiently a building is operated and maintained."),a.Rb(),a.Sb(47,"p"),a.sc(48,"Asset Score reflects the energy efficiency of a building based solely on its design, construction, and energy systems (how a building "),a.Sb(49,"strong"),a.sc(50,"should"),a.Rb(),a.sc(51," perform based on construction). Think of it as a \u201cmiles per gallon\u201d sticker for buildings."),a.Rb(),a.Rb(),a.Rb(),a.Sb(52,"p"),a.sc(53,"Using Asset Score and Portfolio Manager together provides powerful information that can identify energy upgrades and improvements in building operations. For example, in the graphic above: "),a.Rb(),a.Sb(54,"ul"),a.Sb(55,"li"),a.sc(56,"A building that receives a low ENERGY STAR score and a high Asset Score may benefit from a re-tuning or retrocommissioning."),a.Rb(),a.Sb(57,"li"),a.sc(58,"A building that receives a high ENERGY STAR score and a low Asset Score may benefit from some capital improvements. "),a.Rb(),a.Rb(),a.Sb(59,"p"),a.sc(60,"The "),a.Sb(61,"a",10),a.sc(62,"Seattle Building Tune-Up Accelerator Program"),a.Rb(),a.sc(63," recently used both tools in this way; their website includes information on the program, including a link to a recorded webinar and a case study."),a.Rb(),a.Rb())},directives:[d.d,d.c,d.a,p.b,p.c,p.d,d.e],encapsulation:2}),e})()},{path:"goals",component:b},{path:"resources",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["ng-component"]],decls:202,vars:0,consts:[[1,"mat-h2","mb-4"],[1,"mb-1"],[1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/asset_score_quick_start_guide.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/asset_score_quick_start_guide_preview.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/videos/assetscore_demo.wmv","target","_blank",1,"color-3"],["href","https://help.buildingenergyscore.com/","target","_blank",1,"color-3"],["href","https://help.buildingenergyscore.com/support/solutions","target","_blank",1,"color-3"],["href","https://help.buildingenergyscore.com/support/discussions","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/energy_asset_score_data_collection_form_preview.pdf","target","_blank",1,"color-3"],["href","Data Collection Short Form - Full Input Mode","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/energy_asset_score_data_collection_form_full_long.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/asset_score_data_collection_priority_map.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/templates/spreadsheet_upload_template.xlsx","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/AST_UnitConversionCalculator.xlsx","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/example_report_preview.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/example_report.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/example_report_mixed_use.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/energy_asset_score_report_guide.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/energy_asset_score_recommendations_guide.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/energy_asset_score_assumptions.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/asset_score_use_types_systems_and_controls.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/energy_asset_score_technical_protocol.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/energy_asset_score_technical_protocol_appendix_L.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/api","target","_blank",1,"color-3"],["href","http://as-documentation.labworks.org/","target","_blank",1,"color-3"],["href","https://www.youtube.com/watch?v=A9THtQg5lHU","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/Introduction_to_Asset_Score_042820.pdf","target","_blank",1,"color-3"],["href","http://www.assetscorecertificate.org/","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/energy_asset_score_methodology_journal_012916.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/simulation_based_coefficients_for_adjusting_climate_impact.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/AS_Preview_Final.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/market_research.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/lessons_learned.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/weather_normalization.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/system_evaluation.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/uncertainty_analysis_ibpsa.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/assetscore_preview_aceee.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/energy_savings_hotels.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/publications/Final_ASHRAE_PNNL_CommercialKitchen.pdf","target","_blank",1,"color-3"],["href","https://buildingenergyscore.energy.gov/documents/asset_score_brochure.pdf","target","_blank",1,"color-3"],["href","https://energy.gov/eere/buildings/downloads/building-energy-asset-score-architects","target","_blank",1,"color-3"],["href","https://energy.gov/eere/buildings/downloads/building-energy-asset-score-building-owners","target","_blank",1,"color-3"],["href","https://energy.gov/eere/buildings/downloads/building-energy-asset-score-energy-services-companies-engineers-and","target","_blank",1,"color-3"],["href","https://energy.gov/eere/buildings/downloads/building-energy-asset-score-real-estate-managers","target","_blank",1,"color-3"],["href","https://energy.gov/eere/buildings/downloads/building-energy-asset-score-state-and-local-governments","target","_blank",1,"color-3"],["href","https://energy.gov/eere/buildings/downloads/building-energy-asset-score-utilities-and-energy-efficiency-program","target","_blank",1,"color-3"]],template:function(e,t){1&e&&(a.Sb(0,"h2",0),a.sc(1,"Resources"),a.Rb(),a.Sb(2,"p"),a.sc(3,"The following documents are available to help you understand and use Asset Score:"),a.Rb(),a.Sb(4,"mat-expansion-panel",1),a.Sb(5,"mat-expansion-panel-header"),a.Sb(6,"mat-panel-title",2),a.sc(7," Getting Started "),a.Rb(),a.Rb(),a.Sb(8,"ul"),a.Sb(9,"li"),a.Sb(10,"a",3),a.sc(11,"Quick Start Guide"),a.Rb(),a.sc(12," (PDF)"),a.Rb(),a.Sb(13,"li"),a.Sb(14,"a",4),a.sc(15,"Quick Start Guide - Preview Version"),a.Rb(),a.sc(16," (PDF)"),a.Rb(),a.Sb(17,"li"),a.Sb(18,"a",5),a.sc(19,"Overview and Demonstration"),a.Rb(),a.sc(20," (WMV)"),a.Rb(),a.Sb(21,"li"),a.Sb(22,"a",6),a.sc(23,"Asset Score Help"),a.Rb(),a.Rb(),a.Sb(24,"li"),a.Sb(25,"a",7),a.sc(26,"User's Guide"),a.Rb(),a.Rb(),a.Sb(27,"li"),a.Sb(28,"a",8),a.sc(29,"Community Forum"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(30,"mat-expansion-panel",1),a.Sb(31,"mat-expansion-panel-header"),a.Sb(32,"mat-panel-title",2),a.sc(33," Data Collection "),a.Rb(),a.Rb(),a.Sb(34,"ul"),a.Sb(35,"li"),a.Sb(36,"a",9),a.sc(37,"Data Collection Form - Preview Input Mode"),a.Rb(),a.sc(38," (PDF)"),a.Rb(),a.Sb(39,"li"),a.Sb(40,"a",10),a.sc(41,"Data Collection Short Form - Full Input Mode"),a.Rb(),a.sc(42," (PDF)"),a.Rb(),a.Sb(43,"li"),a.Sb(44,"a",11),a.sc(45,"Data Collection Long Form - Full Input Mode"),a.Rb(),a.sc(46," (PDF)"),a.Rb(),a.Sb(47,"li"),a.Sb(48,"a",12),a.sc(49,"Asset Score Data Collection Priority Map"),a.Rb(),a.sc(50," (PDF)"),a.Rb(),a.Sb(51,"li"),a.Sb(52,"a",13),a.sc(53,"Upload Template for Preview Buildings"),a.Rb(),a.sc(54," (XLSX)"),a.Rb(),a.Sb(55,"li"),a.Sb(56,"a",14),a.sc(57,"Unit Conversion Calculator"),a.Rb(),a.sc(58," (XLSX)"),a.Rb(),a.Rb(),a.Rb(),a.Sb(59,"mat-expansion-panel",1),a.Sb(60,"mat-expansion-panel-header"),a.Sb(61,"mat-panel-title",2),a.sc(62," Asset Score Report "),a.Rb(),a.Rb(),a.Sb(63,"ul"),a.Sb(64,"li"),a.Sb(65,"a",15),a.sc(66,"Example Asset Score Preview Report"),a.Rb(),a.sc(67," (PDF)"),a.Rb(),a.Sb(68,"li"),a.Sb(69,"a",16),a.sc(70,"Example Single-Use Asset Score Report"),a.Rb(),a.sc(71," (PDF)"),a.Rb(),a.Sb(72,"li"),a.Sb(73,"a",17),a.sc(74,"Example Mixed-Use Asset Score Report"),a.Rb(),a.sc(75," (PDF)"),a.Rb(),a.Sb(76,"li"),a.Sb(77,"a",18),a.sc(78,"Asset Score Report Guide"),a.Rb(),a.sc(79," (PDF)"),a.Rb(),a.Sb(80,"li"),a.Sb(81,"a",19),a.sc(82,"Asset Score Building Upgrade Guide"),a.Rb(),a.sc(83," (PDF)"),a.Rb(),a.Rb(),a.Rb(),a.Sb(84,"mat-expansion-panel",1),a.Sb(85,"mat-expansion-panel-header"),a.Sb(86,"mat-panel-title",2),a.sc(87," Software and Modeling Details "),a.Rb(),a.Rb(),a.Sb(88,"ul"),a.Sb(89,"li"),a.Sb(90,"a",20),a.sc(91,"Operational and Equipment Sizing Assumptions"),a.Rb(),a.sc(92," (PDF)"),a.Rb(),a.Sb(93,"li"),a.Sb(94,"a",21),a.sc(95,"Available Use Types, HVAC Systems, and System Controls At-a-Glance"),a.Rb(),a.sc(96," (PDF)"),a.Rb(),a.Sb(97,"li"),a.Sb(98,"a",22),a.sc(99,"Program Overview and Technical Protocol"),a.Rb(),a.sc(100," (PDF)"),a.Rb(),a.Sb(101,"li"),a.Sb(102,"a",23),a.sc(103,"Program Overview Appendix L - Sensitivity Analysis"),a.Rb(),a.sc(104," (PDF)"),a.Rb(),a.Sb(105,"li"),a.Sb(106,"a",24),a.sc(107,"Asset Score API"),a.Rb(),a.Rb(),a.Sb(108,"li"),a.Sb(109,"a",25),a.sc(110,"Asset Score Release Notes"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(111,"mat-expansion-panel",1),a.Sb(112,"mat-expansion-panel-header"),a.Sb(113,"mat-panel-title",2),a.sc(114," Asset Score Training "),a.Rb(),a.Rb(),a.Sb(115,"ul"),a.Sb(116,"li"),a.Sb(117,"a",26),a.sc(118,"Introduction to Asset Score Webinar, April 28, 2020"),a.Rb(),a.sc(119," (YouTube)"),a.Rb(),a.Sb(120,"li"),a.Sb(121,"a",27),a.sc(122,"Introduction to Asset Score Webinar, April 28, 2020 - Presentation Slides"),a.Rb(),a.sc(123," (PDF)"),a.Rb(),a.Sb(124,"li"),a.Sb(125,"a",28),a.sc(126,"Center for Building Knowledge (CBK) Asset Score Training and Certification Program"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(127,"mat-expansion-panel",1),a.Sb(128,"mat-expansion-panel-header"),a.Sb(129,"mat-panel-title",2),a.sc(130," Technical Publications "),a.Rb(),a.Rb(),a.Sb(131,"ul"),a.Sb(132,"li"),a.Sb(133,"a",29),a.sc(134,"Journal Article: Scoring Methodology"),a.Rb(),a.sc(135," (PDF)"),a.Rb(),a.Sb(136,"li"),a.Sb(137,"a",30),a.sc(138,"Journal Article: Simulation-based coefficients for adjusting climate impact[...]"),a.Rb(),a.sc(139," (PDF)"),a.Rb(),a.Sb(140,"li"),a.Sb(141,"a",31),a.sc(142,"Journal Article: Asset Score Preview"),a.Rb(),a.Rb(),a.Sb(143,"li"),a.Sb(144,"a",32),a.sc(145,"Conference Paper: Market Research; ACEEE Summer Study, 2012"),a.Rb(),a.sc(146," (PDF)"),a.Rb(),a.Sb(147,"li"),a.Sb(148,"a",33),a.sc(149,"Conference Paper: Pilot Project Lessons Learned; ASHRAE Transactions, 2013"),a.Rb(),a.sc(150," (PDF)"),a.Rb(),a.Sb(151,"li"),a.Sb(152,"a",34),a.sc(153,"Conference Paper: Weather Normalization; iBPSA, 2013"),a.Rb(),a.sc(154," (PDF)"),a.Rb(),a.Sb(155,"li"),a.Sb(156,"a",35),a.sc(157,"Conference Paper: System Evaluation; ASHRAE Annual Conference, 2014"),a.Rb(),a.sc(158," (PDF)"),a.Rb(),a.Sb(159,"li"),a.Sb(160,"a",36),a.sc(161,"Conference Paper: Uncertainty Analysis; ASHRAE and iBPSA SimBuild, 2016"),a.Rb(),a.sc(162," (PDF)"),a.Rb(),a.Sb(163,"li"),a.Sb(164,"a",37),a.sc(165,"Conference Paper: Asset Score Preview; ACEEE Summer Study, 2016"),a.Rb(),a.sc(166," (PDF)"),a.Rb(),a.Sb(167,"li"),a.Sb(168,"a",38),a.sc(169,"Conference Paper: Energy Savings for Hotels; ACEEE Summer Study, 2016"),a.Rb(),a.sc(170," (PDF)"),a.Rb(),a.Sb(171,"li"),a.Sb(172,"a",39),a.sc(173,"Conference Paper: Energy Evaluation of Food Service; ASHRAE Annual Conference, 2018"),a.Rb(),a.sc(174," (PDF)"),a.Rb(),a.Rb(),a.Rb(),a.Sb(175,"mat-expansion-panel",1),a.Sb(176,"mat-expansion-panel-header"),a.Sb(177,"mat-panel-title",2),a.sc(178," Communications "),a.Rb(),a.Rb(),a.Sb(179,"ul"),a.Sb(180,"li"),a.Sb(181,"a",40),a.sc(182,"Asset Score Brochure"),a.Rb(),a.sc(183," (PDF)"),a.Rb(),a.Sb(184,"li"),a.Sb(185,"a",41),a.sc(186,"Asset Score for Architects"),a.Rb(),a.Rb(),a.Sb(187,"li"),a.Sb(188,"a",42),a.sc(189,"Asset Score for Building Owners "),a.Rb(),a.Rb(),a.Sb(190,"li"),a.Sb(191,"a",43),a.sc(192,"Asset Score for Energy Services Companies, Engineers and Green Building Consultants "),a.Rb(),a.Rb(),a.Sb(193,"li"),a.Sb(194,"a",44),a.sc(195,"Asset Score for Real Estate Managers"),a.Rb(),a.Rb(),a.Sb(196,"li"),a.Sb(197,"a",45),a.sc(198,"Asset Score for State and Local Governments"),a.Rb(),a.Rb(),a.Sb(199,"li"),a.Sb(200,"a",46),a.sc(201,"Asset Score for Utilities and Energy Efficiency Program Administrators"),a.Rb(),a.Rb(),a.Rb(),a.Rb())},directives:[p.b,p.c,p.d],encapsulation:2}),e})()},{path:"dev",component:l},{path:"help",component:g}]}];let h=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[n.f.forChild(u)],n.f]}),e})(),S=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[h,o.c,r.a]]}),e})()}}]);