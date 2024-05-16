function scrollToDiv() {
    // 获取目标元素
    var targetDiv = document.getElementById('section-ad-id');
    // 滚动到目标元素
    targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
 


//趋动云价格弹框

const chakandingjia = document.getElementsByClassName('chakandingjia_class');
Array.from(chakandingjia).forEach(element => {
    element.addEventListener('click', function() {
        const modal = document.getElementsByClassName('modal')[0];
        modal.style.display = "block";
    });   
});

const closeButton = document.querySelector('.modal .close'); // Correctly select the close button
closeButton.addEventListener('click', function() {
    const modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none'; // Hide the modal
});

// Existing hover effect script, assuming you have an element with the class 'hover-area'
const hoverArea = document.querySelector('.hover-area');
const lightDot = document.querySelector('.light-dot');

if (hoverArea && lightDot) {
    hoverArea.addEventListener('mousemove', function (e) {
        lightDot.style.opacity = 1;
        lightDot.style.top = `${e.clientY - 10}px`;
        lightDot.style.left = `${e.clientX - 10}px`;
    });

    hoverArea.addEventListener('mouseleave', function () {
        lightDot.style.opacity = 0;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector('.modal'); // Get the modal
    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }
    // Event listener for modal click
    modal.addEventListener('click', function(event) {
        if (event.target === modal) { // Check if the click was on the modal but not on the container
            closeModal();
        }
    });

});
