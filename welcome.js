var nameV, contactV, openTimeV, closeTimeV, servicesV, locationV, ratingV, linkV, imgV;

function readFom() {
  nameV = document.getElementById("name").value;
  contactV = document.getElementById("contact").value;
  openTimeV = document.getElementById("openTime").value;
  closeTimeV = document.getElementById("closeTime").value;
  servicesV = document.getElementById("services").value;
  locationV = document.getElementById("location").value;
  ratingV = document.getElementById("rating").value;
  linkV = document.getElementById("link").value;
  imgV = document.getElementById("img").value;
  
  console.log(nameV, contactV, openTimeV, closeTimeV, servicesV, locationV, ratingV, linkV, imgV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("GYM/" + nameV)
    .set({
      name: nameV,
      contact: contactV,
      openTime: openTimeV,
      closeTime: closeTimeV,
      services: servicesV,
      location: locationV,
      rating: ratingV,
      link: linkV,
      img: imgV,
    });
  
  alert("Data Inserted");

  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("openTime").value = "";
  document.getElementById("closeTime").value = "";
  document.getElementById("services").value = "";
  document.getElementById("location").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("link").value = "";
  document.getElementById("img").value = "";
};
