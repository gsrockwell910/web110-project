"use strict";


runClock(); // Create and call a function that keeps track of the current day and time
setInterval("runClock()", 1000); // Delay/ Run a command at specified interval


function runClock() { 
  // Include a countdown function
   var currentDay = new Date();

   var dateStr = currentDay.toLocaleDateString(); // Convert between a number and a text
   var timeStr = currentDay.toLocaleTimeString();


   var newYear = new Date("August 1, 2024");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);


   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24; // Use a Math method
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;


   document.getElementById("days").textContent = Math.floor(daysLeft) + " :";
   document.getElementById("hrs").textContent = Math.floor(hrsLeft) + " :";
   document.getElementById("mins").textContent = Math.floor(minsLeft) + " :";
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}

function message() {
  window.alert("That's right, Dinosaurs! Cloned from real ethically sourced fossils."); // Send an alert using js
  document.body.style.backgroundImage = "url('pics/dino.avif')";
  document.body.style.color = "#ADD7F6";
}