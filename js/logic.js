function onPhotoDataSuccess(imageData) {
    if (document.getElementById('nog-geen-foto')) {
        element = document.getElementById('nog-geen-foto');
        element.parentNode.removeChild(element);
    } 

    $('.foto-frame').css('background','#ffffff');

	myImage = document.getElementById('foto');
    myImage.src = "data:image/jpeg;base64," + imageData;
}

function onFail() {
	//
}

function testCam() {
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { 
		quality: 50,
		destinationType: Camera.DestinationType.DATA_URL 
	});
}

var app = {
    // Application Constructor
    initialize: function() {
    	console.log('initializing...');
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        navigator.notification.alert(
		        'Cordova is ready!',       // message
		        function() {},  // callback
		        'Congratulations',            // title
		        'Done'                      // buttonName
		       );
    }
};