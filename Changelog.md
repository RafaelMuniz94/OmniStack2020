# [0.0.16] - 01/09/2020
## JWT Token
## Authorization Service
## Type Express overwrite
## Session Route
## Authorization Middleware
## Authorization Middleware included in Appointments route

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        modified:   Semana 2/node/package.json
        new file:   Semana 2/node/src/@types/express.d.ts
        new file:   Semana 2/node/src/middlewares/ensureAuthenticated.ts
        modified:   Semana 2/node/src/routes/appointments.routes.ts
        modified:   Semana 2/node/src/routes/index.ts
        new file:   Semana 2/node/src/routes/sessions.routes.ts
        new file:   Semana 2/node/src/services/AuthenticateUserService.ts
        modified:   Semana 2/node/yarn.lock

---

# [0.0.15] - 31/08/2020
## Add bcrypitJS dependency
## Create Hash password
## Fix Appointment Creation route

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 2/node/package.json
        modified:   Semana 2/node/src/routes/appointments.routes.ts
        modified:   Semana 2/node/src/routes/index.ts
        new file:   Semana 2/node/src/routes/users.routes.ts
        modified:   Semana 2/node/src/services/CreateAppointmentService.ts
        new file:   Semana 2/node/src/services/CreateUserService.ts
        new file:   Semana 2/node/yarn-error.log
        modified:   Semana 2/node/yarn.lock

---

# [0.0.14] - 31/08/2020
## Change Provider to Provider_ID
## Create User Model and Migration
## Create Many to One Relationship between Appointment and User

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 2/node/src/database/migrations/1598819008070-CreateAppointments.ts
        new file:   Semana 2/node/src/database/migrations/1598917118367-Users.ts
        new file:   Semana 2/node/src/database/migrations/1598920821694-AlterProvidertoProviderID.ts
        modified:   Semana 2/node/src/model/Appointments.ts
        new file:   Semana 2/node/src/model/Users.ts

---

# [0.0.13] - 30/08/2020
## Inclusion of Entities metadata at ormconfig
## Inclusion of reflect-metadata to create metadata
## Async functions calls fix

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 2/node/ormconfig.json
        modified:   Semana 2/node/package.json
        modified:   Semana 2/node/src/database/migrations/1598819008070-CreateAppointments.ts
        modified:   Semana 2/node/src/model/Appointments.ts
        modified:   Semana 2/node/src/repositories/AppointmentsRepository.ts
        modified:   Semana 2/node/src/routes/appointments.routes.ts
        modified:   Semana 2/node/src/server.ts
        modified:   Semana 2/node/src/services/CreateAppointmentService.ts
        modified:   Semana 2/node/tsconfig.json

---

# [0.0.12] - 30/08/2020
## Changelog typo correction
## Add typeorm
## Add typeorm config
## Create Initial Migration

**Changed Files**

        modified:   Changelog.md
        new file:   Semana 2/node/ormconfig.json
        modified:   Semana 2/node/package.json
        new file:   Semana 2/node/src/database/index.ts
        new file:   Semana 2/node/src/database/migrations/1598819008070-CreateAppointments.ts
        modified:   Semana 2/node/src/server.ts
        modified:   Semana 2/node/yarn.lock

---

# [0.0.11] - 27/08/2020
## SOLID
## Service
## Dependency Inversion

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 2/node/src/model/Appointments.ts
        modified:   Semana 2/node/src/repositories/AppointmentsRepository.ts
        modified:   Semana 2/node/src/routes/appointments.routes.ts
        modified:   Semana 2/node/src/routes/index.ts
        new file:   Semana 2/node/src/services/CreateAppointmentService.ts
        
---

# [0.0.10] - 26/08/2020
## DTO 
## Omit

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 2/node/src/model/Appointments.ts
        modified:   Semana 2/node/src/repositories/AppointmentsRepository.ts
        modified:   Semana 2/node/src/routes/appointments.routes.ts

---

# [0.0.9] - 26/08/2020
## Repository Pattern
## Class Creation
## Router and Routes
## Log Middlware

