import React from 'react';
import "./style.css";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

function BackToTop() {

    let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, it scroll to the top of the page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  return (
    <div className='back-to-top-btn' id='myBtn' onClick={() => topFunction()}>
        <ArrowUpwardOutlinedIcon />
    </div>
  )
}

export default BackToTop;