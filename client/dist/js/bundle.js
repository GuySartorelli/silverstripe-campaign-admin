!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=15)}([function(e,t){e.exports=React},function(e,t){e.exports=i18n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={SET_CAMPAIGN_ACTIVE_CHANGESET:"SET_CAMPAIGN_ACTIVE_CHANGESET",SET_CAMPAIGN_SELECTED_CHANGESETITEM:"SET_CAMPAIGN_SELECTED_CHANGESETITEM",PUBLISH_CAMPAIGN_REQUEST:"PUBLISH_CAMPAIGN_REQUEST",PUBLISH_CAMPAIGN_SUCCESS:"PUBLISH_CAMPAIGN_SUCCESS",PUBLISH_CAMPAIGN_FAILURE:"PUBLISH_CAMPAIGN_FAILURE",SET_NEW_CAMPAIGN:"SET_NEW_CAMPAIGN",REMOVE_CAMPAIGN_ITEM_REQUEST:"REMOVE_CAMPAIGN_ITEM_REQUEST",REMOVE_CAMPAIGN_ITEM_SUCCESS:"REMOVE_CAMPAIGN_ITEM_SUCCESS",REMOVE_CAMPAIGN_ITEM_FAILURE:"REMOVE_CAMPAIGN_ITEM_FAILURE",SET_SHOW_MESSAGE:"SET_SHOW_MESSAGE"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.localStorage).setItem("campaign.showMessage",e),{type:p.default.SET_SHOW_MESSAGE,payload:{show:e}}}function i(e){return{type:p.default.SET_CAMPAIGN_SELECTED_CHANGESETITEM,payload:{changeSetItemId:e}}}function o(e,t){return function(n){n({type:p.default.SET_CAMPAIGN_ACTIVE_CHANGESET,payload:{campaignId:e,view:t}})}}function s(e,t,n){return function(a){a({type:p.default.PUBLISH_CAMPAIGN_REQUEST,payload:{campaignId:n}}),e({id:n}).then(function(e){a({type:p.default.PUBLISH_CAMPAIGN_SUCCESS,payload:{campaignId:n}}),a({type:f.default.FETCH_RECORD_SUCCESS,payload:{recordType:t,data:e}})}).catch(function(e){a({type:p.default.PUBLISH_CAMPAIGN_FAILURE,payload:{error:e}})})}}function l(e){return{type:p.default.SET_NEW_CAMPAIGN,payload:{newItem:e}}}function c(e,t,n){return function(a){return a({type:p.default.REMOVE_CAMPAIGN_ITEM_REQUEST,payload:{campaignId:t,itemId:n}}),e({id:t,itemId:n}).then(function(){a({type:p.default.REMOVE_CAMPAIGN_ITEM_SUCCESS,payload:{campaignId:t,itemId:n}})}).catch(function(e){a({type:p.default.REMOVE_CAMPAIGN_ITEM_FAILURE,payload:{error:e}})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.setShowMessage=r,t.selectChangeSetItem=i,t.showCampaignView=o,t.publishCampaign=s,t.setNewItem=l,t.removeCampaignItem=c;var u=n(2),p=a(u),d=n(32),f=a(d)},function(e,t){e.exports=Breadcrumb},function(e,t){e.exports=BreadcrumbsActions},function(e,t){e.exports=FormAction},function(e,t){e.exports=Injector},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=ReactRouter},function(e,t){e.exports=RecordsActions},function(e,t){e.exports=Redux},function(e,t){e.exports=Toolbar},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(9),i=n(25),o=a(i),s=n(7),l=a(s),c=n(31),u=a(c),p=n(18),d=a(p),f=n(21),m=a(f),h=n(14),g=a(h);document.addEventListener("DOMContentLoaded",function(){var e=o.default.getSection("SilverStripe\\CampaignAdmin\\CampaignAdmin");u.default.add({path:e.url,component:(0,r.withRouter)(d.default),childRoutes:[{path:":type/:id/:view",component:d.default},{path:"set/:id/:view",component:d.default}]}),l.default.reducer.register("campaign",m.default),(0,g.default)()})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),r=function(e){return e&&e.__esModule?e:{default:e}}(a),i=function(){r.default.transform("add-to-campaign",function(e){e.form.alterSchema("*.AddToCampaign",function(e){if(!e.getFieldByName("AddNewSelect"))return e.getState();var t=e.getValue("AddNewSelect");return e.setFieldClass("NewTitle","show",t).setFieldClass("NewTitle","hide",!t).getState()})})};t.default=i},function(e,t,n){"use strict";n(13)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),c=a(l),u=n(1),p=a(u),d=n(17),f=a(d),m=function(){return null},h=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClose=n.handleClose.bind(n),n}return o(t,e),s(t,[{key:"handleClose",value:function(e){this.props.onClose(e)}},{key:"renderContent",value:function(){var e=f.default.infoScreen.callToAction,t=f.default.infoScreen.links;return c.default.createElement("div",{className:"flexbox-area-grow campaign-info__content"},c.default.createElement("h3",null,p.default._t("CampaignAdmin.InfoScreenHeader","How do campaigns work?")),c.default.createElement("p",null,p.default._t("CampaignAdmin.InfoScreenContent","Campaigns allow multiple users to publish large amounts of content (pages, files, etc.) all at once from one place.")),c.default.createElement("div",{className:"campaign-info__links"},t.map(function(e){return c.default.createElement("a",{key:e.text,href:e.link,target:"_blank"},e.text)})),c.default.createElement("div",{className:"campaign-info__content-buttons"},e&&c.default.createElement("a",{className:"btn btn-outline-secondary",href:e.link,target:"_blank"},e.text)))}},{key:"render",value:function(){return this.props.show?c.default.createElement("div",{className:"fill-width campaign-info"},c.default.createElement("div",{className:"campaign-info__icon"},c.default.createElement("span",{className:"font-icon-white-question icon btn--icon-xl"})),this.renderContent(),c.default.createElement("div",{className:"campaign-info__banner-image"}),c.default.createElement("div",{className:"campaign-info__buttons"},c.default.createElement("a",{className:"btn campaign-info__close btn--no-text font-icon-cancel btn--icon-xl",onClick:this.handleClose,role:"button",tabIndex:0}))):null}}]),t}(l.Component);h.propTypes={show:l.PropTypes.bool,onClose:l.PropTypes.func},h.defaultProps={show:!1,onClose:m},t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={infoScreen:{links:[],callToAction:null}}},function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n=null,a=e.config.sections.find(function(e){return e.name===H});if(t.params.id>0){var r=a.form.campaignEditForm.schemaUrl+"/"+t.params.id,i=e.form.formSchemas[r],o=i&&i.name,s=o&&(0,h.formValueSelector)(i.name,v.default);n=s&&s(e,"Name")}return{config:e.config,campaignId:e.campaign.campaignId,view:e.campaign.view,breadcrumbs:e.breadcrumbs,sectionConfig:a,securityId:e.config.SecurityID,title:n,showMessage:e.campaign.showMessage}}function c(e){return{breadcrumbsActions:(0,g.bindActionCreators)(S,e),campaignActions:(0,g.bindActionCreators)(I,e),recordActions:(0,g.bindActionCreators)(k,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(0),f=r(d),m=n(8),h=n(33),g=n(11),b=n(9),_=n(36),v=r(_),y=n(24),E=r(y),C=n(3),I=a(C),A=n(5),S=a(A),w=n(10),k=a(w),T=n(4),P=r(T),N=n(6),M=r(N),R=n(1),O=r(R),x=n(12),B=r(x),j=n(27),G=r(j),L=n(20),U=r(L),D=n(16),F=r(D),H="SilverStripe\\CampaignAdmin\\CampaignAdmin",V=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={loading:!1};var a={SecurityID:e.securityId};return n.publishApi=E.default.createEndpointFetcher(u({},e.sectionConfig.publishEndpoint,{defaultData:a,payloadSchema:{id:{urlReplacement:":id",remove:!0}}})),n.removeCampaignItemApi=E.default.createEndpointFetcher(u({},e.sectionConfig.removeCampaignItemEndpoint,{defaultData:a,payloadSchema:{id:{urlReplacement:":id",remove:!0},itemId:{urlReplacement:":itemId",remove:!0}}})),n.handleBackButtonClick=n.handleBackButtonClick.bind(n),n.handleCreateCampaignSubmit=n.handleCreateCampaignSubmit.bind(n),n.handleFormAction=n.handleFormAction.bind(n),n.detectErrors=n.detectErrors.bind(n),n.handleRemoveCampaignItem=n.handleRemoveCampaignItem.bind(n),n.addCampaign=n.addCampaign.bind(n),n.handleHideMessage=n.handleHideMessage.bind(n),n.handleToggleMessage=n.handleToggleMessage.bind(n),n}return s(t,e),p(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.breadcrumbs,n=e.title,a=e.params,r=a.view,i=a.id;0===t.length&&this.setBreadcrumbs(r,i,n)}},{key:"componentWillReceiveProps",value:function(e){var t=e.title,n=e.params,a=n.id,r=n.view;(this.props.params.id!==a||this.props.params.view!==r||this.props.title!==t)&&this.setBreadcrumbs(r,a,t)}},{key:"setBreadcrumbs",value:function(e,t,n){var a=[{text:O.default._t("CampaignAdmin.CAMPAIGN","Campaigns"),href:this.props.sectionConfig.url}];switch(e){case"show":break;case"edit":a.push({text:n,href:this.getActionRoute(t,e)});break;case"create":a.push({text:O.default._t("CampaignAdmin.ADD_CAMPAIGN","Add Campaign"),href:this.getActionRoute(t,e)})}this.props.breadcrumbsActions.setBreadcrumbs(a)}},{key:"getActionRoute",value:function(e,t){return this.props.sectionConfig.url+"/set/"+e+"/"+t}},{key:"handleBackButtonClick",value:function(e){if(this.props.breadcrumbs.length>1){var t=this.props.breadcrumbs[this.props.breadcrumbs.length-2];t&&t.href&&(e.preventDefault(),this.props.router.push(t.href))}}},{key:"handleCreateCampaignSubmit",value:function(e,t,n){var a=this,r=n();if(!r)throw new Error("Promise was not returned for submitting");return r.then(function(e){var n=a.detectErrors(e);if("action_save"===t&&!n){var r=a.props.sectionConfig.url,i=e.record.id;a.props.campaignActions.setNewItem(i),a.props.router.push(r+"/set/"+i+"/show")}return e})}},{key:"handleFormAction",value:function(e){if("action_cancel"===e.currentTarget.name){var t=this.props.sectionConfig.url;this.props.router.push(t),e.preventDefault()}}},{key:"handleRemoveCampaignItem",value:function(e,t){var n=this,a=O.default._t("CampaignAdmin.REMOVE_ITEM_MESSAGE","Are you sure you want to remove this item?\n\nBy removing this item all linked items will be removed unless used elsewhere.");return window.confirm(a)?(this.setState({loading:!0}),this.removeCampaignItem(e,t).then(this.fetchCampaignsList.bind(this)).then(function(){return n.setState({loading:!1})}).then(function(){n.props.campaignActions.selectChangeSetItem(null),window.document.body.click()})):null}},{key:"handleToggleMessage",value:function(){this.props.campaignActions.setShowMessage(!this.props.showMessage)}},{key:"handleHideMessage",value:function(){this.props.campaignActions.setShowMessage(!1)}},{key:"removeCampaignItem",value:function(e,t){return this.props.campaignActions.removeCampaignItem(this.removeCampaignItemApi,e,t)}},{key:"fetchCampaignsList",value:function(){var e=this.props.sectionConfig.readCampaignsEndpoint,t=e.url;return this.props.recordActions.fetchRecords(this.props.sectionConfig.treeClass,e.method,t)}},{key:"detectErrors",value:function(e){if(e.errors&&e.errors.length)return!0;var t=e.state;if(!t)return!1;if(t.messages)return!0;var n=t.fields&&t.fields.find(function(e){return e.message});return Boolean(n)}},{key:"campaignEditCreateFn",value:function(e,t){var n=this,a=this.props.sectionConfig.url;if("action_cancel"===t.name){var r=Object.assign({},t,{onClick:function(e){e.preventDefault(),n.props.router.push(a)}});return f.default.createElement(e,u({key:t.id},r))}return f.default.createElement(e,u({key:t.id},t))}},{key:"campaignAddCreateFn",value:function(e,t){var n=this,a=this.props.sectionConfig.url;if("action_cancel"===t.name){var r=Object.assign({},t,{onClick:function(e){e.preventDefault(),n.props.router.push(a)}});return f.default.createElement(e,u({key:t.name},r))}return f.default.createElement(e,u({key:t.name},t))}},{key:"campaignListCreateFn",value:function(e,t){var n=this,a=this.props.sectionConfig.url;if("GridField"===t.schemaComponent){var r=Object.assign({},t,{data:Object.assign({},t.data,{onDrillDown:function(e,t){n.props.router.push(a+"/set/"+t.ID+"/show")},onEditRecord:function(e,t){n.props.router.push(a+"/set/"+t+"/edit")}})});return f.default.createElement(e,u({key:r.name},r))}return f.default.createElement(e,u({key:t.name},t))}},{key:"addCampaign",value:function(){var e=this.getActionRoute(0,"create");this.props.router.push(e)}},{key:"renderDetailEditView",value:function(){if(this.props.params.id<=0)return this.renderCreateView();var e=this.props.sectionConfig.form.campaignEditForm.schemaUrl,t=e+"/"+this.props.params.id;return f.default.createElement("div",{className:"fill-height"},f.default.createElement(B.default,{showBackButton:!0,onBackButtonClick:this.handleBackButtonClick},f.default.createElement(P.default,{multiline:!0})),f.default.createElement("div",{className:"panel panel--padded panel--scrollable flexbox-area-grow form--inline"},f.default.createElement(G.default,{onAction:this.handleFormAction,schemaUrl:t,identifier:"Campaign.EditView"})))}},{key:"renderCreateView",value:function(){var e=this.props.sectionConfig.form.campaignCreateForm.schemaUrl;return f.default.createElement("div",{className:"fill-height"},f.default.createElement(B.default,{showBackButton:!0,onBackButtonClick:this.handleBackButtonClick},f.default.createElement(P.default,{multiline:!0})),f.default.createElement("div",{className:"panel panel--padded panel--scrollable flexbox-area-grow form--inline"},f.default.createElement(G.default,{onSubmit:this.handleCreateCampaignSubmit,onAction:this.handleFormAction,schemaUrl:e,identifier:"Campaign.CreateView"})))}},{key:"renderIndexView",value:function(){var e=this.props.sectionConfig.form.EditForm.schemaUrl,t={title:O.default._t("CampaignAdmin.ADDCAMPAIGN"),icon:"plus",extraClass:"btn-primary",onClick:this.addCampaign},n={createFn:this.campaignListCreateFn.bind(this),schemaUrl:e,identifier:"Campaign.IndexView"};return f.default.createElement("div",{className:"fill-height","aria-expanded":"true"},f.default.createElement(B.default,null,f.default.createElement(P.default,{multiline:!0})),f.default.createElement(F.default,{show:this.props.showMessage,onClose:this.handleHideMessage}),f.default.createElement("div",{className:"panel panel--padded panel--scrollable flexbox-area-grow"},f.default.createElement("div",{className:"toolbar toolbar--content"},f.default.createElement("div",{className:"btn-toolbar fill-width"},f.default.createElement("div",{className:"btn-toolbar__left-panel flexbox-area-grow"},f.default.createElement(M.default,t)),f.default.createElement("div",{className:"btn-toolbar__left-panel"},f.default.createElement("a",{role:"button",tabIndex:0,onClick:this.handleToggleMessage,className:"btn btn-secondary font-icon-white-question btn--icon-xl"})))),f.default.createElement(G.default,n)))}},{key:"renderItemListView",value:function(){var e={sectionConfig:this.props.sectionConfig,campaignId:this.props.params.id,itemListViewEndpoint:this.props.sectionConfig.itemListViewEndpoint,publishApi:this.publishApi,onBackButtonClick:this.handleBackButtonClick,onRemoveCampaignItem:this.handleRemoveCampaignItem,loading:this.state.loading};return f.default.createElement(U.default,e)}},{key:"render",value:function(){var e=null;switch(this.props.params.view){case"show":e=this.renderItemListView();break;case"edit":e=this.renderDetailEditView();break;case"create":e=this.renderCreateView();break;default:e=this.renderIndexView()}return e}}]),t}(d.Component);V.propTypes={breadcrumbsActions:d.PropTypes.object.isRequired,campaignId:d.PropTypes.string,sectionConfig:d.PropTypes.shape({publishEndpoint:d.PropTypes.shape({url:d.PropTypes.string,method:d.PropTypes.string}),form:d.PropTypes.shape({EditForm:d.PropTypes.shape({schemaUrl:d.PropTypes.string}),campaignEditForm:d.PropTypes.shape({schemaUrl:d.PropTypes.string}),campaignCreateForm:d.PropTypes.shape({schemaUrl:d.PropTypes.string})})}),securityId:d.PropTypes.string.isRequired,view:d.PropTypes.string,params:d.PropTypes.shape({view:d.PropTypes.string,id:d.PropTypes.number}),showMessage:d.PropTypes.bool},V.defaultProps={sectionConfig:{},params:{},view:"show",breadcrumbs:[]},t.Component=V,t.default=(0,b.withRouter)((0,m.connect)(l,c)(V))},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),c=a(l),u=n(1),p=a(u),d=n(30),f=n(35),m=a(f),h=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"getNumReferTo",value:function(){return this.props.item._links&&this.props.item._links.references&&this.props.item._links.references.length||0}},{key:"getNumReferredBy",value:function(){return this.props.item._links&&this.props.item._links.referenced_by&&this.props.item._links.referenced_by.length||0}},{key:"getReferToTooltipText",value:function(){var e=this.getNumReferTo();return p.default.sprintf(p.default._t("CampaignAdmin.LINKED_TO","Requires %s item(s)"),(0,m.default)(e))}},{key:"getReferredByTooltipText",value:function(){var e=this.getNumReferredBy();return p.default.sprintf(p.default._t("CampaignAdmin.LINKED_FROM","Required by %s item(s)"),(0,m.default)(e))}},{key:"renderLinks",value:function(){var e=this.getNumReferTo(),t=this.getNumReferredBy(),n=[];e>0&&n.push(this.getReferToTooltipText()),t>0&&n.push(p.default.sprintf(0===n.length?this.getReferredByTooltipText():this.getReferredByTooltipText().toLocaleLowerCase(),(0,m.default)(t)));var a=c.default.createElement(d.Tooltip,{id:"campaign-tooltip-"+this.props.item.ID},n.join(", ")),r=null;if(this.props.selected&&e+t>0||this.props.isLinked){var i=["list-group-item__info","campaign-admin__item-links",this.props.isLinked?"campaign-admin__item-links--is-linked":"campaign-admin__item-links--has-links"];r=c.default.createElement("div",{className:i.join(" ")},c.default.createElement(d.OverlayTrigger,{placement:"left",overlay:a},c.default.createElement("span",null,c.default.createElement("span",{className:"campaign-admin__item-links__number"},e+t),c.default.createElement("span",{className:"font-icon-link"}))))}return r}},{key:"render",value:function(){var e=null,t={},n=this.props.item;if("open"===this.props.campaign.State)switch(n.ChangeType){case"created":t.className="badge badge-warning list-group-item__status",t.Title=p.default._t("CampaignAdmin.DRAFT","Draft");break;case"modified":t.className="badge badge-warning list-group-item__status",t.Title=p.default._t("CampaignAdmin.MODIFIED","Modified");break;case"deleted":t.className="badge badge-error list-group-item__status",t.Title=p.default._t("CampaignAdmin.REMOVED","Removed");break;case"none":default:t.className="badge badge-success list-group-item__status",t.Title=p.default._t("CampaignAdmin.NO_CHANGES","No changes")}var a=this.renderLinks();return n.Thumbnail&&(e=c.default.createElement("span",{className:"list-group-item__thumbnail"},c.default.createElement("img",{alt:n.Title,src:n.Thumbnail}))),c.default.createElement("div",{className:"fill-width"},e,c.default.createElement("div",{className:"list-group-item__details"},c.default.createElement("h4",{className:"list-group-item__heading",title:n.Title},n.Title),a,t.className&&t.Title&&c.default.createElement("span",{className:t.className},t.Title)))}}]),t}(l.Component);h.propTypes={campaign:c.default.PropTypes.object.isRequired,item:c.default.PropTypes.object.isRequired,isLinked:c.default.PropTypes.bool},t.default=h},function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var n=t.sectionConfig.treeClass,a=parseInt(t.campaignId,10),r=e.records[n]||[],i=r.find(function(e){return e.ID===a})||{};return{config:e.config,record:i,campaign:e.campaign,treeClass:n,newItem:e.campaign.newItem}}function u(e){return{breadcrumbsActions:(0,h.bindActionCreators)(_,e),recordActions:(0,h.bindActionCreators)(y,e),campaignActions:(0,h.bindActionCreators)(C,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n(0),m=r(f),h=n(11),g=n(8),b=n(5),_=a(b),v=n(10),y=a(v),E=n(3),C=a(E),I=n(22),A=r(I),S=n(23),w=r(S),k=n(28),T=r(k),P=n(12),N=r(P),M=n(6),R=r(M),O=n(19),x=r(O),B=n(4),j=r(B),G=n(29),L=r(G),U=n(1),D=r(U),F=n(34),H=r(F),V=function(e){function t(e){o(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handlePublish=n.handlePublish.bind(n),n.handleItemSelected=n.handleItemSelected.bind(n),n.setBreadcrumbs=n.setBreadcrumbs.bind(n),n.handleCloseItem=n.handleCloseItem.bind(n),n.handleRemoveItem=n.handleRemoveItem.bind(n),n.isRecordLoaded(e)?n.state={loading:!1}:n.state={loading:!0},n}return l(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.itemListViewEndpoint.url.replace(/:id/,this.props.campaignId);this.setBreadcrumbs(),this.isRecordLoaded()||this.props.recordActions.fetchRecord(this.props.treeClass,"get",t).then(function(){e.setBreadcrumbs(),e.setState({loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.campaignActions.setNewItem(null)}},{key:"setBreadcrumbs",value:function(){if(this.props.record){var e=[{text:D.default._t("CampaignAdmin.CAMPAIGN","Campaigns"),href:this.props.sectionConfig.url}];e.push({text:this.props.record.Name,href:this.props.sectionConfig.url+"/set/"+this.props.campaignId+"/show"}),this.props.breadcrumbsActions.setBreadcrumbs(e)}}},{key:"getSelectedItem",value:function(){var e=this.props.campaign.changeSetItemId,t=this.getItems()||[],n=null;if(e&&(n=t.find(function(t){return e===t.ID})),!n){var a=this.groupItemsForSet(),r=Object.keys(a).find(function(e){return a[e]&&a[e].items.length>0});n=r?a[r].items[0]:null}return n}},{key:"getMoreActions",value:function(){var e=this.getSelectedItem();if(!e)return null;var t=e._links&&e._links.referenced_by,n=t&&t.length||0,a=D.default._t("CampaignAdmin.UNREMOVEABLE_INFO","Required by {number} item(s), and cannot be removed directly.");return["explicitly"===e.Added?m.default.createElement("button",{key:"remove_action",className:"btn btn-secondary action",onClick:this.handleRemoveItem},"Remove"):m.default.createElement("p",{key:"unremoveable_info",className:"alert alert-info campaign-admin__unremoveable-item"},m.default.createElement("span",{className:"font-icon-link"}),D.default.inject(a,{number:n}))]}},{key:"getItems",value:function(){return this.props.record&&this.props.record._embedded?this.props.record._embedded.items:null}},{key:"getPlaceholderGroups",value:function(){var e={};return this.props.record&&this.props.record.placeholderGroups&&this.props.record.placeholderGroups.forEach(function(t){e[t.baseClass]=p({},t),e[t.baseClass].items=[].concat(i(t.items))}),e}},{key:"groupItemsForSet",value:function(){var e=this.getPlaceholderGroups(),t=this.getItems();return t?(t.forEach(function(t){var n=t.BaseClass;e[n]||(e[n]={singular:t.Singular,plural:t.Plural,items:[]}),e[n].items.push(t)}),e):e}},{key:"isRecordLoaded",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;return 0!==Object.keys(e.record).length}},{key:"handleRemoveItem",value:function(){"function"==typeof this.props.onRemoveCampaignItem&&this.props.onRemoveCampaignItem(this.props.campaignId,this.getSelectedItem().ID)}},{key:"handleItemSelected",value:function(e,t){this.props.campaignActions.selectChangeSetItem(t)}},{key:"handleCloseItem",value:function(){this.props.campaignActions.selectChangeSetItem(null)}},{key:"handlePublish",value:function(e){e.preventDefault(),this.props.campaignActions.publishCampaign(this.props.publishApi,this.props.treeClass,this.props.campaignId)}},{key:"renderButtonToolbar",value:function(){var e=this.getItems(),t=null;return e&&0!==e.length?"open"===this.props.record.State&&(t={title:D.default._t("CampaignAdmin.PUBLISHCAMPAIGN","Publish campaign"),buttonStyle:"primary",loading:this.props.campaign.isPublishing,onClick:this.handlePublish,icon:"rocket"}):t={title:D.default._t("CampaignAdmin.PUBLISHCAMPAIGN","Publish campaign"),buttonStyle:"secondary-outline",icon:"rocket",disabled:!0},t?m.default.createElement("div",{className:"btn-toolbar"},m.default.createElement(R.default,t)):null}},{key:"renderPreview",value:function(e,t){var n=null,a=(0,H.default)(["flexbox-area-grow","fill-height","preview","campaign-admin__campaign-preview","campaign-admin__campaign-preview--empty"]);if(this.state.loading)n=m.default.createElement("div",{className:a},m.default.createElement("p",null,D.default._t("CampaignAdmin.LOADING","Loading...")));else if(this.getItems()&&0!==this.getItems().length)n=m.default.createElement(L.default,{itemLinks:e,itemId:t,onBack:this.handleCloseItem,moreActions:this.getMoreActions()});else{var r=D.default._t("CampaignAdmin.SELECTFROMSECTIONS",'Select "Add to Campaign" from pages, files, and other admin sections with content types');n=m.default.createElement("div",{className:a},m.default.createElement("h2",{className:"campaign-admin__empty-heading"},"Getting started"),m.default.createElement("p",{className:"campaign-admin__empty-info"},r))}return n}},{key:"render",value:function(){var e=this,t=this.props.campaign.changeSetItemId,n=null,a=t?"":"campaign-admin__campaign--hide-preview",r=this.props.campaignId,i=this.props.record,o=this.props.newItem,s=this.groupItemsForSet(),l=[],c=this.getSelectedItem(),u=c&&c._links&&c._links.references||[],p=c&&c._links&&c._links.referenced_by||[];Object.keys(s).forEach(function(a){var o=s[a],c=o.items.length,d=[],f="\n        "+(0===c?"":c)+"\n        "+(1===c?o.singular:o.plural)+"\n      ",h="Set_"+r+"_Group_"+a;o.items.forEach(function(a,r){t||(t=a.ID);var o=t===a.ID;o&&a._links&&(n=a._links);var s=[];"none"!==a.ChangeType&&"published"!==i.State||s.push("list-group-item--inactive"),o&&s.push("active");var l=!!u.find(function(e){return e.ChangeSetItemID===parseInt(a.ID,10)});l=l||p.find(function(e){return e.ChangeSetItemID===a.ID}),d.push(m.default.createElement(T.default,{key:a.ID||r,className:s.join(" "),onClick:e.handleItemSelected,onClickArg:a.ID},m.default.createElement(x.default,{item:a,campaign:e.props.record,selected:o,isLinked:l})))});var g=(0,H.default)("list-group-wrapper",{"list-group-wrapper--empty":0===d.length});l.push(m.default.createElement("div",{className:g,key:h},m.default.createElement(w.default,{groupid:h,title:f},d.length>0?d:m.default.createElement("p",{className:"list-group-item"},o.noItemsText))))});var d=o?m.default.createElement("p",{className:"alert alert-success alert--no-border",role:"alert"},D.default._t("CampaignAdmin.NEWCAMPAIGNSUCCESS","Nice one! You have successfully created a campaign.")):null,f=m.default.createElement(A.default,null,l),h=["panel","panel--padded","panel--scrollable","flexbox-area-grow"],g=this.props.loading&&[m.default.createElement("div",{key:"overlay",className:"cms-content-loading-overlay ui-widget-overlay-light"}),m.default.createElement("div",{key:"spinner",className:"cms-content-loading-spinner"})];return m.default.createElement("div",{className:"fill-width campaign-admin__campaign "+a},g,m.default.createElement("div",{className:"fill-height campaign-admin__campaign-items","aria-expanded":"true"},m.default.createElement(N.default,{showBackButton:!0,onBackButtonClick:this.props.onBackButtonClick},m.default.createElement(j.default,{multiline:!0})),d,m.default.createElement("div",{className:h.join(" ")},f),m.default.createElement("div",{className:"toolbar toolbar--south"},this.renderButtonToolbar())),this.renderPreview(n,t))}}]),t}(f.Component);V.propTypes={campaign:m.default.PropTypes.shape({isPublishing:m.default.PropTypes.bool,changeSetItemId:m.default.PropTypes.number}),publishApi:m.default.PropTypes.func.isRequired,record:m.default.PropTypes.object.isRequired,sectionConfig:m.default.PropTypes.object.isRequired,onBackButtonClick:m.default.PropTypes.func,onRemoveCampaignItem:m.default.PropTypes.func,breadcrumbsActions:m.default.PropTypes.object.isRequired,campaignActions:m.default.PropTypes.object.isRequired,recordActions:m.default.PropTypes.object.isRequired},V.defaultProps={},t.Component=V,t.default=(0,g.connect)(c,u)(V)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments[1];switch(t.type){case c.default.SET_CAMPAIGN_SELECTED_CHANGESETITEM:return(0,s.default)(Object.assign({},e,{changeSetItemId:t.payload.changeSetItemId}));case c.default.SET_CAMPAIGN_ACTIVE_CHANGESET:return(0,s.default)(Object.assign({},e,{campaignId:t.payload.campaignId,view:t.payload.view,changeSetItemId:null}));case c.default.PUBLISH_CAMPAIGN_REQUEST:return(0,s.default)(Object.assign({},e,{isPublishing:!0}));case c.default.PUBLISH_CAMPAIGN_SUCCESS:case c.default.PUBLISH_CAMPAIGN_FAILURE:return(0,s.default)(Object.assign({},e,{isPublishing:!1}));case c.default.SET_NEW_CAMPAIGN:return(0,s.default)(i({},e,{newItem:t.payload.newItem}));case c.default.SET_SHOW_MESSAGE:return(0,s.default)(i({},e,{showMessage:t.payload.show}));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(26),s=a(o),l=n(2),c=a(l),u=window.localStorage.getItem("campaign.showMessage"),p=(0,s.default)({campaignId:null,changeSetItemId:null,isPublishing:!1,view:null,newItem:null,showMessage:null===u});t.default=r},function(e,t){e.exports=Accordion},function(e,t){e.exports=AccordionBlock},function(e,t){e.exports=Backend},function(e,t){e.exports=Config},function(e,t){e.exports=DeepFreezeStrict},function(e,t){e.exports=FormBuilderLoader},function(e,t){e.exports=ListGroupItem},function(e,t){e.exports=Preview},function(e,t){e.exports=ReactBootstrap},function(e,t){e.exports=ReactRouteRegister},function(e,t){e.exports=RecordsActionTypes},function(e,t){e.exports=ReduxForm},function(e,t){e.exports=classnames},function(e,t){e.exports=formatWrittenNumber},function(e,t){e.exports=getFormState}]);