**Changed Files**

        modified:   .gitignore
        new file:   Desafios/Semana1.md
        new file:   Semana 2/node/package.json
        new file:   Semana 2/node/src/model/Appointments.ts
        new file:   Semana 2/node/src/repositories/AppointmentsRepository.ts
        new file:   Semana 2/node/src/routes/appointments.routes.ts
        new file:   Semana 2/node/src/routes/index.ts
        new file:   Semana 2/node/src/server.ts
        new file:   Semana 2/node/tsconfig.json
        new file:   Semana 2/node/yarn.lock

---

# [0.0.8] - 24/08/2020
## Typescript project creation
## Types 
## Interfaces 

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        new file:   Semana 1/typescript/package.json
        new file:   Semana 1/typescript/src/index.ts
        new file:   Semana 1/typescript/src/route.ts
        new file:   Semana 1/typescript/src/services/CreateUser.ts
        new file:   Semana 1/typescript/tsconfig.json
        new file:   Semana 1/typescript/yarn.lock

---

# [0.0.7] - 23/08/2020
## React Native Project Creation
## RN Component use
## RN integration with node API
## RN IOS APP

**Changed Files**

        modified:   Changelog.md
        new file:   Semana 1/reactNative/.buckconfig
        new file:   Semana 1/reactNative/.flowconfig
        new file:   Semana 1/reactNative/.gitattributes
        new file:   Semana 1/reactNative/.gitignore
        new file:   Semana 1/reactNative/.watchmanconfig
        new file:   Semana 1/reactNative/App.js
        new file:   Semana 1/reactNative/__tests__/App-test.js
        new file:   Semana 1/reactNative/android/app/BUCK
        new file:   Semana 1/reactNative/android/app/build.gradle
        new file:   Semana 1/reactNative/android/app/build_defs.bzl
        new file:   Semana 1/reactNative/android/app/debug.keystore
        new file:   Semana 1/reactNative/android/app/proguard-rules.pro
        new file:   Semana 1/reactNative/android/app/src/debug/AndroidManifest.xml
        new file:   Semana 1/reactNative/android/app/src/debug/java/com/reactnative/ReactNativeFlipper.java
        new file:   Semana 1/reactNative/android/app/src/main/AndroidManifest.xml
        new file:   Semana 1/reactNative/android/app/src/main/java/com/reactnative/MainActivity.java
        new file:   Semana 1/reactNative/android/app/src/main/java/com/reactnative/MainApplication.java
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-hdpi/ic_launcher.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-mdpi/ic_launcher.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png
        new file:   Semana 1/reactNative/android/app/src/main/res/values/strings.xml
        new file:   Semana 1/reactNative/android/app/src/main/res/values/styles.xml
        new file:   Semana 1/reactNative/android/build.gradle
        new file:   Semana 1/reactNative/android/gradle.properties
        new file:   Semana 1/reactNative/android/gradle/wrapper/gradle-wrapper.jar
        new file:   Semana 1/reactNative/android/gradle/wrapper/gradle-wrapper.properties
        new file:   Semana 1/reactNative/android/gradlew
        new file:   Semana 1/reactNative/android/gradlew.bat
        new file:   Semana 1/reactNative/android/settings.gradle
        new file:   Semana 1/reactNative/app.json
        new file:   Semana 1/reactNative/babel.config.js
        new file:   Semana 1/reactNative/index.js
        new file:   Semana 1/reactNative/ios/Podfile
        new file:   Semana 1/reactNative/ios/Podfile.lock
        new file:   Semana 1/reactNative/ios/reactNative-tvOS/Info.plist
        new file:   Semana 1/reactNative/ios/reactNative-tvOSTests/Info.plist
        new file:   Semana 1/reactNative/ios/reactNative.xcodeproj/project.pbxproj
        new file:   Semana 1/reactNative/ios/reactNative.xcodeproj/xcshareddata/xcschemes/reactNative-tvOS.xcscheme
        new file:   Semana 1/reactNative/ios/reactNative.xcodeproj/xcshareddata/xcschemes/reactNative.xcscheme
        new file:   Semana 1/reactNative/ios/reactNative.xcworkspace/contents.xcworkspacedata
        new file:   Semana 1/reactNative/ios/reactNative/AppDelegate.h
        new file:   Semana 1/reactNative/ios/reactNative/AppDelegate.m
        new file:   Semana 1/reactNative/ios/reactNative/Images.xcassets/AppIcon.appiconset/Contents.json
        new file:   Semana 1/reactNative/ios/reactNative/Images.xcassets/Contents.json
        new file:   Semana 1/reactNative/ios/reactNative/Info.plist
        new file:   Semana 1/reactNative/ios/reactNative/LaunchScreen.storyboard
        new file:   Semana 1/reactNative/ios/reactNative/main.m
        new file:   Semana 1/reactNative/ios/reactNativeTests/Info.plist
        new file:   Semana 1/reactNative/ios/reactNativeTests/reactNativeTests.m
        new file:   Semana 1/reactNative/metro.config.js
        new file:   Semana 1/reactNative/package.json
        new file:   Semana 1/reactNative/src/index.js
        new file:   Semana 1/reactNative/src/services/api.js
        new file:   Semana 1/reactNative/yarn.lock

