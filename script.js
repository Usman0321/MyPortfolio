
var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tablink of tabContents){
        tablink.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab")
}

var sideMenu = document.getElementById("sidemenu");

function openmenu(){
    sideMenu.style.right = "0";
}
function closemenu(){
    sideMenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby-y_hAOkWbpNiZ2V7UrUyXfKrNRRGfuOmy3hW2fvxEaGcy96jGMDnVL2B_xQ6GLXVnuQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("toast-box");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message successfully sended!❤';
        msg.appendChild(toast);
        setTimeout(()=>{
            toast.remove();
        },6000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })


  window.addEventListener("load",()=>{
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transition", ()=> {
      document.body.removeChild("loader");
    })
  })



  var typed = new Typed('#element', {
    strings: ['MS Office Expert.','Web Developer.','UI Designer.','Video Editer.','Mobile Repairer.'],
    typeSpeed: 100,
  });