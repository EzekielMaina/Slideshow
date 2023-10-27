window.onload = initBannerLink;
var theAd = 0;
var adURL = new Array("https://www.cairn.info/revue-journal-of-innovation-economics-2013-2-page-59.htm",
                    "https://verbit.ai/positive-effects-of-technology-on-education-make-a-bigger-impact/#:~:text=A%20key%20positive%20impact%20of,or%20help%20each%20other%20offline.",
                    "https://www.ifourtechnolab.com/blog/technology-s-impact-on-the-legal-profession-a-double-edged-sword#:~:text=First%2C%20technological%20advances%20can%20automate,put%20downward%20pressure%20on%20fees.",
                    "https://www.enstep.com/blog/business-technology/impact-manufacturing-industry/#:~:text=Technological%20Advancements%20in%20Manufacturing&text=Big%20data%2C%20IoT%2C%20and%20cloud,%2C%20long%2Dterm%20manufacturing%20practices.",
                    "https://www.jstor.org/stable/3484319",
                    "https://www.aeologic.com/blog/the-impact-of-emerging-technologies-on-the-transport-system/");
var adImages = new
Array("defense.jpg","education.jpg","law.jpg","manufacturing.jpg","trading.jpg","transport.jpg");

var adTitles = [
    "Technology trends in Defense",
    "Technology trends in Education",
    "Technology trends in Law",
    "Technology trends in Manufacturing",
    "Technology trends in Trading",
    "Technology trends in Transport"
  ];
  
  function initBannerLink() {
    if (document.getElementById("adBanner").parentNode.tagName == "A") {
      document.getElementById("adBanner").parentNode.onclick = newLocation;
    }
    rotate();
    updateImageTitle(); // Call the function to display the image title
  }
  
  function newLocation() {
    document.location.href = adURL[theAd];
    return false;
  }
  
  function rotate() {
    theAd++;
    if (theAd == adImages.length) {
      theAd = 0;
    }
    document.getElementById("adBanner").src = adImages[theAd];
    updateImageTitle(); // Call the function to update the image title
    setTimeout(rotate, 3 * 1000);
  }
  
  function updateImageTitle() {
    document.getElementById("adTitle").textContent = adTitles[theAd];
  }
