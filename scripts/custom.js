'use strict';

// Sidebar toggling
let sidebar_toggler = document.querySelector('.navbar--trigger__inner');
let notifications_toggler = document.querySelector('.top .zmdi-notifications');
let messages_toggler = document.querySelector('.top .zmdi-email');
let user_togger = document.querySelector('.top .user__img');
let business_toggler = document.querySelector('.business .business__info');
let search_toggler = document.querySelector('.top .zmdi-search');
let search_toggler2 = document.querySelector('.search-box .zmdi-search');

search_toggler.addEventListener('click', toggleSearch);
sidebar_toggler.addEventListener('click', toggleSidebar);
notifications_toggler.addEventListener('click', toggleNotifications);
messages_toggler.addEventListener('click', toggleMessages);
user_togger.addEventListener('click', toggleUserProfile);
business_toggler.addEventListener('click', toggleBusiness);

search_toggler2.addEventListener('click', closeSearchBox);

function toggleSearch() {
	let toggler = document.querySelector('.search-box');
	if(!toggler) return; 
	toggler.classList.add('toggled');
}

function toggleSidebar() {
	let sidebar = document.querySelector('.sidebar');
	console.log(sidebar);
	if(!sidebar) return; 
	sidebar.classList.toggle('open');
	console.log(`Clicked on sidebar_toggler`);
}

function toggleNotifications() {
	let notifications_toggler2 = document.querySelector('.top .dropdown-menu__block');
	notifications_toggler2.classList.toggle('open');
	console.log(`Clicked on notifications_toggler`)
}


function toggleMessages() {
	console.log(`Clicked on messages_toggler`);
}

function toggleUserProfile() {
	console.log(`Clicked on user_togger`);
}

function toggleBusiness() {
	console.log(`Clicked on business_toggler`)
}

function closeSearchBox() {
	let toggler = document.querySelector('.search-box');
	if(!toggler) return; 
	toggler.classList.remove('toggled');
}