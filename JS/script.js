

// Constants and State Variables (Data)

// Constant Data
const base_url='https://cors-anywhere.herokuapp.com/https://www.wikia.com/api/v1/Wikis/ByString?expand=1&string='

let wiki;


// cached elements

const $wikis = $('#wikis')
// Attached Event Listeners

$('form').on('submit', getData)




function getData(evt){
    evt.preventDefault()

    const search = $('#search').val()
    
    const data = $.ajax({url:`${base_url}${search}&lang=en%2C+es&limit=10&batch=1&includeDomain=true/`,

    })
        .then(
            (data)=>{
                console.log(data)
                wiki=data
                render()
                
        },
        (error)=> {
            console.log("bad request: ", error)
          }
    )
}

function render(){
    const dataArray = wiki.items.map(wiki=> {
        return`
        <article class="wiki">
        <a href="${wiki.url}" target="_blank"><img class="logo" src="${wiki.image}"><img class="logo" src="${wiki.wordmark}">
            <h3 id="name">${wiki.name}</h3>
        </a>

        <p id="lang"><strong>Language: </strong>${wiki.lang}</p>
        <p id="users"><strong>Users: </strong>${wiki.stats.users}</p>
        <p id="details" class = 'description' ><strong>Details: </strong>${wiki.desc}</p>
    </article>
        `
    })
    $wikis.html(dataArray)
    $(document).ready(function() {
	
		$(".description").shorten({
            "showChars" : 150,
            "moreText": "Read More",
            "lessText" : "Read Less",

        });
	
	});

}

// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "./CSS/light-theme.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "./CSS/style.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "./CSS/light-theme.css";
  }
});