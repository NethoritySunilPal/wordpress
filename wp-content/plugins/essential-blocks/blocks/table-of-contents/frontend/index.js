(()=>{function e(e,o){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,o){if(e){if("string"==typeof e)return t(e,o);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(e))||o&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}window.addEventListener("DOMContentLoaded",(function(){var t=function(e){if(!e)return e;var t=e.toString().toLowerCase().replace(/&(amp;)/g,"").replace(/&(mdash;)/g,"").replace(/\u2013|\u2014/g,"").replace(/[&]nbsp[;]/gi,"-").replace(/\s+/g,"-").replace(/[&\/\\#,^!+()$~%.'":*?<>{}@‘’”“]/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return decodeURIComponent(encodeURIComponent(t))};({init:function(){this._run(),this._scroll(),this._toggleCollapse(),this._scrollToTop(),this._hide(),this._show(),this._hideOnMobileView(),this._hideOnDevice(),this._tooltip(),this._itemCollapsed()},_tooltip:function(){var t,o=e(document.querySelectorAll(".eb-toc-container"));try{for(o.s();!(t=o.n()).done;){var n=t.value;if(n&&"true"==n.getAttribute("data-copy-link")){var r,a=e(document.querySelectorAll(".eb-tooltip"));try{var i=function(){var e=r.value;e&&(e.parentNode.parentNode.addEventListener("mouseenter",(function(t){e.style.display="inline-block"})),e.parentNode.parentNode.addEventListener("mouseleave",(function(t){e.style.display="none",this.getElementsByClassName("eb-tooltiptext")[0].style.visibility="hidden"})))};for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}var c,l=e(document.querySelectorAll(".eb-tooltip"));try{for(l.s();!(c=l.n()).done;){var s=c.value;s&&s.addEventListener("click",(function(e){this.children[0].style.visibility="visible"}))}}catch(e){l.e(e)}finally{l.f()}}}}catch(e){o.e(e)}finally{o.f()}},_toggleCollapse:function(){var t,o=e(document.querySelectorAll(".eb-toc-container"));try{var n=function(){var e=t.value,o="true"===e.getAttribute("data-sticky");if("true"===e.getAttribute("data-collapsible")){var n=e.querySelector(".eb-toc-title"),r=e.querySelector(".eb-toc-wrapper");o||n.addEventListener("click",(function(){r.classList.toggle("hide-content")}))}};for(o.s();!(t=o.n()).done;)n()}catch(e){o.e(e)}finally{o.f()}},_itemCollapsed:function(){var t,o=e(document.querySelectorAll(".eb-toc-container"));try{for(o.s();!(t=o.n()).done;){var n=t.value;if("true"===n.getAttribute("data-itemCollapsed")){var r,a=e(n.querySelectorAll(".eb-toc-wrapper .eb-toc__list-wrap > .eb-toc__list > li"));try{var i=function(){var e=r.value,t=(e.querySelector("a"),e.querySelector("svg"));null!==e.querySelector(".eb-toc__list")&&t.addEventListener("click",(function(){e.classList.toggle("hide-items")}))};for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}}}}catch(e){o.e(e)}finally{o.f()}},_scrollToTop:function(){var t,o,n=document.querySelector(".eb-toc-container"),r=n&&"true"==n.getAttribute("data-scroll-top"),a=n&&"true"==n.getAttribute("data-sticky"),i=n.getAttribute("data-scroll-target"),c=document.querySelector(".eb-toc-wrapper").getAttribute("data-top-offset"),l=n.getAttribute("data-scroll-top-icon");if(r){var s=function(){u.classList.remove("show-scroll"),u.classList.add("hide-scroll")},d=function(){document.body.scrollTop>30||document.documentElement.scrollTop>20?(u.classList.remove("hide-scroll"),u.classList.add("show-scroll")):s()},u=document.createElement("span");u.setAttribute("class","eb-toc-go-top"),u.innerHTML=(t=l.includes("fa-")?"fontawesome":"dashicon",o=l,"dashicon"===t?'<span class="dashicon dashicons '+o+' "></span>':"fontawesome"===t?'<i class="'+o+' "></i>':"Invalid icon type"),document.body.insertBefore(u,document.body.lastChild),u.addEventListener("click",(function(){if(a||"scroll_to_toc"!==i)window.scroll({top:0,left:0,behavior:"smooth"});else{var e=c?-Math.abs(c):0,t=n.getBoundingClientRect().top+window.pageYOffset+e;window.scroll({top:t,behavior:"smooth"})}}));var f,v=e(document.querySelectorAll(".eb-toc-container"));try{for(v.s();!(f=v.n()).done;)"true"===f.value.getAttribute("data-scroll-top")?(window.addEventListener("scroll",d),s()):s()}catch(e){v.e(e)}finally{v.f()}}},_scroll:function(){var t,o=e(document.querySelectorAll(".eb-toc-wrapper"));try{var n=function(){var e=t.value,o="true"===e.getAttribute("data-smooth"),n=parseFloat(e.getAttribute("data-top-offset"));if(o){var r=e.querySelectorAll('a[href^="#"]');r.forEach((function(e){e.addEventListener("click",(function(e){var t=this.getAttribute("href").replace("#","");if(e.preventDefault(),"number"==typeof n&&n){var o=n?-Math.abs(n):0,a=document.getElementById(t).getBoundingClientRect().top+window.pageYOffset+o;window.scrollTo({top:a,behavior:"smooth"})}else document.getElementById(t).scrollIntoView({behavior:"smooth"});r.forEach((function(e){e.parentNode.classList.remove("eb-toc-active","recent")})),this.parentNode.classList.add("recent");for(var i=e.target.closest("li");i;)i.classList.add("eb-toc-active"),i=i.parentElement.closest("li")}))}));var a=window.location.hash,i=a.slice(1);if(a&&"number"==typeof n&&n){var c=n?Math.abs(n):0;document.getElementById(i).style.scrollMarginTop=c+"px"}}};for(o.s();!(t=o.n()).done;)n()}catch(e){o.e(e)}finally{o.f()}},_hide:function(){var t,o=e(document.querySelectorAll(".eb-toc-close"));try{var n=function(){var e=t.value;e.addEventListener("click",(function(){var t=e.closest(".eb-toc-container");t.classList.add("eb-toc-content-hidden"),t.classList.remove("eb-toc-content-visible")}))};for(o.s();!(t=o.n()).done;)n()}catch(e){o.e(e)}finally{o.f()}},_show:function(){var t,o=e(document.querySelectorAll(".eb-toc-button"));try{var n=function(){var e=t.value;e.addEventListener("click",(function(){var t=e.closest(".eb-toc-container");t.classList.remove("eb-toc-content-hidden"),t.classList.add("eb-toc-content-visible")}))};for(o.s();!(t=o.n()).done;)n()}catch(e){o.e(e)}finally{o.f()}},_run:function(){var o,n=e(document.querySelectorAll(".eb-toc-container"));try{var r=function(){var e=o.value;if(e){var n=e.style.border;window.ebTocBorder=n}var r=e&&"true"==e.getAttribute("data-copy-link")?'<span class="eb-tooltip dashicons dashicons-clipboard"><span class="eb-tooltiptext">Copied!</span></span></span>':"",a=document.querySelector(".eb-toc-wrapper");if(a){var i=JSON.parse(a.getAttribute("data-headers")),c=JSON.parse(a.getAttribute("data-visible")),l=JSON.parse(a.getAttribute("data-delete-headers")),s=[];void 0!==c&&c.forEach((function(e,t){return!0===e?s.push("h"+(t+1)):null}));var d=null!==s?s.join(","):"",u=void 0!==d&&""!==d?document.body.querySelectorAll(d):document.body.querySelectorAll("h1, h2, h3, h4, h5, h6");void 0!==i&&0!==u.length&&i.forEach((function(e,o){var n,a=t(e.text);!l||null!==(n=l[o])&&void 0!==n&&n.isDelete?u.forEach((function(o){var n=t(o.textContent);0===a.localeCompare(n)&&(o.innerHTML='<span id="'.concat(e.link,'" class="eb-toc__heading-anchor"></span>').concat(o.innerHTML))})):u.forEach((function(o,n){var i,c=t(o.textContent);0===a.localeCompare(c)&&(i=e.link,!!/^[A-Za-z][-A-Za-z0-9_:.]*$/.test(i)&&i&&new ClipboardJS("#".concat(e.link)),o.innerHTML="".concat(o.innerHTML,'<span id="').concat(e.link,'"\n                                    class="eb-toc__heading-anchor" data-clipboard-text="').concat(location.protocol+"//"+location.host+location.pathname+(location.search?location.search:""),"#").concat(e.link,'">').concat(r,"</span>"))}))}))}};for(n.s();!(o=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}},_hideOnMobileView:function(){var e=document.querySelector(".eb-toc-container");if(e){var t="true"===e.getAttribute("data-sticky"),o="true"==e.getAttribute("data-sticky-hide-mobile");t&&o&&window.screen.width<420&&(e.style.display="none")}},_hideOnDevice:function(){var e=document.querySelector(".eb-toc-container");if(e){var t="true"===e.getAttribute("data-hide-desktop"),o="true"===e.getAttribute("data-hide-tab"),n="true"==e.getAttribute("data-hide-mobile"),r=document.querySelector(".eb-toc-go-top");t&&window.screen.width>1024&&(r.style.display="none"),o&&window.screen.width<1024&&window.screen.width>420&&(r.style.display="none"),n&&window.screen.width<420&&(r.style.display="none")}}}).init()}))})();