---


# [0.0.6] - 23/08/2020
## Front-End and Back-End integration
## Back-End add Cors
## Babel plugin to work with async/await

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 1/node/package.json
        modified:   Semana 1/node/src/index.js
        modified:   Semana 1/node/yarn.lock
        modified:   Semana 1/react/babel.config.js
        modified:   Semana 1/react/package.json
        modified:   Semana 1/react/src/App.js
        modified:   Semana 1/react/src/Components/Body.js
        new file:   Semana 1/react/src/services/api.js
        new file:   Semana 1/react/yarn-error.log
        modified:   Semana 1/react/yarn.lock

---

# [0.0.5] - 22/08/2020
## React components
## Webpack
## Loaders (CSS,babel,Image)
## State, Immutability and Properties

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        modified:   Semana 1/react/package.json
        deleted:    Semana 1/react/public/bundle.js
        modified:   Semana 1/react/public/index.html
        new file:   Semana 1/react/src/App.js
        new file:   Semana 1/react/src/Assets/background.png
        new file:   Semana 1/react/src/CSS/App.css
        new file:   Semana 1/react/src/Components/Body.js
        new file:   Semana 1/react/src/Components/Footer.js
        new file:   Semana 1/react/src/Components/Header.js
        modified:   Semana 1/react/src/index.js
        deleted:    Semana 1/react/src/soma.js
        new file:   Semana 1/react/src/time.js
        modified:   Semana 1/react/webpack.config.js
        modified:   Semana 1/react/yarn.lock

---

# [0.0.4] - 22/08/2020
## Semana 1 folder inprovement
## React project creation
## Webpack configuration
## Babel configuration

**Changed Files**

        modified:   Changelog.md
        renamed:    Semana 1/package.json -> Semana 1/node/package.json
        renamed:    Semana 1/src/index.js -> Semana 1/node/src/index.js
        renamed:    Semana 1/yarn.lock -> Semana 1/node/yarn.lock
        new file:   Semana 1/react/babel.config.js
        new file:   Semana 1/react/package.json
        new file:   Semana 1/react/public/bundle.js
        new file:   Semana 1/react/public/index.html
        new file:   Semana 1/react/public/script.js
        new file:   Semana 1/react/src/index.js
        new file:   Semana 1/react/src/soma.js
        new file:   Semana 1/react/webpack.config.js
        new file:   Semana 1/react/yarn.lock

---

# [0.0.3] - 21/08/2020
## Concept of Middleware
## Improving routes
## Inclusion of Uuid dependecy


**Changed Files**

        modified:   Changelog.md
        modified:   Semana 1/package.json
        modified:   Semana 1/src/index.js
        modified:   Semana 1/yarn.lock

---

# [0.0.2] - 21/08/2020
## Concepts about NODE JS, REST API, HTTP verbs and Params
## Creation of express app and routes

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        new file:   Semana 1/package.json
        new file:   Semana 1/src/index.js
        new file:   Semana 1/yarn.lock

---


# [0.0.1] - 17/08/2020
## Git Project Creation
## Git Ignore Include
## Folder Structure defined


**Changed Files**

       new file:   .gitignore
       new file:   Changelog.md

 