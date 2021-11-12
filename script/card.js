// console.log("card is working")

var carDetails = [
  {
    name: "Maruti Brezza",
    price: 823,
    image:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/6a75117e054e7d3bbe9ff6e431008679994c1d71.png?1584525114",
    rating: "★★★★☆",
  },
  {
    name: "Hyundai Verna",
    price: 1102,
    image:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/9ee2b2607b222eb1162a85c59cb7224527a0dd21.png?1584525031",
    rating: "★★★★☆",
  },
  {
    name: "Mahindra Marazoo",
    price: 1054,
    image:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/0cd4260691b39e32cfc2622496fb431e0b94f110.png?1584524343",
    rating: "★★★★☆",
  },
  {
    name: "Hundai Creta",
    price: 985,
    image:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/20070f9f819b45a90da8e67f51b2d76b59e6c8e7.png?1584525395",
    rating: "★★★★☆",
  },
  {
    name: "Tata Nexon",
    price: 832,
    image:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/a8c9309fefc057459e0955d0a5f54340b7cd7bcb.png?1584524824",
    rating: "★★★★☆",
  },
  {
    name: "Maruti Swift AT",
    price: 795,
    image:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/b181fa4f49687de9d7e7b7a23f736d202cf2bbff.png?1584514541",
    rating: "★★★★☆",
  },
];

localStorage.setItem("car_details", JSON.stringify(carDetails));

var car_details = JSON.parse(localStorage.getItem("car_details"))
console.log(car_details)

var data_div = document.querySelector("#carData")


function showProduct() {
  
  car_details.forEach(function(product) {
    var main = document.createElement("div");

    var imgDiv = document.createElement("div");
    var img = document.createElement("img");
    img.src = product.image
    imgDiv.append(img)

    var detailsDiv = document.createElement("div")

    var h3 = document.createElement("h3")
    h3.innerText = product.name


    var p = document.createElement("p")
    p.innerText ="Price "+ "₹" + product.price;

    var rating = document.createElement("p")
    rating.innerText = product.rating


      let btn = document.createElement("button");
      btn.setAttribute("id", "bookNow");
      btn.innerText = "Book Now";
      btn.onclick = function () {
        bookNow();
    };
    


    var hr =document.createElement("hr")

    detailsDiv.append(h3, p, rating ,btn)
    
    main.append(imgDiv, detailsDiv )
    data_div.append(main,hr)

    
  })

 

  
}

showProduct();
 


if (localStorage.getItem("DriveCar") === null) {
  localStorage.setItem("DriveCar", JSON.stringify([]));
}

// function bookNow(p) {
//    let car_data = JSON.parse(localStorage.getItem("DriveCar"));
//     car_data.push(p);

//     localStorage.setItem("DriveCar", JSON.stringify(car_data))
// }
function bookNow() {
  var div = document.getElementById("chekeOut");
  
  var data = document.getElementById("carData")
  data.innerHTML = null;

  div.innerHTML = ` <div class="container">
        <div class="row justify-content-center">
            <div class="col-6 mt-4 " style="display: flex; background-color: gainsboro;">
                <h3>Brizaa MT-Desel</h3>
                <img style="width: 100px; height: 100px; margin-left: 140px;" src="https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/6a75117e054e7d3bbe9ff6e431008679994c1d71.png?1584525114" alt="">
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg><span>Fri, Nov,08:30 <br>
            Sadahalli,Kempegoda International Airport Road</span></p>


            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
</svg><span>sat, Nov,02:30 <br>
            Sadahalli,Kempegoda International Airport Road</p>



            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H5Zm.5 14a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM5.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"/>
</svg><span> 72 Kms without Fule</span> </span></p>


            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><span> 4.7(52) . 87,900 kms driven</span></p>
            </div>
        </div>
    </div>




    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
                <h3>total = ₹823</h3>
                <button style="background-color: green; font-size: medium; font-weight: 400;width: 100%;">CheckOut Summery</button>
            </div>
        </div>
    </div>
   `;
}

