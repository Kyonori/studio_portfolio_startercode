 var config = {
     apiKey: "AIzaSyDD3pV6bk663L_x5nPtNC6TnveaKawgXYM",
     authDomain: "my-first-project-f189a.firebaseapp.com",
     databaseURL: "https://my-first-project-f189a.firebaseio.com",
     projectId: "my-first-project-f189a",
     storageBucket: "my-first-project-f189a.appspot.com",
     messagingSenderId: "363265234191"
 };

 firebase.initializeApp(config);

 var database = firebase.database();
 var projects_ref = database.ref('/projects');

 projects_ref.once('value', function(snapshot) {
     var projects = snapshot.val();
     console.log(projects);

     for (var i in projects) {
         var div = $("<div class='col-md-3'>");
         var title = $('<h3>');
         var img = $("<img class='img-fluid' src=" + projects[i].image_url + ">");
         var simg = $("<a href=" + projects[i].site_url + " ></a>");
         simg.append(img)
         title.text(projects[i].title);
         div.append(title);
         div.append(simg);
         $("#projects").append(div);
         
     }
 });
 var projects = snapshot.val();
 