rules_version = '2';
service firebase.storage {

  match /b/{bucket}/o {
  
      match /imgsPosts/{allPaths=**} {
        allow read, write: if true;
      }
      match /imgsPosts/{userId}/{imgId} {
          allow write: if request.size < 6 * 1024 * 1024
                        && request.auth.uid != null
                        && request.auth.uid == userId;
      }
      
  }
}


&& request.resource.contentType.matches('image/.*')
& request.resource.contentType.matches('video/.*')