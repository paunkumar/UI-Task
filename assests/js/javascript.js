$(document).ready(function(){
  
	 $("#sidebar-toggle").click(function(e) {
	    e.preventDefault();
	    $("#wrapper").toggleClass("toggled");
	});
  
   //menu active
      var url = window.location; 
      var element = $('ul.sidebar-nav a').filter(function() {
      return this.href == url || url.href.indexOf(this.href) == 0; }).parent().addClass('active');
      if (element.is('li')) { 
           element.addClass('active').parent().parent('li').addClass('active')
       }
       $('#sidebarCollapse').on('click', function () {
         $('#sidebar').toggleClass('active');
     });
 
});
    	